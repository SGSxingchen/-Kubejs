ItemEvents.foodEaten(event => {
  let player = event.player;
  if (!player) return;
  if (event.item === 'farmersdelight:hamburger') {
    player.potionEffects.add("minecraft:instant_health", 6, 0, true, false)
  }

  if (event.item === 'farmersdelight:cooked_rice') {
    player.potionEffects.add("minecraft:regeneration", 100, 2, true, false)
  }
  if (event.item === 'farmersdelight:barbecue_stick') {
    player.potionEffects.add("minecraft:regeneration", 100, 2, true, false)
  }
  if (event.item === 'farmersdelight:chicken_sandwich') {
    player.potionEffects.add("minecraft:regeneration", 150, 2, true, false)
  }
  if (event.item === 'farmersdelight:bacon_sandwich') {
    player.potionEffects.add("minecraft:regeneration", 100, 2, true, false)
  }
  if (event.item === 'farmersdelight:mutton_wrap') {
    player.potionEffects.add("minecraft:regeneration", 100, 2, true, false)
  }

  if (event.item === 'farmersdelight:bacon_and_eggs') {
    player.potionEffects.add("minecraft:regeneration", 200, 2, true, false)
  }
  if (event.item === 'farmersdelight:bone_broth') {
    player.potionEffects.add("minecraft:regeneration", 200, 2, true, false)
  }
  if (event.item === 'farmersdelight:ratatouille') {
    player.potionEffects.add("minecraft:regeneration", 200, 2, true, false)
  }
  if (event.item === 'farmersdelight:beef_stew') {
    player.potionEffects.add("minecraft:regeneration", 400, 2, true, false)
  }
  if (event.item === 'farmersdelight:vegetable_soup') {
    player.potionEffects.add("minecraft:regeneration", 400, 2, true, false)
  }
  if (event.item === 'farmersdelight:fish_stew') {
    player.potionEffects.add("minecraft:regeneration", 400, 2, true, false)
  }
  if (event.item === 'farmersdelight:pasta_with_meatballs') {
    player.potionEffects.add("minecraft:regeneration", 400, 2, true, false)
  }
  if (event.item === 'farmersdelight:pasta_with_mutton_chop') {
    player.potionEffects.add("minecraft:regeneration", 400, 2, true, false)
  }
  if (event.item === 'farmersdelight:mushroom_rice') {
    player.potionEffects.add("minecraft:regeneration", 400, 2, true, false)
  }
  if (event.item === 'farmersdelight:steak_and_potatoes') {
    player.potionEffects.add("minecraft:regeneration", 400, 2, true, false)
  }
  if (event.item === 'farmersdelight:grilled_salmon') {
    player.potionEffects.add("minecraft:regeneration", 400, 2, true, false)
  }

  if (event.item === 'farmersdelight:chicken_soup') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:fried_rice') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:pumpkin_soup') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:baked_cod_stew') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }

  if (event.item === 'farmersdelight:noodle_soup') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:roasted_mutton_chops') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:vegetable_noodles') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:squid_ink_pasta') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:roast_chicken') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:stuffed_pumpkin') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:honey_glazed_ham') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
  if (event.item === 'farmersdelight:shepherds_pie') {
    player.potionEffects.add("minecraft:regeneration", 600, 2, true, false)
    player.potionEffects.add("minecraft:instant_health", 10, 0, true, false)
  }
});
