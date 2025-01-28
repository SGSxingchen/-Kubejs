// tier1_magic_items.js

ServerEvents.recipes(event => {
    // 魔法布料
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:white_wool",
            "minecraft:string",
            "irons_spellbooks:arcane_essence"
        ],
        outputItem: "irons_spellbooks:magic_cloth",
        outputCount: 2,
        fluidLevelsConsumed: 100
    });

    // 消防斧
    event.shaped(Item.of('marbledsarsenal:fire_axe', '{Damage:0}').enchant('minecraft:efficiency', 3).enchant('minecraft:unbreaking', 2), [
        ['minecraft:iron_ingot', 'minecraft:iron_ingot', ''],
        ['minecraft:iron_ingot', 'minecraft:stick', ''],
        ['', 'minecraft:stick', 'minecraft:red_dye']
    ]);
  event.shaped('createaddition:barbed_wire',[
    ['','',''],
    ['createaddition:iron_wire','createaddition:iron_wire','createaddition:iron_wire'],
    ['createaddition:iron_wire','createaddition:iron_wire','createaddition:iron_wire']
  ]);
event.shaped('createaddition:rolling_mill',[
  ['create:iron_sheet','create:shaft','create:iron_sheet'],
  ['create:andesite_alloy','create:shaft','create:andesite_alloy'],
  ['create:andesite_alloy','create:andesite_casing','create:andesite_alloy']
]);
    // 冥想混合物
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "hexerei:dried_mugwort_leaves",
            "hexerei:dried_yellow_dock_leaves",
            "hexerei:mandrake_root"
        ],
        outputItem: "hexerei:mindful_trance_blend",
        outputCount: 2,
        fluidLevelsConsumed: 100
    });
});
