ServerEvents.recipes(event=>{
        // 元素符文（以火之符文为例，其他元素符文类似）
    // 火之符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:blaze_powder",
            "hexerei:dried_belladonna_flowers",
            "minecraft:magma_cream"
        ],
        outputItem: "irons_spellbooks:fire_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 冰之符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "irons_spellbooks:blank_rune",
            "minecraft:packed_ice",
            "hexerei:dried_mugwort_flowers",
            "minecraft:snow_block"
        ],
        outputItem: "irons_spellbooks:ice_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 雷之符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:prismarine_crystals",
            "hexerei:dried_yellow_dock_flowers",
            "minecraft:lightning_rod"
        ],
        outputItem: "irons_spellbooks:lightning_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 神圣符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:glowstone_dust",
            "hexerei:dried_sage",
            "minecraft:gold_ingot"
        ],
        outputItem: "irons_spellbooks:holy_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 末影符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:ender_pearl",
            "hexerei:dried_mandrake_flowers",
            "minecraft:chorus_fruit"
        ],
        outputItem: "irons_spellbooks:ender_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 血之符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "hexerei:blood_bottle",
            "hexerei:dried_belladonna_flowers",
            "born_in_chaos_v1:bone_heart"
        ],
        outputItem: "irons_spellbooks:blood_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 唤魔符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:totem_of_undying",
            "hexerei:dried_yellow_dock_leaves",
            "born_in_chaos_v1:seedof_chaos"
        ],
        outputItem: "irons_spellbooks:evocation_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 自然符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:moss_block",
            "hexerei:dried_mugwort_leaves",
            "minecraft:glow_berries"
        ],
        outputItem: "irons_spellbooks:nature_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 奥术符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:amethyst_shard",
            "hexerei:selenite_shard"
        ],
        outputItem: "irons_spellbooks:arcane_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 新增配方
    // 草药晾晒架
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:stick",
            "minecraft:string",
            "minecraft:oak_planks"
        ],
        outputItem: "hexerei:herb_drying_rack",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 基座
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:stone",
            "minecraft:stone",
            "minecraft:stone_bricks",
            "minecraft:diamond"
        ],
        outputItem: "supplementaries:pedestal",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 空白符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:stone",
            "irons_spellbooks:arcane_essence",
            "minecraft:lapis_lazuli",
            'hexerei:dried_yellow_dock_leaves'
        ],
        outputItem: "irons_spellbooks:blank_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 冷却符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:clock",
            "minecraft:redstone",
            'hexerei:dried_mugwort_leaves'
        ],
        outputItem: "irons_spellbooks:cooldown_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 保护符文
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "irons_spellbooks:arcane_essence",
            "irons_spellbooks:blank_rune",
            "minecraft:shield",
            "minecraft:iron_ingot",
            'hexerei:dried_yellow_dock_flowers'
        ],
        outputItem: "irons_spellbooks:protection_rune",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });

    // 神秘手稿
    addCustomMixingCauldronRecipe(event, {
        ingredients: [
            "minecraft:book",
            "irons_spellbooks:ancient_knowledge_fragment",
            "minecraft:ender_pearl",
            "irons_spellbooks:ancient_knowledge_fragment",
            'irons_spellbooks:blank_rune',
            'irons_spellbooks:arcane_salvage'
        ],
        outputItem: "irons_spellbooks:eldritch_manuscript",
        outputCount: 1,
        fluidLevelsConsumed: 300
    });
})