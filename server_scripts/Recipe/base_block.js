// base_block.js
ServerEvents.recipes(event => {
    // 地狱岩合成
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:cobblestone",
            "minecraft:redstone",
            "minecraft:bone_meal",
            "minecraft:blaze_powder",
            'born_in_chaos_v1:fire_dust'
        ],
        outputItem: "minecraft:netherrack",
        outputCount: 1,
        fluidLevelsConsumed: 1000,
        liquid: "minecraft:lava"
    });
    // 水转岩浆
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
            "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": 'born_in_chaos_v1:fire_dust'
          },
          {
            "item": 'born_in_chaos_v1:fire_dust'
          },
          {
            "item": 'born_in_chaos_v1:fire_dust'
          },
          {
            "item": 'born_in_chaos_v1:fire_dust'
          },
          {
            "item": 'born_in_chaos_v1:fire_dust'
          },
          {
            "item": 'born_in_chaos_v1:fire_dust'
          },
          {
            "item": 'born_in_chaos_v1:fire_dust'
          },
          {
            "item": 'born_in_chaos_v1:fire_dust'
          }
        ],
        "output": {
            "item": "minecraft:stone",
            "count": 1
          },
          "liquidOutput": {
              "fluid": "minecraft:lava"
          },
          "fluidLevelsConsumed": 0
    });
    //圆石合成
    event.custom({
        "type": "hexerei:mixingcauldron",
        "liquid": {
          "fluid": "minecraft:water"
        },
        "ingredients": [
          {
            "item": 'hexerei:lava_bottle'
          },
          {
            "item": 'hexerei:lava_bottle'
          },
          {
            "item": 'hexerei:lava_bottle'
          },
          {
            "item": 'hexerei:lava_bottle'
          }
        ],
        "output": {
          "item": "minecraft:cobblestone",
          "count": 8
        },
        "liquidOutput": {
            "fluid": "minecraft:water"
        },
        "fluidLevelsConsumed": 1000
    })
    // Hexerei 混合合成
    event.shaped('hexerei:mixing_cauldron', 
        ['IAI', 
        'IBI', 
        'III'], {
        I: 'minecraft:iron_ingot',
        B: 'minecraft:blaze_powder',
        A: 'minecraft:amethyst_shard'
    });
});

