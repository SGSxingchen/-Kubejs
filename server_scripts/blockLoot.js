const blockConfigs = {
  // 木质物品  
  'zombie_extreme:wooden_barricades': {
    remove: true
  },
  '#minecraft:wooden_stairs': {
    remove: true,
    extra: [
      ['1x minecraft:oak_planks', 0.5],
      ['2x minecraft:stick', 0.5]
    ]
  },
  '#minecraft:wooden_trapdoors': {
    remove: true,
    extra: [
      ['1x minecraft:oak_planks', 0.4],
      ['1x minecraft:stick', 0.5]
    ]
  },
  '#minecraft:wooden_fences': {
    remove: true,
    extra: [
      ['1x minecraft:oak_planks', 0.2],
      ['1x minecraft:stick', 0.4]
    ]
  },
  '#minecraft:wooden_doors': {
    remove: true,
    extra: [
      ['1x minecraft:oak_planks', 0.5],
      ['1x minecraft:oak_planks', 0.5]
    ]
  },
  '#minecraft:standing_signs': {
    remove: true,
    extra: [
      ['1x minecraft:oak_planks', 0.3],
      ['1x minecraft:stick', 0.4]
    ]
  },
  '#minecraft:beds': {
    remove: true,
    extra: [
      ['2x minecraft:oak_planks', 0.4],
      ['4x minecraft:string', 0.8]
    ]
  },
  // 石质物品  
  'minecraft:sandstone_stairs': {
    remove: true,
    extra: [['minecraft:cobblestone']]
  },
  'minecraft:cobblestone_stairs': {
    remove: true,
    extra: [['minecraft:cobblestone']]
  },
  'minecraft:sandstone_slab': {
    remove: true,
    extra: [['minecraft:cobblestone', 0.5]]
  },
  'minecraft:mossy_cobblestone_stairs': {
    remove: true,
    extra: [['minecraft:cobblestone']]
  },
  'minecraft:mossy_cobblestone_slab': {
    remove: true,
    extra: [['minecraft:cobblestone', 0.5]]
  },
  'minecraft:smooth_sandstone_stairs': {
    remove: true,
    extra: [['minecraft:cobblestone']]
  },
  'minecraft:cut_sandstone_slab': {
    remove: true,
    extra: [['minecraft:cobblestone', 0.5]]
  },
  'minecraft:brick_stairs': {
    remove: true,
    extra: [['minecraft:cobblestone']]
  },
  // 安山岩物品  
  'minecraft:andesite_stairs': {
    remove: true,
    extra: [['minecraft:andesite']]
  },
  'minecraft:andesite_wall': {
    remove: true,
    extra: [['minecraft:andesite']]
  },
  'minecraft:andesite_slab': {
    remove: true,
    extra: [['minecraft:andesite', 0.5]]
  },
  // 杂项  
  'minecraft:target': {
    remove: true,
    extra: [['4x minecraft:wheat']]
  },
  'minecraft:grindstone': {
    remove: true,
    extra: [['minecraft:cobblestone'], ['minecraft:oak_planks']]
  },
  '#minecraft:wool_carpets': {
    remove: true,
    extra: [['minecraft:string']]
  },
  // 铁  
  'minecraft:iron_bars': {
    remove: true,
    extra: [['2x minecraft:iron_nugget']]
  },
  'minecraft:hopper': {
    remove: true,
    extra: [['2x minecraft:iron_ingot']]
  },
  'minecraft:cauldron': {
    remove: true,
    extra: [['2x minecraft:iron_ingot']]
  },
  'minecraft:iron_trapdoor': {
    remove: true,
    extra: [['minecraft:iron_ingot']]
  },
  //板条箱 素材
  'refurbished_furniture:oak_crate': {
    remove: true,
    extra: [
      ['5x minecraft:oak_log', 0.5],
      ['5x minecraft:cobblestone', 0.5],
      ['3x minecraft:leather', 0.5],
      ['5x minecraft:iron_nugget', 0.5],
      ['5x minecraft:iron_nugget', 0.4],
      ['minecraft:iron_ingot', 0.25],
      ['minecraft:iron_ingot', 0.2],
      ['3x minecraft:redstone', 0.2],
      ['2x minecraft:redstone', 0.2],
      ['5x minecraft:gold_nugget', 0.25],
      ['minecraft:gold_ingot', 0.25],
      ['minecraft:diamond', 0.15],
      ['minecraft:diamond', 0.10],
      ['minecraft:netherite_scrap', 0.1],
      ['minecraft:netherite_scrap', 0.05]
    ]
  },
  //板条箱 食材
  'refurbished_furniture:jungle_crate': {
    remove: true,
    extra: [
      ['8x farmersdelight:cabbage', 0.2],
      ['8x farmersdelight:tomato', 0.2],
      ['8x farmersdelight:onion', 0.2],
      ['8x farmersdelight:rice_panicle', 0.2],
      ['8x minecraft:egg'],
      ['8x minecraft:brown_mushroom'],
      ['8x minecraft:red_mushroom'],
      ['8x minecraft:carrot', 0.2],
      ['8x minecraft:potato', 0.2],
      ['8x minecraft:wheat', 0.2],
      ['4x minecraft:melon', 0.2],
      ['4x minecraft:pumpkin', 0.2],
      ['4x minecraft:porkchop', 0.15],
      ['4x minecraft:beef', 0.15],
      ['4x minecraft:mutton', 0.15],
      ['4x minecraft:chicken', 0.15],
      ['4x minecraft:cod', 0.15],
      ['4x minecraft:salmon', 0.15],
      ['minecraft:golden_apple', 0.1]
    ]
  },
  //板条箱 高阶
  'refurbished_furniture:birch_crate': {
    remove: true,
    extra: [
      ['2x minecraft:gold_ingot', 0.5],
      ['2x minecraft:gold_ingot', 0.5],
      ['3x minecraft:amethyst_shard', 0.4],
      ['2x minecraft:amethyst_shard', 0.3],
      ['3x irons_spellbooks:arcane_essence', 0.4],
      ['2x irons_spellbooks:arcane_essence', 0.3],
      ['minecraft:diamond', 0.2],
      ['minecraft:diamond', 0.2],
      ['minecraft:netherite_scrap', 0.15],
      ['minecraft:netherite_scrap', 0.15],
      ['born_in_chaos_v1:fire_dust', 0.2],
      ['born_in_chaos_v1:fire_dust', 0.2],
      ['irons_spellbooks:cinder_essence', 0.1]
    ]
  },
};

LootJS.modifiers((event) => {
  Object.entries(blockConfigs).forEach(([blockId, config]) => {
    if (config.remove) {
      event.addBlockLootModifier(blockId).removeLoot(blockId);
    }
    if (config.extra) {
      config.extra.forEach(([item, chance]) => {
        if (chance) {
          event.addBlockLootModifier(blockId).randomChance(chance).addLoot(item);
        } else {
          event.addBlockLootModifier(blockId).addLoot(item);
        }
      });
    }
  });
});