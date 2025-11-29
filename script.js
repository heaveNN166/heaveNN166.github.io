document.addEventListener('DOMContentLoaded', () => {
    const classCards = document.querySelectorAll('.card');
    const classSelectionScreen = document.getElementById('class-selection');
    const calculatorScreen = document.getElementById('calculator');
    const backBtn = document.getElementById('back-btn');
    const resetBtn = document.getElementById('reset-btn');
    const levelInput = document.getElementById('char-level');
    const usedPointsSpan = document.getElementById('used-points');
    const totalPointsSpan = document.getElementById('total-points');
    const skillTree = document.getElementById('skill-tree');

    let currentClass = null;
    let charLevel = 1;
    let totalPoints = 0;
    let usedPoints = 0;
    let skillsState = {}; // { skillId: level }
    let activeTooltipSkillId = null; // For mobile: track which skill has tooltip open

    function isTouchDevice() {
        return (('ontouchstart' in window) ||
            (navigator.maxTouchPoints > 0) ||
            (navigator.msMaxTouchPoints > 0));
    }

    // Initialize
    classCards.forEach(card => {
        card.addEventListener('click', () => {
            currentClass = card.dataset.class;
            loadClass(currentClass);
        });
    });

    backBtn.addEventListener('click', () => {
        calculatorScreen.classList.remove('active');
        calculatorScreen.classList.add('hidden');
        classSelectionScreen.classList.remove('hidden');
        classSelectionScreen.classList.add('active');
        currentClass = null;
    });

    levelInput.addEventListener('input', (e) => {
        let val = parseInt(e.target.value);
        if (val < 1) val = 1;
        if (val > 80) val = 80;
        charLevel = val;
        updatePoints();
        renderTree(); // Re-render to update locked states
    });

    resetBtn.addEventListener('click', () => {
        skillsState = {};
        updatePoints();
        renderTree();
    });

    // Global click to close tooltip on mobile
    document.addEventListener('click', (e) => {
        if (isTouchDevice()) {
            hideTooltip();
            activeTooltipSkillId = null;
        }
    });

    function loadClass(className) {
        classSelectionScreen.classList.remove('active');
        classSelectionScreen.classList.add('hidden');
        calculatorScreen.classList.remove('hidden');
        calculatorScreen.classList.add('active');

        skillsState = {};
        charLevel = parseInt(levelInput.value);
        updatePoints();
        renderTree();
    }

    function updatePoints() {
        totalPoints = Math.floor(charLevel / 2);
        usedPoints = Object.values(skillsState).reduce((a, b) => a + b, 0);

        usedPointsSpan.textContent = usedPoints;
        totalPointsSpan.textContent = totalPoints;
    }

    function renderTree() {
        skillTree.innerHTML = '';
        const skills = skillData[currentClass];

        if (!skills) return;

        // Create tooltip element if not exists
        let tooltip = document.getElementById('skill-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'skill-tooltip';
            tooltip.className = 'tooltip';
            document.body.appendChild(tooltip);
        }

        // Reset tooltip state on re-render (prevents stale info on mobile)
        if (isTouchDevice()) {
            tooltip.style.display = 'none';
            activeTooltipSkillId = null;
        }

        skills.forEach(skill => {
            const node = document.createElement('div');
            node.className = 'skill-node';
            node.style.gridRow = skill.row;
            node.style.gridColumn = skill.col;

            const currentLevel = skillsState[skill.id] || 0;
            const isMaxed = currentLevel >= skill.maxLevel;
            const canUpgrade = currentLevel < skill.maxLevel && checkRequirements(skill, currentLevel + 1);
            const isLocked = !canUpgrade && !isMaxed;

            if (isLocked) node.classList.add('locked');
            else node.classList.add('available');

            if (isMaxed) node.classList.add('maxed');

            const img = document.createElement('img');
            img.src = skill.image;
            img.alt = skill.name;

            const levelBadge = document.createElement('div');
            levelBadge.className = 'skill-level';
            levelBadge.textContent = `${currentLevel}/${skill.maxLevel}`;

            node.appendChild(img);
            node.appendChild(levelBadge);

            // Interactions
            node.addEventListener('click', (e) => {
                // Check if it's a touch interaction (simple heuristic or state)
                // We'll use a global flag or check event type if possible, but click fires on touch too.
                // Better approach: Use a state to track if we are in "touch mode" or check for touch capability.

                if (isTouchDevice()) {
                    e.stopPropagation(); // Prevent document click from closing it immediately

                    if (activeTooltipSkillId !== skill.id) {
                        // First tap: Show tooltip
                        showTooltip(e, skill, currentLevel, isLocked);
                        activeTooltipSkillId = skill.id;
                    } else {
                        // Second tap: Add point
                        addPoint(skill);
                        // Optional: keep tooltip open or update it? 
                        // addPoint re-renders tree, so tooltip might disappear or need re-showing.
                        // renderTree clears innerHTML, so tooltip (if inside) is gone. 
                        // But our tooltip is appended to body (line 81), so it persists.
                        // However, renderTree is called, which might reset things.
                        // Let's let the re-render happen.
                    }
                } else {
                    // Desktop: Click always adds point
                    addPoint(skill);
                }
            });

            node.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                removePoint(skill);
            });

            // Tooltip - Desktop only (mostly)
            node.addEventListener('mouseenter', (e) => {
                if (!isTouchDevice()) {
                    showTooltip(e, skill, currentLevel, isLocked);
                }
            });
            node.addEventListener('mousemove', (e) => {
                if (!isTouchDevice()) {
                    moveTooltip(e);
                }
            });
            node.addEventListener('mouseleave', () => {
                if (!isTouchDevice()) {
                    hideTooltip();
                }
            });

            skillTree.appendChild(node);
        });

        // Draw arrows after nodes are placed
        setTimeout(drawArrows, 0);
    }

    function drawArrows() {
        const skills = skillData[currentClass];
        if (!skills) return;

        // Remove existing SVG if any
        const existingSvg = document.querySelector('.skill-arrows');
        if (existingSvg) existingSvg.remove();

        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add('skill-arrows');
        skillTree.appendChild(svg);

        // Get container offsets
        const treeRect = skillTree.getBoundingClientRect();

        skills.forEach(skill => {
            // Check requirements for level 1 of this skill to find parent
            if (skill.levels[0].reqSkills) {
                Object.keys(skill.levels[0].reqSkills).forEach(reqId => {
                    const parentSkill = skills.find(s => s.id === reqId);
                    if (parentSkill) {
                        const parentNode = Array.from(document.querySelectorAll('.skill-node')).find(n => {
                            const img = n.querySelector('img');
                            return img && img.alt === parentSkill.name;
                        });
                        const childNode = Array.from(document.querySelectorAll('.skill-node')).find(n => {
                            const img = n.querySelector('img');
                            return img && img.alt === skill.name;
                        });

                        if (parentNode && childNode) {
                            drawOrthogonalLine(svg, parentNode, childNode, treeRect);
                        }
                    }
                });
            }
        });
    }

    function drawOrthogonalLine(svg, startElem, endElem, containerRect) {
        const startRect = startElem.getBoundingClientRect();
        const endRect = endElem.getBoundingClientRect();

        // Calculate coordinates relative to the container
        const startX = startRect.right - containerRect.left;
        const startY = startRect.top + startRect.height / 2 - containerRect.top;
        const endX = endRect.left - containerRect.left;
        const endY = endRect.top + endRect.height / 2 - containerRect.top;

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.classList.add('skill-arrow-path');

        // Calculate orthogonal path
        const midX = startX + (endX - startX) / 2;

        // Construct path data
        let d = `M ${startX} ${startY}`;
        d += ` L ${midX} ${startY}`;
        d += ` L ${midX} ${endY}`;
        d += ` L ${endX} ${endY}`;

        path.setAttribute("d", d);
        svg.appendChild(path);
    }

    function checkRequirements(skill, targetLevel) {
        // targetLevel is the level we want to upgrade TO (1-indexed)
        if (targetLevel < 1 || targetLevel > skill.maxLevel) return false;

        const levelReq = skill.levels[targetLevel - 1]; // levels array is 0-indexed

        // Check Character Level Requirement
        if (charLevel < levelReq.charLevel) return false;

        // Check Skill Requirements
        for (const [reqSkillId, reqLevel] of Object.entries(levelReq.reqSkills)) {
            const currentReqLevel = skillsState[reqSkillId] || 0;
            if (currentReqLevel < reqLevel) return false;
        }

        return true;
    }

    function addPoint(skill) {
        const currentLevel = skillsState[skill.id] || 0;
        const targetLevel = currentLevel + 1;

        if (!checkRequirements(skill, targetLevel)) return;
        if (usedPoints >= totalPoints) return;
        if (currentLevel >= skill.maxLevel) return;

        skillsState[skill.id] = targetLevel;
        updatePoints();
        renderTree();
    }

    function removePoint(skill) {
        const currentLevel = skillsState[skill.id] || 0;
        if (currentLevel <= 0) return;

        // Check if removing this point breaks dependencies of other learned skills
        const canRemove = checkDependencySafety(skill.id, currentLevel);

        if (canRemove) {
            skillsState[skill.id] = currentLevel - 1;
            if (skillsState[skill.id] === 0) delete skillsState[skill.id];
            updatePoints();
            renderTree();
        } else {
            alert("Cannot remove this skill because other skills depend on it.");
        }
    }

    function checkDependencySafety(skillId, currentLevel) {
        // If we reduce skillId to currentLevel - 1, will any other learned skill become invalid?
        const newLevel = currentLevel - 1;

        for (const [otherId, otherLvl] of Object.entries(skillsState)) {
            if (otherLvl > 0) {
                const otherSkill = skillData[currentClass].find(s => s.id === otherId);
                // Check each level of the other skill
                for (let lvl = 1; lvl <= otherLvl; lvl++) {
                    const lvlReq = otherSkill.levels[lvl - 1];
                    if (lvlReq.reqSkills[skillId] !== undefined && newLevel < lvlReq.reqSkills[skillId]) {
                        return false;
                    }
                }
            }
        }
        return true;
    }

    function showTooltip(e, skill, currentLevel, isLocked) {
        const tooltip = document.getElementById('skill-tooltip');
        tooltip.style.display = 'block';

        let html = `<h4>${skill.name}</h4>`;

        // Current Level Info
        if (currentLevel > 0) {
            const curLvlData = skill.levels[currentLevel - 1];
            html += `<div class="current-level">
                        <strong>Level ${currentLevel}:</strong><br>
                        ${curLvlData.desc}<br>
                        <span style="color: #aaa;">${curLvlData.usage}</span>
                     </div>`;
        }
        // else {
        //     html += `<div class="desc">${skill.desc}</div>`;
        // }

        // Next Level Info
        const nextLevel = currentLevel + 1;
        if (nextLevel <= skill.maxLevel) {
            const nextLvlData = skill.levels[nextLevel - 1];
            let reqText = `Req Level: ${nextLvlData.charLevel}`;

            const skillReqs = Object.entries(nextLvlData.reqSkills);
            if (skillReqs.length > 0) {
                reqText += '<br>Req Skills: ';
                const reqStrings = skillReqs.map(([reqId, reqLvl]) => {
                    const reqSkill = skillData[currentClass].find(s => s.id === reqId);
                    const currentReqLevel = skillsState[reqId] || 0;
                    const satisfied = currentReqLevel >= reqLvl;
                    const color = satisfied ? '#0f0' : '#f00';
                    return `<span style="color: ${color}">${reqSkill.name} Lv.${reqLvl}</span>`;
                });
                reqText += reqStrings.join(', ');
            }

            html += `<div class="next-level">
                        <strong>Next Level (${nextLevel}):</strong><br>
                        ${nextLvlData.desc}<br>
                        <span style="color: #aaa;">${nextLvlData.usage}</span><br>
                        <div class="req">${reqText}</div>
                     </div>`;
        }

        if (isLocked && currentLevel === 0) {
            html += `<div class="req" style="color: red;">LOCKED</div>`;
        }

        tooltip.innerHTML = html;
        moveTooltip(e);
    }

    function moveTooltip(e) {
        const tooltip = document.getElementById('skill-tooltip');
        const x = e.clientX + 15;
        const y = e.clientY + 15;
        tooltip.style.left = x + 'px';
        tooltip.style.top = y + 'px';
    }

    function hideTooltip() {
        const tooltip = document.getElementById('skill-tooltip');
        tooltip.style.display = 'none';
    }
});
