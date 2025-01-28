// 定义实体配置
let entityConfigs = {
  // 普通僵尸
  'minecraft:zombie': { common: true, runes: true },
  // 尸壳
  'minecraft:husk': { common: true, runes: true },
  // 腐烂僵尸
  'born_in_chaos_v1:decaying_zombie': { common: true, runes: true },
  // 炎芒虫
  'born_in_chaos_v1:firelight': {
    extra: [
      ['minecraft:blaze_powder', 40, 2],
      ['minecraft:blaze_powder', 20, 2],
      ['minecraft:nether_wart', 20, 3],
      ['minecraft:nether_wart', 30, 2]
    ]
  },
  // 感染者
  'zombie_extreme:infected': {
    special: true, runes: true, extra: [
      ['lightmanscurrency:coin_iron', 40, 6],
      ['lightmanscurrency:coin_gold', 20, 1],
      ['irons_spellbooks:arcane_essence', 10, 2],
      ['minecraft:amethyst_shard', 10, 2],
    ],
  },
  // 奔跑者
  'zombie_extreme:runner': {
    special: true, runes: true, extra: [
      ['lightmanscurrency:coin_iron', 40, 6],
      ['lightmanscurrency:coin_gold', 20, 1],
      ['irons_spellbooks:arcane_essence', 10, 2],
      ['minecraft:amethyst_shard', 10, 2],
    ]
  },
  // 感染的警察
  'zombie_extreme:infected_police': {
    special: true,
    runes: true,
    extra: [
      ['lightmanscurrency:coin_iron', 40, 6],
      ['lightmanscurrency:coin_gold', 20, 1],
      ['irons_spellbooks:arcane_essence', 10, 2],
      ['minecraft:amethyst_shard', 10, 2],
      ['tacz:modern_kinetic_gun', 1, 1, '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:0b}'],
      ['tacz:ammo', 5, 3, '{AmmoId:"tacz:9mm"}']
    ],
    remove: ['zombie_extreme:police_suit_helmet', 'zombie_extreme:police_suit_chestplate']
  },
  // 小丑僵尸
  'born_in_chaos_v1:zombie_clown': {
    special: true,
    runes: true,
    extra: [
      ['lightmanscurrency:coin_iron', 40, 6],
      ['lightmanscurrency:coin_gold', 20, 1],
      ['irons_spellbooks:arcane_essence', 10, 2],
      ['minecraft:amethyst_shard', 10, 2],
    ],
    remove: ['born_in_chaos_v1:intoxicating_dagger', 'born_in_chaos_v1:intoxicating_decoction']
  },
  // 桶装僵尸
  'born_in_chaos_v1:barrel_zombie': {
    special: true,
    runes: true,
    extra: [
      ['lightmanscurrency:coin_iron', 40, 6],
      ['lightmanscurrency:coin_gold', 20, 1],
      ['irons_spellbooks:arcane_essence', 10, 2],
      ['minecraft:amethyst_shard', 10, 2],
    ],
    remove: ['born_in_chaos_v1:spiny_shell', 'minecraft:lapis_lazuli', 'minecraft:sea_pickle']
  },
  // 脓疮僵尸
  'born_in_chaos_v1:swarmer': {
    special: true,
    runes: true,
    extra: [
      ['lightmanscurrency:coin_iron', 40, 6],
      ['lightmanscurrency:coin_gold', 20, 1],
      ['irons_spellbooks:arcane_essence', 10, 2],
      ['minecraft:amethyst_shard', 10, 2],
    ]
  },
  // 健壮僵尸
  'born_in_chaos_v1:zombie_bruiser': {
    special: true,
    runes: true,
    extra: [
      ['lightmanscurrency:coin_iron', 40, 12],
      ['lightmanscurrency:coin_gold', 20, 5],
      ['irons_spellbooks:arcane_essence', 10, 4],
      ['minecraft:amethyst_shard', 10, 2],
      ['minecraft:diamond', 10, 2],
      ['minecraft:netherite_scrap', 10],
      ['born_in_chaos_v1:bone_heart', 10]
    ],
    remove: ['born_in_chaos_v1:pieceofdarkmetal']
  },
  //零号病人
  'zombie_extreme:zero_patient': {
    epic: true,
    runes: true,
    extra: [
      ['minecraft:netherite_scrap', 40, 5],
      ['minecraft:gold_ingot', 40, 12],
      ['irons_spellbooks:cinder_essence', 20, 2],
      ['irons_spellbooks:arcane_ingot', 30, 4],
      ['irons_spellbooks:upgrade_orb', 10, 1],
      ['irons_spellbooks:arcane_salvage', 10, 1]
    ]
  },
  //鼠王
  'zombie_extreme:rat_king': {
    epic: true,
    runes: true,
    extra: [
      ['minecraft:netherite_scrap', 40, 5],
      ['minecraft:gold_ingot', 40, 12],
      ['irons_spellbooks:cinder_essence', 20, 2],
      ['irons_spellbooks:arcane_ingot', 30, 4],
      ['irons_spellbooks:upgrade_orb', 10, 1],
      ['irons_spellbooks:arcane_salvage', 10, 1]
    ]
  },
  //分裂者
  'zombie_extreme:divided': {
    epic: true,
    runes: true,
    extra: [
      ['minecraft:netherite_scrap', 50, 2],
      ['minecraft:gold_ingot', 50, 6],
      ['irons_spellbooks:cinder_essence', 20, 1],
      ['irons_spellbooks:arcane_ingot', 30, 2]
    ]
  },
  //咔哒者
  'zombie_extreme:clicker': {
    epic: true,
    runes: true,
    extra: [
      ['minecraft:netherite_scrap', 50, 2],
      ['minecraft:gold_ingot', 50, 6],
      ['irons_spellbooks:cinder_essence', 20, 1],
      ['irons_spellbooks:arcane_ingot', 30, 2]
    ]
  },
    //复活者
  'zombie_extreme:revived': {
    epic: true,
    runes: true,
    extra: [
      ['minecraft:netherite_scrap', 50, 2],
      ['minecraft:gold_ingot', 50, 6],
      ['irons_spellbooks:cinder_essence', 20, 1],
      ['irons_spellbooks:arcane_ingot', 30, 2]
    ]
  },
};
// 定义物品类型
const ItemTypes = {
  COMMON: 'common',
  SPECIAL: 'special',
  RUNE: 'rune',
  EPIC: 'epic'
};
// 定义物品池
const itemPools = {
  common: [
    ['2x lightmanscurrency:coin_iron', 30],
    ['lightmanscurrency:coin_gold', 20],
    ['minecraft:string', 30],
    ['minecraft:bone', 30],
    ['minecraft:iron_nugget', 40],
    ['minecraft:gold_nugget', 20],
    ['minecraft:apple', 10],
    ['hexerei:blood_bottle', 10],
    ['minecraft:honeycomb', 10],
    ['hexerei:tallow_bottle', 10],
    ['minecraft:glowstone_dust', 10],
    ['minecraft:lapis_lazuli', 5],
    ['irons_spellbooks:arcane_essence', 5],
    ['minecraft:amethyst_shard', 5],
    ['minecraft:ender_pearl', 5],
    ['hexerei:selenite_shard', 5],
    ['hexerei:selenite_shard', 5],
    ['minecraft:diamond', 2],
    ['minecraft:netherite_scrap', 5]
  ],
  special: [
    ['lightmanscurrency:coin_gold', 10],
    ['minecraft:lapis_lazuli', 10],
    ['irons_spellbooks:arcane_essence', 15],
    ['born_in_chaos_v1:fire_dust', 15],
    ['born_in_chaos_v1:fire_dust', 15],
    ['minecraft:amethyst_shard', 10],
    ['minecraft:ender_pearl', 10],
    ['hexerei:selenite_shard', 7],
    ['hexerei:selenite_shard', 7],
    ['minecraft:diamond', 10],
    ['minecraft:netherite_scrap', 10],
    ['minecraft:netherite_scrap', 10]
  ],
  epic: [
    ['minecraft:gold_ingot', 20],
    ['irons_spellbooks:ancient_knowledge_fragment', 15],
    ['minecraft:gold_ingot', 15],
    ['born_in_chaos_v1:fire_dust', 15],
    ['minecraft:amethyst_shard', 20],
    ['minecraft:ender_pearl', 20],
    ['hexerei:selenite_shard', 17],
    ['hexerei:selenite_shard', 17],
    ['minecraft:diamond', 18],
    ['minecraft:netherite_scrap', 15],
    ['minecraft:netherite_scrap', 15],
    ['born_in_chaos_v1:bone_heart', 15],
    ['irons_spellbooks:ruined_book', 15]
  ],
  rune: [
    ['lightmanscurrency:coin_iron', 100],
    ['irons_spellbooks:ruined_book', 5],
    ['irons_spellbooks:fire_rune', 0.02],
    ['irons_spellbooks:ice_rune', 0.02],
    ['irons_spellbooks:lightning_rune', 0.02],
    ['irons_spellbooks:ender_rune', 0.02],
    ['irons_spellbooks:holy_rune', 0.02],
    ['irons_spellbooks:blood_rune', 0.02],
    ['irons_spellbooks:evocation_rune', 0.02],
    ['irons_spellbooks:arcane_rune', 0.02],
    ['irons_spellbooks:cooldown_rune', 0.02],
    ['irons_spellbooks:protection_rune', 0.02],
    ['irons_spellbooks:nature_rune', 0.02]
  ]
};
// 创建物品对象
function createItem(item, chance, count, nbt) {
  count = count || 1;
  nbt = nbt || '';
  return Item.of(item, count, nbt).withChance(chance);
}
LootJS.modifiers((event) => {

  // 添加战利品
  let addLoot = (entityId, config) => {
    let modifier = event.addEntityLootModifier(entityId);

    if (config.common) {
      modifier.addWeightedLoot([2, 6], itemPools.common.map(([item, chance]) => createItem(item, chance)));
    }

    if (config.special) {
      modifier.addWeightedLoot([2, 6], itemPools.special.map(([item, chance]) => createItem(item, chance)));
    }

    if (config.runes) {
      modifier.addWeightedLoot([0, 1], itemPools.rune.map(([item, chance]) => createItem(item, chance)));
    }

    if (config.epic) {
      modifier.addWeightedLoot([5, 12], itemPools.epic.map(([item, chance]) => createItem(item, chance)));
    }

    if (config.extra) {
      modifier.addWeightedLoot([1, 3], config.extra.map(([item, chance, count, nbt]) => createItem(item, chance, count, nbt)));
    }

    if (config.remove) {
      config.remove.forEach(item => modifier.removeLoot(Item.of(item)));
    }

    return modifier;
  };

  // 应用配置
  Object.entries(entityConfigs).forEach(([entityId, config]) => {
    addLoot(entityId, config);
  });
});