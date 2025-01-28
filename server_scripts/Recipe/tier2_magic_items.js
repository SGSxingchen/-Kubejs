// tier2_magic_items.js

ServerEvents.recipes(event => {
    // 奥术锭
    addCustomCompactingRecipe(event, {
        ingredients: [
            "minecraft:iron_ingot",
            "minecraft:gold_ingot",
            "irons_spellbooks:arcane_essence",
            "minecraft:amethyst_shard"
        ],
        outputItem: "irons_spellbooks:arcane_ingot",
        outputCount: 1
    });

    // 冷却戒指
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_ingot",
            "minecraft:gold_ingot",
            "hexerei:dried_belladonna_flowers",
            "minecraft:lapis_lazuli"
        ],
        outputItem: "irons_spellbooks:cooldown_ring",
        outputCount: 1,
        fluidLevelsConsumed: 200
    });

    // 施法时间戒指
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_ingot",
            "minecraft:gold_ingot",
            "hexerei:dried_mugwort_flowers",
            "born_in_chaos_v1:fire_dust"
        ],
        outputItem: "irons_spellbooks:cast_time_ring",
        outputCount: 1,
        fluidLevelsConsumed: 200
    });

    // 法力戒指
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_ingot",
            "minecraft:gold_ingot",
            "hexerei:dried_mandrake_flowers",
            "minecraft:diamond"
        ],
        outputItem: "irons_spellbooks:mana_ring",
        outputCount: 1,
        fluidLevelsConsumed: 200
    });

    // 重型链条项链
    event.shaped('irons_spellbooks:heavy_chain_necklace', [
        ['createaddition:iron_wire', 'createaddition:iron_wire', 'createaddition:iron_wire'],
        ['createaddition:iron_wire', '', 'createaddition:iron_wire'],
        ['createaddition:iron_wire', 'irons_spellbooks:arcane_ingot', 'createaddition:iron_wire']
    ]);

    // 火焰守护戒指
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_ingot",
            "minecraft:gold_ingot",
            "hexerei:dried_yellow_dock_flowers",
            "minecraft:blaze_powder"
        ],
        outputItem: "irons_spellbooks:fireward_ring",
        outputCount: 1,
        fluidLevelsConsumed: 200
    });

    // 冰霜守护戒指
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_ingot",
            "minecraft:gold_ingot",
            "hexerei:dried_mugwort_leaves",
            "minecraft:packed_ice"
        ],
        outputItem: "irons_spellbooks:frostward_ring",
        outputCount: 1,
        fluidLevelsConsumed: 200
    });

    // 毒素守护戒指
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_ingot",
            "minecraft:gold_ingot",
            "hexerei:dried_belladonna_flowers",
            "minecraft:fermented_spider_eye"
        ],
        outputItem: "irons_spellbooks:poisonward_ring",
        outputCount: 1,
        fluidLevelsConsumed: 200
    });

    // 召唤者护符
    event.shaped('irons_spellbooks:conjurers_talisman', [
        ['', 'createaddition:gold_wire', ''],
        ['createaddition:gold_wire', 'irons_spellbooks:arcane_ingot', 'createaddition:gold_wire'],
        ['', 'born_in_chaos_v1:orbofthe_summoner', '']
    ]);

    // 专注护符
    event.shaped('irons_spellbooks:concentration_amulet', [
        ['', 'createaddition:copper_wire', ''],
        ['createaddition:copper_wire', 'irons_spellbooks:arcane_ingot', 'createaddition:copper_wire'],
        ['', 'hexerei:mindful_trance_blend', '']
    ]);

    // 武器部件
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:iron_ingot",
            "minecraft:iron_nugget",
            "minecraft:stick",
            "hexerei:dried_sage"
        ],
        outputItem: "irons_spellbooks:weapon_parts",
        outputCount: 2,
        fluidLevelsConsumed: 100
    });

    // 大砍刀
    event.shaped(Item.of('marbledsarsenal:machete', "{Damage:0,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"bold\":true,\"color\":\"dark_gray\",\"text\":\"劈劈劈！\"}],\"text\":\"\"}'],Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"bold\":true,\"color\":\"dark_red\",\"text\":\"大批刀\"}],\"text\":\"\"}'}}").enchant('minecraft:smite', 3), [
        ['', 'marbledsapi:steel_ingot', ''],
        ['', 'marbledsapi:steel_ingot', ''],
        ['', 'minecraft:stick', '']
    ]);
    event.shaped(Item.of('marbledsarsenal:tanto', "{Damage:0,display:{Lore:['{\"italic\":false,\"color\":\"white\",\"extra\":[{\"text\":\"\"},{\"color\":\"dark_gray\",\"text\":\"给你两刀就老实了\"}],\"text\":\"\"}'],Name:'{\"italic\":false,\"extra\":[{\"text\":\"\"},{\"bold\":true,\"color\":\"dark_purple\",\"text\":\"精良短剑\"}],\"text\":\"\"}'}}").enchant('minecraft:smite', 5).enchant('minecraft:sharpness', 7), [
        ['', 'marbledsapi:hardened_steel_ingot', ''],
        ['', 'marbledsapi:hardened_steel_ingot', ''],
        ['', 'minecraft:stick', '']
    ]);
    // 血印
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:iron_nugget",
            "minecraft:rotten_flesh",
            "hexerei:blood_bottle",
            "hexerei:dried_belladonna_flowers"
        ],
        outputItem: "hexerei:blood_sigil",
        outputCount: 1,
        fluidLevelsConsumed: 200
    });

    // 蜡混合物
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "hexerei:tallow_bottle",
            "minecraft:honeycomb",
            "hexerei:dried_sage",
            "minecraft:bone_meal"
        ],
        outputItem: "hexerei:wax_blend",
        outputCount: 2,
        fluidLevelsConsumed: 100
    });

    // 注魔布料
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:magic_cloth",
            "irons_spellbooks:arcane_essence",
            "hexerei:tallow_bottle",
            "minecraft:glowstone_dust"
        ],
        outputItem: "hexerei:infused_fabric",
        outputCount: 1,
        fluidLevelsConsumed: 200
    });

    // 小型月长石芽
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "hexerei:selenite_shard",
            "minecraft:bone_meal",
            "minecraft:amethyst_shard",
            "hexerei:dried_mugwort_leaves"
        ],
        outputItem: "hexerei:small_selenite_bud",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 绷带
    event.shaped('zombie_extreme:bandage', [
        ['minecraft:string', 'minecraft:string', 'minecraft:string'],
        ['minecraft:string', 'minecraft:string', 'minecraft:string']
    ]);
});
