ServerEvents.recipes(event => {
  event.remove({ mod: 'refurbished_furniture' })
  event.remove({ mod: 'createaddition' })
  event.remove({ mod: 'lightmanscurrency' })
  event.remove({ mod: 'tacz' })
  event.remove({ mod: 'marbledsarsenal' })
  event.remove({ mod: 'marbledsapi' })
  event.remove({ mod: 'irons_spellbooks' })
  event.remove({ mod: 'stars_carrier' })
  event.remove({ mod: 'zombie_extreme' })
  event.remove({ mod: 'supplementaries' })
  event.remove({ mod: 'casinocraft' })
  event.remove({ mod: 'born_in_chaos_v1' })
  event.remove({ mod: 'immersive_aircraft' })
  event.remove({ mod: 'man_of_many_planes' })
  event.remove({ mod: 'hexerei' })
  event.remove({ mod:'securitycraft'})
  event.remove({ type: 'tacz:gun' })

})

ServerEvents.recipes(event => {
  let minecraft = [
    'minecraft:bucket',
    '#minecraft:boats',
    'minecraft:flint_and_steel',
    'minecraft:shield',
    'minecraft:iron_helmet',
    'minecraft:iron_chestplate',
    'minecraft:iron_leggings',
    'minecraft:iron_boots',
    'minecraft:golden_helmet',
    'minecraft:golden_chestplate',
    'minecraft:golden_leggings',
    'minecraft:golden_boots',
    'minecraft:diamond_helmet',
    'minecraft:diamond_chestplate',
    'minecraft:diamond_leggings',
    'minecraft:diamond_boots',
    'minecraft:netherite_helmet',
    'minecraft:netherite_chestplate',
    'minecraft:netherite_leggings',
    'minecraft:netherite_boots',
    'minecraft:piston',
    'minecraft:sticky_piston',
    'minecraft:beacon',
    'minecraft:enchanting_table',
    'minecraft:netherite_sword',
    'shieldexp:griefer_shield',
    'shieldexp:netherite_shield',
    'supplementaries:rope_arrow',
    'minecraft:tnt',
    'minecraft:end_crystal',
    'minecraft:minecart',
    'minecraft:fishing_rod',
    'minecraft:leather_helmet',
    'minecraft:leather_chestplate',
    'minecraft:leather_leggings',
    'minecraft:leather_boots',
    'minecraft:netherite_ingot',
    '#minecraft:trim_templates',
    'minecraft:golden_apple'
  ]
  let create = [
    'create:cart_assembler',
    'create:clockwork_bearing',
    'create:windmill_bearing',
    'create:mechanical_bearing',
    'create:super_glue',
    'create:sail_frame',
    'create:electron_tube',
    'create:rose_quartz',
    'create:empty_blaze_burner',
    'create:wand_of_symmetry',
    'create:potato_cannon',
    'create:elevator_pulley',
    'create:rope_pulley',
    'create:mechanical_piston',
    'create:sticky_mechanical_piston',
    'create:gantry_shaft',
    'create:nozzle',
    'create:gantry_carriage',
    'create:peculiar_bell',
    'create:track',
    'create:schematicannon',
    'create:schematic_table',
    'create:empty_schematic',
    'create:schematic_and_quill',
    'create:netherite_backtank',
    'create:copper_backtank',
    'create:piston_extension_pole',
    'create:sticker',
    'create:copper_diving_helmet',
    'create:netherite_diving_helmet',
    'create:copper_diving_boots',
    'create:netherite_diving_boots',
    'create:minecart_coupling',
    'create:mechanical_roller',
    'create:track_signal',
    'create:mechanical_drill',
    'create:deployer',
    'create:water_wheel',
    'create:large_water_wheel',
    'create:mechanical_saw',
    'create:extendo_grip',
  ]
  minecraft.forEach(Item => {
    event.remove({ output: Item })
  })
  create.forEach(Item => {
    event.remove({ output: Item })
  })
})