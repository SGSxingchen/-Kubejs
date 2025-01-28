let breakList =
  [
    'minecraft:red_concrete',
    'minecraft:white_concrete',
    'minecraft:yellow_concrete',
    'minecraft:gray_concrete',
    'minecraft:green_concrete',
    'minecraft:prismarine',
    'minecraft:prismarine_slab',
    'minecraft:stone_stairs',
    'minecraft:black_stained_glass',
    'minecraft:birch_stairs',
    'minecraft:iron_block',
    'minecraft:smooth_stone',
    'minecraft:red_sandstone_slab',
    'minecraft:smooth_red_sandstone_stairs',
    'minecraft:smooth_red_sandstone',
    'minecraft:birch_planks',
    'minecraft:stone',
    'minecraft:stone_brick_slab',
    'minecraft:stone_brick_stairs',
    'minecraft:smooth_stone_slab',
    'minecraft:prismarine_stairs',
    'minecraft:stone_bricks',
    'minecraft:mossy_stone_bricks',
    'minecraft:redstone_lamp',
    'minecraft:ice',
    '#minecraft:shulker_boxes',
    'lightmanscurrency:atm',
    'minecraft:black_concrete'
]
BlockEvents.broken(event => {
  let player = event.player
  let id = event.block.id.toString()
  if (player.stages.has("op")) return
  if (breakList.includes(id)) {
    event.cancel()
  }
})

BlockEvents.placed(event => {
  let player = event.player
  let id = event.block.id.toString()
  if (player.stages.has("op")) return
  if (breakList.includes(id)) {
    event.cancel()
  }
})