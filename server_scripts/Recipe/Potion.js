ServerEvents.recipes(event => {
    const herbs = [
        'hexerei:dried_sage',
        'hexerei:dried_belladonna_flowers',
        'hexerei:dried_mandrake_flowers',
        'hexerei:dried_mugwort_flowers',
        'hexerei:dried_mugwort_leaves',
        'hexerei:dried_yellow_dock_flowers',
        'hexerei:dried_yellow_dock_leaves'
    ];
    const createPotionRecipe = (outputItem, rune, tier) => {
        const liquid = 'minecraft:water';
        let ingredients = [
            { item: 'minecraft:nether_wart' }
        ];

        // 根据等级添加不同数量的符文
        for (let i = 0; i < tier; i++) {
            ingredients.push({ item: rune });
        }

        // 添加额外材料
        if (tier === 1) {
            ingredients.push({ item: 'minecraft:redstone' });
        } else if (tier === 2) {
            ingredients.push({ item: 'minecraft:glowstone_dust' });
        } else if (tier === 3) {
            ingredients.push({ item: 'minecraft:lapis_lazuli' });
         }else if (tier === 4) {
            ingredients.push({ item: 'minecraft:lapis_lazuli' });
        } else if (tier === 5) {
            ingredients.push({ item: 'minecraft:lapis_lazuli' });
        }
        // 随机添加一种草药
        ingredients.push({ item: "hexerei:mindful_trance_blend" });

        const fluidLevelsConsumed = 500;
        let Potion = Item.of('minecraft:potion', `{Potion:"${outputItem}"}`).toJson();
        event.custom({
            type: "hexerei:mixingcauldron",
            liquid: {
                fluid: liquid
            },
            ingredients: ingredients,
            output: Potion,
            liquidOutput: {
                fluid: liquid
            },
            fluidLevelsConsumed: fluidLevelsConsumed
        });
    };

    // 基础魔力再生药水
    createPotionRecipe('kubejs:mana_regeneration_potion_tier1', 'irons_spellbooks:arcane_rune', 1);
    createPotionRecipe('kubejs:mana_regeneration_potion_tier2', 'irons_spellbooks:arcane_rune', 2);
    createPotionRecipe('kubejs:mana_regeneration_potion_tier3', 'irons_spellbooks:arcane_rune', 3);
    createPotionRecipe('kubejs:mana_regeneration_potion_tier4', 'irons_spellbooks:arcane_rune', 4);
    createPotionRecipe('kubejs:mana_regeneration_potion_tier5', 'irons_spellbooks:arcane_rune', 5);

    // 火焰药水
    createPotionRecipe('kubejs:upgrade_orb_fire_tier1', 'irons_spellbooks:fire_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_fire_tier2', 'irons_spellbooks:fire_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_fire_tier3', 'irons_spellbooks:fire_rune', 3);

    // 冰霜药水
    createPotionRecipe('kubejs:upgrade_orb_ice_tier1', 'irons_spellbooks:ice_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_ice_tier2', 'irons_spellbooks:ice_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_ice_tier3', 'irons_spellbooks:ice_rune', 3);

    // 闪电药水
    createPotionRecipe('kubejs:upgrade_orb_lightning_tier1', 'irons_spellbooks:lightning_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_lightning_tier2', 'irons_spellbooks:lightning_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_lightning_tier3', 'irons_spellbooks:lightning_rune', 3);

    // 神圣药水
    createPotionRecipe('kubejs:upgrade_orb_holy_tier1', 'irons_spellbooks:holy_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_holy_tier2', 'irons_spellbooks:holy_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_holy_tier3', 'irons_spellbooks:holy_rune', 3);

    // 自然药水
    createPotionRecipe('kubejs:upgrade_orb_nature_tier1', 'irons_spellbooks:nature_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_nature_tier2', 'irons_spellbooks:nature_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_nature_tier3', 'irons_spellbooks:nature_rune', 3);

    // 末影药水
    createPotionRecipe('kubejs:upgrade_orb_ender_tier1', 'irons_spellbooks:ender_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_ender_tier2', 'irons_spellbooks:ender_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_ender_tier3', 'irons_spellbooks:ender_rune', 3);

    // 唤魔药水
    createPotionRecipe('kubejs:upgrade_orb_evocation_tier1', 'irons_spellbooks:evocation_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_evocation_tier2', 'irons_spellbooks:evocation_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_evocation_tier3', 'irons_spellbooks:evocation_rune', 3);

    // 血魔药水
    createPotionRecipe('kubejs:upgrade_orb_blood_tier1', 'irons_spellbooks:blood_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_blood_tier2', 'irons_spellbooks:blood_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_blood_tier3', 'irons_spellbooks:blood_rune', 3);

    // 冷却药水
    createPotionRecipe('kubejs:upgrade_orb_cooldown_tier1', 'irons_spellbooks:cooldown_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_cooldown_tier2', 'irons_spellbooks:cooldown_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_cooldown_tier3', 'irons_spellbooks:cooldown_rune', 3);

    // 保护药水
    createPotionRecipe('kubejs:upgrade_orb_protection_tier1', 'irons_spellbooks:protection_rune', 1);
    createPotionRecipe('kubejs:upgrade_orb_protection_tier2', 'irons_spellbooks:protection_rune', 2);
    createPotionRecipe('kubejs:upgrade_orb_protection_tier3', 'irons_spellbooks:protection_rune', 3);
});
