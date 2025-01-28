// tier3_magic_items.js
ServerEvents.recipes(event => {
    // 奥术残片
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_ingot",
            "irons_spellbooks:ancient_knowledge_fragment",
            "hexerei:blood_bottle",
            "minecraft:nether_star"
        ],
        outputItem: "irons_spellbooks:arcane_salvage",
        outputCount: 1,
        fluidLevelsConsumed: 500
    });

    // 硬化钢板
    addCustomPressingRecipe(event, {
        ingredient: "marbledsapi:hardened_steel_ingot",
        outputItem: "marbledsapi:hardened_steel_sheet"
    });


    // 基础升级宝珠
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "minecraft:ender_pearl",
            "minecraft:diamond",
            'minecraft:nether_star',
            "hexerei:dried_sage"
        ],
        outputItem: "irons_spellbooks:upgrade_orb",
        outputCount: 1,
        fluidLevelsConsumed: 1000
    });


    // 奥术铁砧
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            'minecraft:anvil',
            'irons_spellbooks:arcane_rune',
            'irons_spellbooks:arcane_ingot',
            'irons_spellbooks:arcane_salvage',
            'irons_spellbooks:arcane_ingot',
            'irons_spellbooks:arcane_salvage'
        ],
        outputItem: 'irons_spellbooks:arcane_anvil',
        outputCount: 1,
        fluidLevelsConsumed: 500
    });

    // 远古知识碎片
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:ruined_book",
            "irons_spellbooks:arcane_essence",
            "minecraft:ender_eye",
            "hexerei:dried_mandrake_flowers"
        ],
        outputItem: "irons_spellbooks:ancient_knowledge_fragment",
        outputCount: 1,
        fluidLevelsConsumed: 500
    });

    // 火之升级宝珠
    event.smithing(
        'irons_spellbooks:fire_upgrade_orb',
        'irons_spellbooks:upgrade_orb',
        'irons_spellbooks:fire_rune',
        'irons_spellbooks:arcane_salvage'
    );

    // 冰之升级宝珠
    event.smithing(
        'irons_spellbooks:ice_upgrade_orb',
        'irons_spellbooks:upgrade_orb',
        'irons_spellbooks:ice_rune',
        'irons_spellbooks:arcane_salvage'
    );

    // 雷之升级宝珠
    event.smithing(
        'irons_spellbooks:lightning_upgrade_orb',
        'irons_spellbooks:upgrade_orb',
        'irons_spellbooks:lightning_rune',
        'irons_spellbooks:arcane_salvage'
    );

    // 神圣升级宝珠
    event.smithing(
        'irons_spellbooks:holy_upgrade_orb',
        'irons_spellbooks:upgrade_orb',
        'irons_spellbooks:holy_rune',
        'irons_spellbooks:arcane_salvage'
    );

    // 末影升级宝珠
    event.smithing(
        'irons_spellbooks:ender_upgrade_orb',
        'irons_spellbooks:upgrade_orb',
        'irons_spellbooks:ender_rune',
        'irons_spellbooks:arcane_salvage'
    );

    // 血之升级宝珠
    event.smithing(
        'irons_spellbooks:blood_upgrade_orb',
        'irons_spellbooks:upgrade_orb',
        'irons_spellbooks:blood_rune',
        'irons_spellbooks:arcane_salvage'
    );

    // 唤魔升级宝珠
    event.smithing(
        'irons_spellbooks:evocation_upgrade_orb',
        'irons_spellbooks:upgrade_orb',
        'irons_spellbooks:evocation_rune',
        'irons_spellbooks:arcane_salvage'
    );

    // 自然升级宝珠
    event.smithing(
        'irons_spellbooks:nature_upgrade_orb',
        'irons_spellbooks:upgrade_orb',
        'irons_spellbooks:nature_rune',
        'irons_spellbooks:arcane_salvage'
    );
});
