// base_materials.js

ServerEvents.recipes(event => {
    // 草药晾干
    addCustomDryingRackRecipe(event, {
        ingredient: "hexerei:mugwort_leaves",
        outputItem: "hexerei:dried_mugwort_leaves",
        dryingTimeInTicks: 2000
    });
    addCustomDryingRackRecipe(event, {
        ingredient: "hexerei:mugwort_flowers",
        outputItem: "hexerei:dried_mugwort_flowers",
        dryingTimeInTicks: 2000
    });
    addCustomDryingRackRecipe(event, {
        ingredient: "hexerei:mandrake_flowers",
        outputItem: "hexerei:dried_mandrake_flowers",
        dryingTimeInTicks: 2000
    });
    addCustomDryingRackRecipe(event, {
        ingredient: "hexerei:belladonna_flowers",
        outputItem: "hexerei:dried_belladonna_flowers",
        dryingTimeInTicks: 2000
    });
    addCustomDryingRackRecipe(event, {
        ingredient: "hexerei:yellow_dock_leaves",
        outputItem: "hexerei:dried_yellow_dock_leaves",
        dryingTimeInTicks: 2000
    });
    addCustomDryingRackRecipe(event, {
        ingredient: "hexerei:yellow_dock_flowers",
        outputItem: "hexerei:dried_yellow_dock_flowers",
        dryingTimeInTicks: 2000
    });
    addCustomDryingRackRecipe(event, {
        ingredient: 'hexerei:sage',
        outputItem: 'hexerei:dried_sage',
        dryingTimeInTicks: 2000
    });

    // 金属加工
    addCustomPressingRecipe(event, {
        ingredient: "#forge:ingots/iron",
        outputItem: "create:iron_sheet"
    });
    addCustomPressingRecipe(event, {
        ingredient: "#forge:ingots/gold",
        outputItem: "create:golden_sheet"
    });

    addCustomRollingRecipe(event, {
        input: "minecraft:iron_ingot",
        outputItem: 'createaddition:iron_wire',
        outputCount: 2
    });
    addCustomRollingRecipe(event, {
        input: "minecraft:copper_ingot",
        outputItem: 'createaddition:copper_wire',
        outputCount: 2
    });
    addCustomRollingRecipe(event, {
        input: "minecraft:gold_ingot",
        outputItem: 'createaddition:gold_wire',
        outputCount: 2
    });
    //绳子
    event.shaped('farmersdelight:rope', [
        ['minecraft:string'],
        ['minecraft:string']
    ]);
    //裂纹头骨
    // 方法1：无序合成
    event.shapeless('3x minecraft:bone_meal', ['born_in_chaos_v1:shattered_skull']);

    // 方法2：熔炉冶炼
    event.smelting('9x minecraft:bone_meal', 'born_in_chaos_v1:shattered_skull')
        .xp(0.1)
        .cookingTime(200);

    // 铜币转铜粒
    event.shapeless('create:copper_nugget', [
        'lightmanscurrency:coin_copper',
        'lightmanscurrency:coin_copper'
    ]);

    // 铁币转铁粒
    event.shapeless('minecraft:iron_nugget', [
        'lightmanscurrency:coin_iron',
        'lightmanscurrency:coin_iron'
    ]);

    // 金币转金粒
    event.shapeless('minecraft:gold_nugget', [
        'lightmanscurrency:coin_gold',
        'lightmanscurrency:coin_gold'
    ]);

    event.shapeless('minecraft:blaze_rod', [
        'minecraft:blaze_powder',
        'minecraft:blaze_powder'
    ]);
});
