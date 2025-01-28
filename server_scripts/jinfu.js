PlayerEvents.loggedIn(event => {
  const player = event.player;

  if (!player.stages.has('firstjoin')) {
    player.stages.add('firstjoin')
    player.give(Item.of('minecraft:chainmail_helmet', '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2))
    player.give(Item.of('minecraft:chainmail_chestplate', '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2))
    player.give(Item.of('minecraft:chainmail_leggings', '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2))
    player.give(Item.of('minecraft:chainmail_boots', '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2))
    player.give(Item.of('lightmanscurrency:wallet_gold', '{AutoConvert:1b}'))
    player.give(Item.of('minecraft:iron_pickaxe', '{Damage:0}'))
    player.give(Item.of('minecraft:iron_axe', '{Damage:0}'))
    player.give('8x minecraft:bread')
    player.give('3x minecraft:golden_apple')
  }
});