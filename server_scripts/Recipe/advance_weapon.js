ServerEvents.recipes(event => {
  event.custom({
      type: "hexerei:mixingcauldron",
      liquid: {
        fluid: 'minecraft:water'
      },
      ingredients: [
          {"item":"minecraft:stick"},
          {"item":"irons_spellbooks:magic_cloth"},
          {"item":"hexerei:dried_sage"},
          {"item":"minecraft:blaze_rod"},
          {"item":"irons_spellbooks:weapon_parts"}
      ],
      output: 
      Item.of('irons_spellbooks:graybeard_staff', '{AttributeModifiers:[{Amount:0.15d,AttributeName:"irons_spellbooks:cast_time_reduction",Operation:2,Slot:"offhand",UUID:[I;2038222922,1967998964,-1272564188,-1718662803]},{Amount:0.15d,AttributeName:"irons_spellbooks:cooldown_reduction",Operation:2,Slot:"offhand",UUID:[I;735004131,173951349,-1333988937,-1706873593]},{Amount:0.15d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"offhand",UUID:[I;-475589847,-517059879,-1988626773,-1337290707]},{Amount:5.0d,AttributeName:"minecraft:generic.attack_damage",Operation:0,Slot:"mainhand",UUID:[I;950786150,1396789095,-1986211015,-1729871061]},{Amount:-1.0d,AttributeName:"minecraft:generic.attack_speed",Operation:0,Slot:"mainhand",UUID:[I;311398857,1241206434,-2111819162,-1936649306]}]}').enchant('minecraft:smite', 2).enchant('minecraft:sharpness', 3).toJson(),
      liquidOutput: {
        fluid: 'minecraft:water'
      },
      fluidLevelsConsumed: 300
    });
  // 工匠手杖
  event.smithing(
      Item.of('irons_spellbooks:artificer_cane', '{AttributeModifiers:[{Amount:0.3d,AttributeName:"irons_spellbooks:cast_time_reduction",Operation:2,Slot:"offhand",UUID:[I;1482806535,-544456069,-1543279133,1881379717]},{Amount:0.3d,AttributeName:"irons_spellbooks:cooldown_reduction",Operation:2,Slot:"offhand",UUID:[I;1747104192,-1112194992,-1546653364,-1510359685]},{Amount:0.3d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"offhand",UUID:[I;-1354443729,1297761681,-1946471791,-85100446]},{Amount:7.0d,AttributeName:"minecraft:generic.attack_damage",Operation:0,Slot:"mainhand",UUID:[I;-943366230,-38319233,-1687312204,-1612974879]},{Amount:-1.0d,AttributeName:"minecraft:generic.attack_speed",Operation:0,Slot:"mainhand",UUID:[I;90634231,-475249116,-1469093757,1449604415]}]}').enchant('minecraft:smite', 5).enchant('minecraft:sharpness', 3),
      'irons_spellbooks:graybeard_staff',
      'irons_spellbooks:arcane_ingot',
      'hexerei:crystal_ball'
  );
  // 紫水晶细剑
  event.smithing(
      Item.of('irons_spellbooks:amethyst_rapier', '{Damage:0,ISB_Spells:{data:[{id:"irons_spellbooks:echoing_strikes",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:1b}}').enchant('minecraft:smite', 5).enchant('minecraft:sharpness', 3),
      'minecraft:diamond_sword',
      'minecraft:amethyst_shard',
      'minecraft:nether_star'
  );
  // 守护者火焰剑
  event.smithing(
      Item.of('irons_spellbooks:keeper_flamberge', '{Damage:0}').enchant('minecraft:smite', 5).enchant('minecraft:sharpness', 3),
      'minecraft:netherite_sword',
      'irons_spellbooks:arcane_salvage',
      'irons_spellbooks:fire_rune'
  );

  // 法师猎人
  event.smithing(
      Item.of('irons_spellbooks:magehunter', '{Damage:0}').enchant('minecraft:smite', 5).enchant('minecraft:sharpness', 3),
      'minecraft:netherite_sword',
      'irons_spellbooks:arcane_salvage',
      'irons_spellbooks:ender_rune'
  );

  // 破法者
  event.smithing(
      Item.of('irons_spellbooks:spellbreaker', '{Damage:0,ISB_Spells:{data:[{id:"irons_spellbooks:counterspell",index:0,level:1,locked:1b}],maxSpells:1,mustEquip:0b,spellWheel:1b}}').enchant('minecraft:smite', 5).enchant('minecraft:sharpness', 3),
      'irons_spellbooks:amethyst_rapier',
      'irons_spellbooks:arcane_salvage',
      'irons_spellbooks:arcane_rune'
  );

  // 血之法杖
  event.custom({
      type: "hexerei:mixingcauldron",
      liquid: {
        fluid: 'hexerei:blood_fluid'
      },
      ingredients: [
          {"item":'irons_spellbooks:blood_rune'},
          {"item":'born_in_chaos_v1:bone_heart'},
          {"item":'hexerei:blood_bottle'},
          {"item":'irons_spellbooks:artificer_cane'},
          {"item":'irons_spellbooks:blood_rune'},
          {"item":'irons_spellbooks:arcane_salvage'}
      ],
      output: 
      Item.of('irons_spellbooks:blood_staff', '{AttributeModifiers:[{Amount:0.5d,AttributeName:"irons_spellbooks:blood_spell_power",Operation:2,Slot:"offhand",UUID:[I;-2101238574,-533379262,-1199550700,1274015160]},{Amount:0.3d,AttributeName:"irons_spellbooks:cast_time_reduction",Operation:2,Slot:"offhand",UUID:[I;-1432976696,-1509342195,-1633415073,-663364984]},{Amount:0.3d,AttributeName:"irons_spellbooks:cooldown_reduction",Operation:2,Slot:"offhand",UUID:[I;-776714565,2027503951,-2047845822,1134599757]},{Amount:1.0d,AttributeName:"irons_spellbooks:mana_regen",Operation:0,Slot:"offhand",UUID:[I;-963242317,-1402978033,-1578335765,-1550110598]},{Amount:8.0d,AttributeName:"minecraft:generic.attack_damage",Operation:0,Slot:"mainhand",UUID:[I;1511641082,1437091056,-1719217419,-1767106368]},{Amount:-1.0d,AttributeName:"minecraft:generic.attack_speed",Operation:0,Slot:"mainhand",UUID:[I;385629944,-509589721,-1329268284,-1727938582]}]}').enchant('minecraft:smite', 5).enchant('minecraft:sharpness', 3).toJson(),
      liquidOutput: {
        fluid: 'hexerei:blood_fluid'
      },
      fluidLevelsConsumed: 1000
    });
  // 下界合金剑
  event.smithing(
      Item.of('minecraft:netherite_sword', '{Damage:0}').enchant('minecraft:sharpness', 2),
      `minecraft:diamond_sword`,
      'irons_spellbooks:weapon_parts',
      'minecraft:netherite_ingot'
  );
});