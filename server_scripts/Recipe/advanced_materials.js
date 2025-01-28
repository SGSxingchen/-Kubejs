ServerEvents.recipes(event => {
    // 下界合金碎片（如果需要自定义配方）
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:netherrack",
            "minecraft:gold_ingot",
            "minecraft:blaze_powder",
            'born_in_chaos_v1:fire_dust',
            "hexerei:dried_belladonna_flowers"
        ],
        outputItem: "minecraft:netherite_scrap",
        outputCount: 1,
        fluidLevelsConsumed: 500
    });

    // 下界合金锭（如果需要自定义配方）
    addCustomCompactingRecipe(event, {
        ingredients: [
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            "minecraft:gold_ingot",
            'born_in_chaos_v1:fire_dust',
            'born_in_chaos_v1:fire_dust'
        ],
        outputItem: "minecraft:netherite_ingot",
        outputCount: 1
    });

    // 钢锭合成
    addCustomCompactingRecipe(event, {
        ingredients: [
            "minecraft:netherite_scrap",
            "minecraft:netherite_scrap",
            "minecraft:iron_ingot",
            "minecraft:gold_ingot",
            'born_in_chaos_v1:fire_dust',
            'born_in_chaos_v1:fire_dust'
        ],
        outputItem: "marbledsapi:steel_ingot",
        outputCount: 1
    });

    // 淬火钢合成
    event.smithing(
        'marbledsapi:hardened_steel_ingot',
        'marbledsapi:steel_ingot',
        'irons_spellbooks:cinder_essence',
        'minecraft:netherite_scrap',
    );

    // 水晶球合成
    event.shaped('hexerei:crystal_ball', [
            ' G ',
            'GAG',
            'DGD'
        ], {
        G: 'minecraft:glass',
        A: 'hexerei:selenite_shard',
        D: 'minecraft:diamond'
    });
  //金苹果
    event.shaped('minecraft:golden_apple', [
            'GGG',
            'GAG',
            'GGG'
        ], {
        G: 'minecraft:gold_nugget',
        A: 'minecraft:apple'
    });

      event.shaped('createaddition:iron_wire', [
            'GGG',
            'G G',
            'GGG'
        ], {
        G: 'minecraft:iron_nugget'
    });
    // 烛台合成
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:chain",
            "#hexerei:candles",
            "#hexerei:candles",
            "minecraft:iron_ingot",
            "minecraft:iron_ingot",
            "minecraft:iron_ingot",
            "#hexerei:candles",
            "#hexerei:candles"
        ],
        outputItem: "hexerei:candelabra",
        outputCount: 1,
        fluidLevelsConsumed: 100
    });
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "hexerei:wax_blend",
            "minecraft:string",
            "hexerei:dried_sage"
        ],
        outputItem: "hexerei:candle",
        outputCount: 4,
        fluidLevelsConsumed: 250,
        liquid: "hexerei:blood_fluid"
    });
});