const skillData = {
    knight: [
        // Column 1: Slasher Line
        {
            id: "slasher",
            name: "Slasher",
            maxLevel: 5,
            image: "knight skills/Slasher.png",
            row: 2,
            col: 1,
            levels: [
                { charLevel: 1, reqSkills: {}, desc: "Deals 102% + 15 physical damage to a random front row enemy, increases rage by 5 points", usage: "Cooldown: 5 sec, Rage: +5" },
                { charLevel: 14, reqSkills: {}, desc: "Deals 104% + 35 physical damage to a random front row enemy, increases rage by 5 points", usage: "Cooldown: 5 sec, Rage: +5" },
                { charLevel: 24, reqSkills: {}, desc: "Deals 106% + 55 physical damage to a random front row enemy, increases rage by 5 points", usage: "Cooldown: 5 sec, Rage: +5" },
                { charLevel: 34, reqSkills: {}, desc: "Deals 110% + 95 physical damage to a random front row enemy, increases rage by 5 points", usage: "Cooldown: 5 sec, Rage: +5" },
                { charLevel: 44, reqSkills: {}, desc: "Deals 132% + 205 physical damage to a random front row enemy, increases rage by 5 points", usage: "Cooldown: 5 sec, Rage: +5" }
            ]
        },
        {
            id: "ultimate_slasher",
            name: "Ultimate Slasher",
            maxLevel: 5,
            image: "knight skills/Ultimate_Slasher.png",
            row: 2,
            col: 2,
            levels: [
                { charLevel: 5, reqSkills: { slasher: 1 }, desc: "Deals 120% + 50 physical damage to a single target", usage: "Cooldown: 5 sec, Rage: -10" },
                { charLevel: 16, reqSkills: { slasher: 2 }, desc: "Deals 125% + 100 physical damage to a single target. QTE: +5% Damage.", usage: "Cooldown: 5 sec, Rage: -10" },
                { charLevel: 26, reqSkills: { slasher: 3 }, desc: "Deals 130% + 150 physical damage to a single target. QTE: +5% Damage.", usage: "Cooldown: 5 sec, Rage: -10" },
                { charLevel: 36, reqSkills: { slasher: 4 }, desc: "Deals 135% + 200 physical damage to a single target. QTE: +5% Damage.", usage: "Cooldown: 5 sec, Rage: -10" },
                { charLevel: 46, reqSkills: { slasher: 5 }, desc: "Deals 150% + 300 physical damage to a single target. QTE: +5% Damage.", usage: "Cooldown: 5 sec, Rage: -10" }
            ]
        },
        {
            id: "delphic_destroyer",
            name: "Delphic Destroyer",
            maxLevel: 3,
            image: "knight skills/Delphic_Destroyer.png",
            row: 2,
            col: 3,
            levels: [
                { charLevel: 10, reqSkills: { ultimate_slasher: 1 }, desc: "Deals 300% + 432 physical damage to a single target.", usage: "Cooldown: 60 sec, Rage: -80" },
                { charLevel: 30, reqSkills: { ultimate_slasher: 3 }, desc: "Deals 320% + 505 physical damage to a single target. QTE: +25% Damage.", usage: "Cooldown: 60 sec, Rage: -80" },
                { charLevel: 46, reqSkills: { ultimate_slasher: 5 }, desc: "Deals 340% + 560 physical damage to a single target. QTE: +25% Damage.", usage: "Cooldown: 60 sec, Rage: -80" }
            ]
        },
        {
            id: "whirlwind",
            name: "Whirlwind",
            maxLevel: 4,
            image: "knight skills/Whirlwind.png",
            row: 2,
            col: 5,
            levels: [
                { charLevel: 20, reqSkills: { delphic_destroyer: 1 }, desc: "Deals 80% physical damage to all enemies; 20% chance to deal an extra 200 damage.", usage: "Cooldown: 30 sec, Rage: -50" },
                { charLevel: 30, reqSkills: { delphic_destroyer: 1 }, desc: "Deals 85% physical damage to all enemies; 25% chance to deal an extra 250 damage. QTE: Damage boost of 25%.", usage: "Cooldown: 30 sec, Rage: -50" },
                { charLevel: 40, reqSkills: { delphic_destroyer: 2 }, desc: "Deals 90% physical damage to all enemies; 30% chance to deal an extra 300 damage. QTE: Damage boost of 25%.", usage: "Cooldown: 30 sec, Rage: -50" },
                { charLevel: 50, reqSkills: { delphic_destroyer: 3 }, desc: "Deals 95% physical damage to all enemies; 35% chance to deal an extra 800 damage. QTE: Damage boost of 25%.", usage: "Cooldown: 30 sec, Rage: -50" }
            ]
        },
        {
            id: "enhanced_delphic_destroyer",
            name: "Enhanced Delphic Destroyer",
            maxLevel: 2,
            image: "knight skills/Enhanced_Delphic_Destroyer.png",
            row: 2,
            col: 6,
            levels: [
                { charLevel: 24, reqSkills: { whirlwind: 1, intercept: 1 }, desc: "Deals 378% + 630 physical damage to a single front row enemy, 30% chance to receive an extra 30 rage", usage: "Cooldown: 60 sec, Rage: -100" },
                { charLevel: 44, reqSkills: { whirlwind: 3, intercept: 2 }, desc: "Deals 405% + 768 physical damage to a single front row enemy, 30% chance to receive an extra 30 rageQTE: Damage boost of 25%", usage: "Cooldown: 60 sec, Rage: -100" }
            ]
        },

        // Column 2: Heart of Rage Line
        {
            id: "heart_of_rage",
            name: "Heart of Rage",
            maxLevel: 2,
            image: "knight skills/Heart_of_Rage.png",
            row: 1,
            col: 3,
            levels: [
                { charLevel: 7, reqSkills: {}, desc: "Receive an extra 5 rage after each action.", usage: "Passive" },
                { charLevel: 26, reqSkills: {}, desc: "Receive an extra 10 rage after each action.", usage: "Passive" }
            ]
        },
        {
            id: "combat_master",
            name: "Combat Master",
            maxLevel: 3,
            image: "knight skills/Combat_Master.png",
            row: 1,
            col: 4,
            levels: [
                { charLevel: 14, reqSkills: { heart_of_rage: 1 }, desc: "Physical attack boost of 5%", usage: "Passive" },
                { charLevel: 26, reqSkills: { heart_of_rage: 2 }, desc: "Physical attack boost of 10%.", usage: "Passive" },
                { charLevel: 32, reqSkills: { heart_of_rage: 2 }, desc: "Physical attack boost of 15%.", usage: "Passive" }
            ]
        },
        {
            id: "intercept",
            name: "Intercept",
            maxLevel: 3,
            image: "knight skills/Intercept.png",
            row: 1,
            col: 5,
            levels: [
                { charLevel: 22, reqSkills: { combat_master: 2 }, desc: "Deals 400 Physical Damage and deducts 30 rage points to a single front row enemy", usage: "Cooldown: 60 sec, Rage: -25" },
                { charLevel: 34, reqSkills: { combat_master: 3 }, desc: "Deals 1500 Physical Damage and deducts 40 rage points to a single front row enemy. QTE: Extra deduction of 10", usage: "Cooldown: 60 sec, Rage: -25" },
                { charLevel: 46, reqSkills: { combat_master: 3 }, desc: "Deals 3000 Physical Damage and deducts 40 rage points to a single front row enemy. QTE: Extra deduction of 10", usage: "Cooldown: 60 sec, Rage: -25" }
            ]
        },

        // Column 3: Agoran Shield Line
        {
            id: "agoran_shield",
            name: "Agoran Shield",
            maxLevel: 3,
            image: "knight skills/Agoran_Shield.png",
            row: 3,
            col: 3,
            levels: [
                { charLevel: 12, reqSkills: {}, desc: "Generates a shield that will absorb damage equivalent to 20% of max HP; lasts 3 turns", usage: "Cooldown: 60 sec, Rage: -30" },
                { charLevel: 30, reqSkills: {}, desc: "Generates a shield that will absorb damage equivalent to 20% of max HP; lasts 4 turns. QTE: Bonus 500 damage absorption", usage: "Cooldown: 60 sec, Rage: -30" },
                { charLevel: 42, reqSkills: {}, desc: "Generates a shield that will absorb damage equivalent to 20% of max HP; lasts 5 turns. QTE: Bonus 800 damage absorption", usage: "Cooldown: 60 sec, Rage: -30" }
            ]
        },
        {
            id: "shadow_thrasher",
            name: "Shadow Thrasher",
            maxLevel: 4,
            image: "knight skills/Shadow_Thrasher.png",
            row: 3,
            col: 4,
            levels: [
                { charLevel: 20, reqSkills: { agoran_shield: 1 }, desc: "Deals 162% + 130 Physical damage to a single front row enemy.", usage: "Cooldown: 1 sec, Rage: -35" },
                { charLevel: 20, reqSkills: { agoran_shield: 2 }, desc: "Deals 162% + 130 Physical damage to a single front row enemy. QTE: Added hp bleed that does 60 damage each turn, last for 5 turns. Bleed is stackable for 5 layers.", usage: "Cooldown: 1 sec, Rage: -35" },
                { charLevel: 20, reqSkills: { agoran_shield: 2 }, desc: "Deals 175% + 260 Physical damage to a single front row enemy. QTE: Added hp bleed that does 90 damage each turn, last for 5 turns. Bleed is stackable for 5 layers.", usage: "Cooldown: 1 sec, Rage: -35" },
                { charLevel: 20, reqSkills: { agoran_shield: 3 }, desc: "Deals 195% + 390 Physical damage to a single front row enemy. QTE: Added hp bleed that does 120 damage each turn, last for 5 turns. Bleed is stackable for 5 layers.", usage: "Cooldown: 1 sec, Rage: -35" }
            ]
        },
        {
            id: "tenacity",
            name: "Tenacity",
            maxLevel: 3,
            image: "knight skills/Tenacity.png",
            row: 3,
            col: 5,
            levels: [
                { charLevel: 36, reqSkills: { shadow_thrasher: 2 }, desc: "Damage received reduced by 3%, crit receive rate reduced by 1%", usage: "Passive" },
                { charLevel: 46, reqSkills: { shadow_thrasher: 3 }, desc: "Damage received reduced by 5%, crit receive rate reduced by 5%", usage: "Passive" },
                { charLevel: 54, reqSkills: { shadow_thrasher: 4 }, desc: "Damage received reduced by 7%, crit receive rate reduced by 5%", usage: "Passive" }
            ]
        },
        {
            id: "apollos_shield",
            name: "Apollo's Shield",
            maxLevel: 2,
            image: "knight skills/Apollos_Shield.png",
            row: 3,
            col: 6,
            levels: [
                { charLevel: 44, reqSkills: { tenacity: 2, reverse_damage: 1 }, desc: "Reduction of 20% damage recieved to all teamates, last 2 turns", usage: "Cooldown: 60 sec, Rage: -45" },
                { charLevel: 54, reqSkills: { tenacity: 3, reverse_damage: 2 }, desc: "Reduction of 30% damage recieved to all teamates, last 3 turns. QTE: Duration increase by 1 turn", usage: "Cooldown: 60 sec, Rage: -45" }
            ]
        },

        // Column 4: Defense Line
        {
            id: "enhanced_block",
            name: "Enhanced Block",
            maxLevel: 2,
            image: "knight skills/Enhanced_Block.png",
            row: 4,
            col: 4,
            levels: [
                { charLevel: 20, reqSkills: { divine_blessing: 1 }, desc: "50% chance to restore 4% of HP after block. Restore maximum 1500 HP in each trigger.", usage: "Passive" },
                { charLevel: 40, reqSkills: { divine_blessing: 2 }, desc: "100% chance to restore 4% of HP after block. Restore maximum 3000 HP in each trigger.", usage: "Passive" }
            ]
        },
        {
            id: "reverse_damage",
            name: "Reverse Damage",
            maxLevel: 3,
            image: "knight skills/Reverse_Damage.png",
            row: 4,
            col: 5,
            levels: [
                { charLevel: 22, reqSkills: { enhanced_block: 1 }, desc: "Generates a shield of thorns around you reflecting 200 damage, last 10 times.", usage: "Cooldown: 10 sec, Rage: -30" },
                { charLevel: 40, reqSkills: { enhanced_block: 2 }, desc: "Generates a shield of thorns around you reflecting 500 damage, last 20 times. QTE: Reflected damage +25%", usage: "Cooldown: 10 sec, Rage: -30" },
                { charLevel: 50, reqSkills: { enhanced_block: 2 }, desc: "Generates a shield of thorns around you reflecting 800 damage, last 30 times. QTE: Reflected damage +25%", usage: "Cooldown: 10 sec, Rage: -30" }
            ]
        },
        {
            id: "divine_blessing",
            name: "Divine Blessing",
            maxLevel: 2,
            image: "knight skills/Divine_Blessing.png",
            row: 4,
            col: 2,
            levels: [
                { charLevel: 8, reqSkills: {}, desc: "PDEF increase of 10%, Max HP increase of 10%, Recieved healing increase of 10%.", usage: "Passive" },
                { charLevel: 18, reqSkills: {}, desc: "PDEF increase of 20%, Max HP increase of 20%, Received healing increase of 20%", usage: "Passive" }
            ]
        }
    ],
    archer: [
        // Column 1: Arrow Strike Line
        {
            id: "arrow_strike",
            name: "Arrow Strike",
            maxLevel: 5,
            image: "archer skills/Arrow_Strike.png",
            row: 2,
            col: 1,
            levels: [
                { charLevel: 1, reqSkills: {}, desc: "Deals 80% + 15 physical damage to a random single enemy, crit rate increased by 20% and increases rage by 5 points", usage: "Cooldown: 1 sec, Rage: +5" },
                { charLevel: 14, reqSkills: {}, desc: "Deals 85% + 35 physical damage to a random single enemy, crit rate increased by 20% and increases rage by 5 points", usage: "Cooldown: 1 sec, Rage: +5" },
                { charLevel: 24, reqSkills: {}, desc: "Deals 90% + 55 physical damage to a random single enemy, crit rate increased by 20% and increases rage by 5 points", usage: "Cooldown: 1 sec, Rage: +5" },
                { charLevel: 34, reqSkills: {}, desc: "Deals 95% + 95 physical damage to a random single enemy, crit rate increased by 20% and increases rage by 5 points", usage: "Cooldown: 1 sec, Rage: +5" },
                { charLevel: 44, reqSkills: {}, desc: "Deals 100% + 205 physical damage to a random single enemy, crit rate increased by 20% and increases rage by 5 points", usage: "Cooldown: 1 sec, Rage: +5" }
            ]
        },
        {
            id: "multi_shot",
            name: "Multi-shot",
            maxLevel: 5,
            image: "archer skills/Multi-shot.png",
            row: 2,
            col: 2,
            levels: [
                { charLevel: 5, reqSkills: { arrow_strike: 1 }, desc: "Randomly completes two attacks, with each attack dealing 45% + 25 physical damage, crit rate +100%", usage: "Cooldown: 5 sec, Rage: -10" },
                { charLevel: 16, reqSkills: { arrow_strike: 2 }, desc: "Randomly completes two attacks, with each attack dealing 47% + 50 physical damage, crit rate +100%. QTE: Damage boost of 25%", usage: "Cooldown: 5 sec, Rage: -10" },
                { charLevel: 26, reqSkills: { arrow_strike: 3 }, desc: "Randomly completes two attacks, with each attack dealing 49% + 75 physical damage, crit rate +100%. QTE: Damage boost of 25%", usage: "Cooldown: 5 sec, Rage: -10" },
                { charLevel: 36, reqSkills: { arrow_strike: 4 }, desc: "Randomly completes two attacks, with each attack dealing 51% + 100 physical damage, crit rate +100%. QTE: Damage boost of 25%", usage: "Cooldown: 5 sec, Rage: -10" },
                { charLevel: 46, reqSkills: { arrow_strike: 5 }, desc: "Randomly completes two attacks, with each attack dealing 55% + 150 physical damage, crit rate +100%. QTE: Damage boost of 25%", usage: "Cooldown: 5 sec, Rage: -10" }
            ]
        },
        {
            id: "delphic_sniper",
            name: "Delphic Sniper",
            maxLevel: 3,
            image: "archer skills/Delphic_Sniper.png",
            row: 2,
            col: 3,
            levels: [
                { charLevel: 10, reqSkills: { multi_shot: 1 }, desc: "Deals 280% + 380 physical damage to a random single enemy, crit rate increased by 20%", usage: "Cooldown: 60 sec, Rage: -80" },
                { charLevel: 30, reqSkills: { multi_shot: 3 }, desc: "Deals 300% + 432 physical damage to a random single enemy, crit rate increased by 20%. QTE: Damage increase of 25%", usage: "Cooldown: 60 sec, Rage: -80" },
                { charLevel: 46, reqSkills: { multi_shot: 5 }, desc: "Deals 320% + 505 physical damage to a random single enemy, crit rate increased by 20%. QTE: Damage increase of 25%", usage: "Cooldown: 60 sec, Rage: -80" }
            ]
        },
        {
            id: "lunatic_fire",
            name: "Lunatic Fire",
            maxLevel: 4,
            image: "archer skills/Lunatic_Fire.png",
            row: 2,
            col: 5,
            levels: [
                { charLevel: 20, reqSkills: { delphic_sniper: 1 }, desc: "Deals 85% physical damage to all enemies, crit rate increased by 10", usage: "Cooldown: 20 sec, Rage: -45" },
                { charLevel: 30, reqSkills: { delphic_sniper: 1 }, desc: "Deals 96% physical damage to all enemies, crit rate increased by 10. QTE: Damage boost of 25%", usage: "Cooldown: 20 sec, Rage: -45" },
                { charLevel: 40, reqSkills: { delphic_sniper: 2 }, desc: "Deals 104% physical damage to all enemies, crit rate increased by 10. QTE: Damage boost of 25%", usage: "Cooldown: 20 sec, Rage: -45" },
                { charLevel: 50, reqSkills: { delphic_sniper: 3 }, desc: "Deals 134% physical damage to all enemies, crit rate increased by 10. QTE: Damage boost of 25%", usage: "Cooldown: 20 sec, Rage: -45" }
            ]
        },
        {
            id: "delphic_death_star",
            name: "Delphic Death Star",
            maxLevel: 2,
            image: "archer skills/Delphic_Death_Star.png",
            row: 2,
            col: 6,
            levels: [
                { charLevel: 24, reqSkills: { lunatic_fire: 1, bloodthirsty_strike: 1 }, desc: "Deals 189% +315 physical damage to 2 to 4 random enemies and has a 50% chance to cause the enemy to lose a turn, crit rate increased by 20%", usage: "Cooldown: 60 sec, Rage: -100" },
                { charLevel: 44, reqSkills: { lunatic_fire: 3, bloodthirsty_strike: 2 }, desc: "Deals 202% +383 physical damage to 2 to 4 random enemies and has a 50% chance to cause the enemy to lose a turn, crit rate increased by 20%. QTE: Damage increase of 25%", usage: "Cooldown: 60 sec, Rage: -100" }
            ]
        },

        // Column 2: Acumen Line
        {
            id: "acumen",
            name: "Acumen",
            maxLevel: 2,
            image: "archer skills/Acumen.png",
            row: 1,
            col: 3,
            levels: [
                { charLevel: 7, reqSkills: {}, desc: "Receive an extra 3 rage after each critical attack.", usage: "Passive" },
                { charLevel: 26, reqSkills: {}, desc: "Receive an extra 5 rage after each critical attack.", usage: "Passive" }
            ]
        },
        {
            id: "focused_attack",
            name: "Focused Attack",
            maxLevel: 3,
            image: "archer skills/Focused_Attack.png",
            row: 1,
            col: 4,
            levels: [
                { charLevel: 14, reqSkills: { acumen: 1 }, desc: "Physical attack boost of 5%", usage: "Passive" },
                { charLevel: 26, reqSkills: { acumen: 2 }, desc: "Physical attack boost of 10%", usage: "Passive" },
                { charLevel: 32, reqSkills: { acumen: 2 }, desc: "Physical attack boost of 15%", usage: "Passive" }
            ]
        },
        {
            id: "bloodthirsty_strike",
            name: "Bloodthirsty Strike",
            maxLevel: 3,
            image: "archer skills/Bloodthirsty_Strike.png",
            row: 1,
            col: 5,
            levels: [
                { charLevel: 22, reqSkills: { focused_attack: 2 }, desc: "Deals 120% to a single front row target and converts 50% of damage dealt to HP regen", usage: "Cooldown: 45 sec, Rage: -25" },
                { charLevel: 34, reqSkills: { focused_attack: 3 }, desc: "Deals 120% to a single front row target and converts 60% of damage dealt to HP regen. QTE: HP Regen increased by 10%", usage: "Cooldown: 45 sec, Rage: -25" },
                { charLevel: 44, reqSkills: { focused_attack: 3 }, desc: "Deals 120% to a single front row target and converts 70% of damage dealt to HP regen. QTE: HP Regen increased by 10%", usage: "Cooldown: 45 sec, Rage: -25" }
            ]
        },

        // Column 3: Poison Line
        {
            id: "poison_arrow",
            name: "Poison Arrow",
            maxLevel: 3,
            image: "archer skills/Poison_Arrow.png",
            row: 3,
            col: 3,
            levels: [
                { charLevel: 12, reqSkills: {}, desc: "Deals 44% damage to a random single enemy, reduces HP by 44% of physical damage, lasts 3 turns.", usage: "Cooldown: 25 sec, Rage: -20" },
                { charLevel: 30, reqSkills: {}, desc: "Deals 52% damage to a random single enemy, reduces HP by 52% of physical damage, lasts 3 turns. QTE: Duration +1", usage: "Cooldown: 25 sec, Rage: -20" },
                { charLevel: 42, reqSkills: {}, desc: "Deals 64% damage to a random single enemy, reduces HP by 64% of physical damage, lasts 3 turns. QTE: Duration +1", usage: "Cooldown: 25 sec, Rage: -20" }
            ]
        },
        {
            id: "deep_freeze",
            name: "Deep Freeze",
            maxLevel: 4,
            image: "archer skills/Deep_Freeze.png",
            row: 3,
            col: 4,
            levels: [
                { charLevel: 20, reqSkills: { poison_arrow: 1 }, desc: "Deals 162% + 130 physical damage to a single rear enemy and reduces casting speed by 100%, lasts 2 turns", usage: "Cooldown: 30 sec, Rage: -35" },
                { charLevel: 32, reqSkills: { poison_arrow: 2 }, desc: "Deals 162% + 130 physical damage to a single rear enemy and reduces casting speed by 100%, lasts 2 turns. QTE: Duration +1", usage: "Cooldown: 30 sec, Rage: -35" },
                { charLevel: 38, reqSkills: { poison_arrow: 2 }, desc: "Deals 175% + 260 physical damage to a single rear enemy and reduces casting speed by 100%, lasts 2 turns. QTE: Duration +1", usage: "Cooldown: 30 sec, Rage: -35" },
                { charLevel: 48, reqSkills: { poison_arrow: 3 }, desc: "Deals 195% + 390 physical damage to a single rear enemy and reduces casting speed by 100%, lasts 2 turns. QTE: Duration +1", usage: "Cooldown: 30 sec, Rage: -35" }
            ]
        },
        {
            id: "armor_piercer",
            name: "Armor Piercer",
            maxLevel: 3,
            image: "archer skills/Armor_Piercer.png",
            row: 3,
            col: 5,
            levels: [
                { charLevel: 36, reqSkills: { deep_freeze: 2 }, desc: "Deals 140% + 100 damage to a single rear target, physical defense reduced by 100, lasts 3 turns. Defense reduction can be stacked a maximum of 4 times.", usage: "Cooldown: 1 sec, Rage: -35" },
                { charLevel: 44, reqSkills: { deep_freeze: 3 }, desc: "Deals 155% + 200 damage to a single rear target, physical defense reduced by 100, lasts 3 turns. Defense reduction can be stacked a maximum of 4 times. QTE: 25% damage increase", usage: "Cooldown: 1 sec, Rage: -35" },
                { charLevel: 54, reqSkills: { deep_freeze: 4 }, desc: "Deals 175% + 390 damage to a single rear target, physical defense reduced by 100, lasts 3 turns. Defense reduction can be stacked a maximum of 4 times. QTE: 25% damage increase", usage: "Cooldown: 1 sec, Rage: -35" }
            ]
        },
        {
            id: "incendiary_shot",
            name: "Incendiary Shot",
            maxLevel: 2,
            image: "archer skills/Incendiary_Shot.png",
            row: 3,
            col: 6,
            levels: [
                { charLevel: 42, reqSkills: { scatter_shot: 1, armor_piercer: 2 }, desc: "Deals 195% + 390 damage to a single random target and spreads 50% of damage dealt to all enemies within 1 square. In addition, reduces damage by 30% for all targets currently under buffs. Lasts 3 turns.", usage: "Cooldown: 45 sec, Rage: -65" },
                { charLevel: 54, reqSkills: { scatter_shot: 2, armor_piercer: 3 }, desc: "Deals 220% + 450 damage to a single random target and spreads 50% of damage dealt to all enemies within 1 square. In addition, reduces damage by 30% for all targets currently under buffs. Lasts 3 turns. QTE: Damage increase of 25%", usage: "Cooldown: 45 sec, Rage: -65" }
            ]
        },

        // Column 4: Battle Prowess Line
        {
            id: "eye_of_the_eagle",
            name: "Eye of the Eagle",
            maxLevel: 2,
            image: "archer skills/Eye_of_the_Eagle.png",
            row: 4,
            col: 2,
            levels: [
                { charLevel: 8, reqSkills: {}, desc: "Increases Crit Rate and max HP by 10%", usage: "Passive" },
                { charLevel: 18, reqSkills: {}, desc: "Increases Crit Rate and max HP by 20%.", usage: "Passive" }
            ]
        },
        {
            id: "battle_prowess",
            name: "Battle Prowess",
            maxLevel: 2,
            image: "archer skills/Battle_Prowess.png",
            row: 4,
            col: 4,
            levels: [
                { charLevel: 20, reqSkills: { eye_of_the_eagle: 1 }, desc: "After a crit, boosts damage dealt by all teammates by 1%. Stackable up to 5 times; lasts 5 turns.", usage: "Passive" },
                { charLevel: 40, reqSkills: { eye_of_the_eagle: 2 }, desc: "After a crit, boosts damage dealt by all teammates by 2%. Stackable up to 5 times; lasts 5 turns.", usage: "Passive" }
            ]
        },
        {
            id: "scatter_shot",
            name: "Scatter Shot",
            maxLevel: 3,
            image: "archer skills/Scatter_Shot.png",
            row: 4,
            col: 5,
            levels: [
                { charLevel: 22, reqSkills: { battle_prowess: 1 }, desc: "Debuffs one positive buff for all enemies", usage: "Cooldown: 15 sec, Rage: -30" },
                { charLevel: 40, reqSkills: { battle_prowess: 2 }, desc: "Debuffs two positive buffs for all enemies. QTE: Rage decreases by 10", usage: "Cooldown: 15 sec, Rage: -30" },
                { charLevel: 50, reqSkills: { battle_prowess: 2 }, desc: "Debuffs three positive buffs for all enemies. QTE: Rage decreases by 10", usage: "Cooldown: 15 sec, Rage: -30" }
            ]
        }
    ],
    mage: [
        // Column 1: Lightning Line
        {
            id: "lightning_bolt",
            name: "Lightning Bolt",
            maxLevel: 5,
            image: "mage skills/Lightning_Bolt.png",
            row: 2,
            col: 1,
            levels: [
                { charLevel: 1, reqSkills: {}, desc: "Deals 102% + 15 damage to a single enemy, increases rage by 6 points", usage: "Cooldown: 1 sec, Rage: +6" },
                { charLevel: 14, reqSkills: {}, desc: "Deals 104% + 35 damage to a single enemy, increases rage by 6 points", usage: "Cooldown: 1 sec, Rage: +6" },
                { charLevel: 24, reqSkills: {}, desc: "Deals 106% + 55 damage to a single enemy, increases rage by 6 points", usage: "Cooldown: 1 sec, Rage: +6" },
                { charLevel: 34, reqSkills: {}, desc: "Deals 108% + 75 damage to a single enemy, increases rage by 6 points", usage: "Cooldown: 1 sec, Rage: +6" },
                { charLevel: 44, reqSkills: {}, desc: "Deals 110% + 95 damage to a single enemy, increases rage by 6 points", usage: "Cooldown: 1 sec, Rage: +6" }
            ]
        },
        {
            id: "rain_of_fire",
            name: "Rain of Fire",
            maxLevel: 5,
            image: "mage skills/Rain_of_Fire.png",
            row: 2,
            col: 2,
            levels: [
                { charLevel: 5, reqSkills: { lightning_bolt: 1 }, desc: "Deals 85% magic damage to all enemies.", usage: "Cooldown: 10 sec, Rage: -16" },
                { charLevel: 16, reqSkills: { lightning_bolt: 2 }, desc: "Deals 96% magic damage to all enemies. QTE: Damage boost of 25%", usage: "Cooldown: 10 sec, Rage: -16" },
                { charLevel: 26, reqSkills: { lightning_bolt: 3 }, desc: "Deals 104% magic damage to all enemies. QTE: Damage boost of 25%", usage: "Cooldown: 10 sec, Rage: -16" },
                { charLevel: 36, reqSkills: { lightning_bolt: 4 }, desc: "Deals 134% magic damage to all enemies. QTE: Damage boost of 25%", usage: "Cooldown: 10 sec, Rage: -16" },
                { charLevel: 46, reqSkills: { lightning_bolt: 5 }, desc: "Deals 140% magic damage to all enemies. QTE: Damage boost of 25%", usage: "Cooldown: 10 sec, Rage: -16" }
            ]
        },
        {
            id: "delphic_thunder_frenzy",
            name: "Delphic Thunder Frenzy",
            maxLevel: 3,
            image: "mage skills/Delphic_Thunder_Frenzy.png",
            row: 2,
            col: 3,
            levels: [
                { charLevel: 10, reqSkills: { rain_of_fire: 1 }, desc: "Deals 225% + 250 magic damage to front row enemies.", usage: "Cooldown: 60 sec, Rage: -80" },
                { charLevel: 30, reqSkills: { rain_of_fire: 3 }, desc: "Deals 255% + 320 magic damage to front row enemies. QTE: +25% Damage", usage: "Cooldown: 60 sec, Rage: -80" },
                { charLevel: 50, reqSkills: { rain_of_fire: 5 }, desc: "Deals 285% + 380 magic damage to front row enemies. QTE: +25% Damage", usage: "Cooldown: 60 sec, Rage: -80" }
            ]
        },
        {
            id: "thunderer",
            name: "Thunderer",
            maxLevel: 4,
            image: "mage skills/Thunderer.png",
            row: 2,
            col: 5,
            levels: [
                { charLevel: 20, reqSkills: { delphic_thunder_frenzy: 1 }, desc: "Deals 220% + 120 magic damage to a random enemy, 50% chance to reduce enemy casting speed by 100%, lasts 2 turns", usage: "Cooldown: 2 sec, Rage: -50" },
                { charLevel: 30, reqSkills: { delphic_thunder_frenzy: 1 }, desc: "Deals 235% + 155 magic damage to a random enemy, 50% chance to reduce enemy casting speed by 100%, lasts 2 turns.QTE: Magic Damage Boost of 25%", usage: "Cooldown: 2 sec, Rage: -50" },
                { charLevel: 40, reqSkills: { delphic_thunder_frenzy: 2 }, desc: "Deals 275% + 180 magic damage to a random enemy, 50% chance to reduce enemy casting speed by 100%, lasts 2 turns.QTE: Magic Damage Boost of 25%", usage: "Cooldown: 2 sec, Rage: -50" },
                { charLevel: 50, reqSkills: { delphic_thunder_frenzy: 3 }, desc: "Deals 295% + 215 magic damage to a random enemy, 50% chance to reduce enemy casting speed by 100%, lasts 2 turns.QTE: Magic Damage Boost of 25%", usage: "Cooldown: 2 sec, Rage: -50" }
            ]
        },
        {
            id: "delphic_hell_thunder",
            name: "Delphic Hell Thunder",
            maxLevel: 2,
            image: "mage skills/Delphic_Hell_Thunder.png",
            row: 2,
            col: 6,
            levels: [
                { charLevel: 24, reqSkills: { damnation: 1, thunderer: 1 }, desc: "Deals 240% + 250 Magic Damage to all enemies; 10% chance to add binding effect causing inability to move for 1 turn.", usage: "Cooldown: 60 sec, Rage: -100" },
                { charLevel: 44, reqSkills: { damnation: 2, thunderer: 3 }, desc: "Deals 270% + 350 Magic Damage to all enemies; 10% chance to add binding effect causing inability to move for 1 turn. QTE: Damage boost of 25%", usage: "Cooldown: 60 sec, Rage: -100" }
            ]
        },

        // Column 2: Mana Master Line
        {
            id: "heart_elemental",
            name: "Heart Elemental",
            maxLevel: 2,
            image: "mage skills/Heart_Elemental.png",
            row: 1,
            col: 3,
            levels: [
                { charLevel: 7, reqSkills: {}, desc: "Receive rage +1 each time you deal damage to an enemy.", usage: "Passive" },
                { charLevel: 26, reqSkills: {}, desc: "Receive rage +2 each time you deal damage to an enemy.", usage: "Passive" }
            ]
        },
        {
            id: "mana_master",
            name: "Mana Master",
            maxLevel: 3,
            image: "mage skills/Mana_Master.png",
            row: 1,
            col: 4,
            levels: [
                { charLevel: 8, reqSkills: { heart_elemental: 1 }, desc: "Magic Attack boost of 5%", usage: "Passive" },
                { charLevel: 18, reqSkills: { heart_elemental: 2 }, desc: "Magic Attack boost of 10%", usage: "Passive" },
                { charLevel: 30, reqSkills: { heart_elemental: 2 }, desc: "Magic Attack boost of 15%", usage: "Passive" }
            ]
        },
        {
            id: "damnation",
            name: "Damnation",
            maxLevel: 3,
            image: "mage skills/Damnation.png",
            row: 1,
            col: 5,
            levels: [
                { charLevel: 22, reqSkills: { mana_master: 2 }, desc: "Deals 400 damage to all enemies and boosts all damage received by target by 4%, lasts 5 turns.", usage: "Cooldown: 60 sec, Rage: -30" },
                { charLevel: 34, reqSkills: { mana_master: 3 }, desc: "Deals 1200 damage to all enemies and boosts all damage recieved by target by 8%, last 5 turns. QTE: Rage consumption reduction of 5.", usage: "Cooldown: 60 sec, Rage: -30" },
                { charLevel: 44, reqSkills: { mana_master: 3 }, desc: "Deals 2500 damage to all enemies and boosts all damage recieved by target by 10%, last 5 turns. QTE: Rage consumption reduction of 5.", usage: "Cooldown: 60 sec, Rage: -30" }
            ]
        },

        // Column 3: Restoration Line
        {
            id: "restoration",
            name: "Restoration",
            maxLevel: 3,
            image: "mage skills/Restoration.png",
            row: 3,
            col: 3,
            levels: [
                { charLevel: 12, reqSkills: {}, desc: "Restore HP equivalent to 50% + 100 of magic damage to teammate with smallest percentage of HP.", usage: "Cooldown: 15 sec, Rage: -35" },
                { charLevel: 28, reqSkills: {}, desc: "Restore HP equivalent to 65% + 200 of magic damage to teammate with smallest percentage of HP. QTE: Added 10% damage reduction buff for target, lasts 2 turns.", usage: "Cooldown: 15 sec, Rage: -35" },
                { charLevel: 38, reqSkills: {}, desc: "Restore HP equivalent to 75% + 300 of magic damage to teammate with smallest percentage of HP. QTE: Added 15% damage reduction buff for target, lasts 2 turns.", usage: "Cooldown: 15 sec, Rage: -35" }
            ]
        },
        {
            id: "healing_enpowerment",
            name: "Healing Enpowerment",
            maxLevel: 2,
            image: "mage skills/Healing_Enpowerment.png",
            row: 3,
            col: 4,
            levels: [
                { charLevel: 20, reqSkills: { restoration: 1 }, desc: "Healing ability boost of 4%, Magic defense boost of 10%.", usage: "Passive" },
                { charLevel: 28, reqSkills: { restoration: 2 }, desc: "Healing ability boost of 8%, Magic defense boost of 20%.", usage: "Passive" }
            ]
        },
        {
            id: "suntoria",
            name: "Suntoria",
            maxLevel: 3,
            image: "mage skills/Suntoria.png",
            row: 3,
            col: 5,
            levels: [
                { charLevel: 30, reqSkills: { healing_enpowerment: 1 }, desc: "Adds a regen buff to all teammates that restores 4% of max HP with every action, lasts 5 turns.", usage: "Cooldown: 45 sec, Rage: -30" },
                { charLevel: 30, reqSkills: { healing_enpowerment: 2 }, desc: "Adds a regen buff to all teammates that restores 5% of max HP with every action, lasts 5 turns. QTE: Duration +2", usage: "Cooldown: 45 sec, Rage: -30" },
                { charLevel: 30, reqSkills: { healing_enpowerment: 2 }, desc: "Adds a regen buff to all teammates that restores 6% of max HP with every action, lasts 5 turns. QTE: Duration +2", usage: "Cooldown: 45 sec, Rage: -30" }
            ]
        },
        {
            id: "blessed_light",
            name: "Blessed Light",
            maxLevel: 2,
            image: "mage skills/Blessed_Light.png",
            row: 3,
            col: 6,
            levels: [
                { charLevel: 34, reqSkills: { suntoria: 1, purification: 1 }, desc: "Restores HP equivalent to 90% + 100 magic damage for all teammates and adds 10 rage.", usage: "Cooldown: 60 sec, Rage: -60" },
                { charLevel: 46, reqSkills: { suntoria: 3, purification: 3 }, desc: "Restores HP equivalent to 110% + 400 magic damage for all teammates and adds 10 rage. QTE: HP restoration +25%", usage: "Cooldown: 60 sec, Rage: -60" }
            ]
        },

        // Column 4: Castinator Line
        {
            id: "castinator",
            name: "Castinator",
            maxLevel: 2,
            image: "mage skills/Castinator.png",
            row: 4,
            col: 2,
            levels: [
                { charLevel: 18, reqSkills: {}, desc: "6% chance to reduce rage consumption of next attack by 20 points.", usage: "Passive" },
                { charLevel: 30, reqSkills: {}, desc: "8% chance to reduce rage consumption of next attack by 20 points.", usage: "Passive" }
            ]
        },
        {
            id: "meteoric_destroyer",
            name: "Meteoric Destroyer",
            maxLevel: 4,
            image: "mage skills/Meteoric_Destroyer.png",
            row: 4,
            col: 4,
            levels: [
                { charLevel: 24, reqSkills: { castinator: 1 }, desc: "Deals 98% magic damage to all enemies; 20% chance to deal an extra 200 damage.", usage: "Cooldown: 15 sec, Rage: -30" },
                { charLevel: 34, reqSkills: { castinator: 1 }, desc: "Deals 106% magic damage to all enemies; 25% chance to deal an extra 250 damage. QTE: Damage boost of 25%", usage: "Cooldown: 15 sec, Rage: -30" },
                { charLevel: 46, reqSkills: { castinator: 2 }, desc: "Deals 136% magic damage to all enemies; 30% chance to deal an extra 300 damage. QTE: Damage boost of 25%", usage: "Cooldown: 15 sec, Rage: -30" },
                { charLevel: 56, reqSkills: { castinator: 2 }, desc: "Deals 142% magic damage to all enemies; 35% chance to deal an extra 800 damage. QTE: Damage boost of 25%", usage: "Cooldown: 15 sec, Rage: -30" }
            ]
        },
        {
            id: "purification",
            name: "Purification",
            maxLevel: 3,
            image: "mage skills/Purification.png",
            row: 4,
            col: 5,
            levels: [
                { charLevel: 22, reqSkills: { meteoric_destroyer: 1 }, desc: "Discharges 1 negative buff from all teammates.", usage: "Cooldown: 30 sec, Rage: -20" },
                { charLevel: 40, reqSkills: { meteoric_destroyer: 2 }, desc: "Discharges 2 negative buffs from all teammates. QTE: Rage consumption reduction by 5 points", usage: "Cooldown: 30 sec, Rage: -20" },
                { charLevel: 50, reqSkills: { meteoric_destroyer: 3 }, desc: "Discharges 3 negative buffs from all teammates. QTE: Rage consumption reduction by 5 points", usage: "Cooldown: 30 sec, Rage: -20" }
            ]
        }
    ]
};