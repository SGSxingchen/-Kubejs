// priority: 20
StartupEvents.registry('mob_effect',event=>{
    event.create('upgrade_orb','basic')
    .beneficial()
    .color(Color.BLUE)
    .modifyAttribute(
        "irons_spellbooks:mana_regen",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.5,
        $AttributeModifier.Operation.ADDITION
    )
    .displayName("基础亲和")

    event.create('upgrade_orb_fire','basic')
    .beneficial()
    .color(Color.RED)
    .modifyAttribute(
        "irons_spellbooks:fire_spell_power",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.05,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .modifyAttribute(
        "irons_spellbooks:fire_magic_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("炽焰亲和")

    event.create('upgrade_orb_ice','basic')
    .beneficial()
    .color(Color.LIGHT_BLUE_DYE)
    .modifyAttribute(
        "irons_spellbooks:ice_spell_power",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.05,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .modifyAttribute(
        "irons_spellbooks:ice_magic_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("冰霜亲和")

    event.create('upgrade_orb_lightning','basic')
    .beneficial()
    .color(Color.DARK_BLUE)
    .modifyAttribute(
        "irons_spellbooks:lightning_spell_power",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.05,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .modifyAttribute(
        "irons_spellbooks:lightning_magic_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("雷霆亲和")
    
    event.create('upgrade_orb_holy','basic')
    .beneficial()
    .color(Color.GOLD)
    .modifyAttribute(
        "irons_spellbooks:holy_spell_power",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.05,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .modifyAttribute(
        "irons_spellbooks:holy_magic_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("神圣亲和")

    event.create('upgrade_orb_ender','basic')
    .beneficial()
    .color(Color.PURPLE_DYE)
    .modifyAttribute(
        "irons_spellbooks:ender_spell_power",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.05,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .modifyAttribute(
        "irons_spellbooks:ender_magic_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("末影亲和")

    event.create('upgrade_orb_blood','basic')
    .beneficial()
    .color(Color.DARK_RED)
    .modifyAttribute(
        "irons_spellbooks:blood_spell_power",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.05,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .modifyAttribute(
        "irons_spellbooks:blood_magic_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("猩红亲和")

    event.create('upgrade_orb_evocation','basic')
    .beneficial()
    .color(Color.GREEN)
    .modifyAttribute(
        "irons_spellbooks:evocation_spell_power",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.05,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .modifyAttribute(
        "irons_spellbooks:evocation_magic_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("唤魔亲和")

    event.create('upgrade_orb_nature','basic')
    .beneficial()
    .color(Color.GREEN_DYE)
    .modifyAttribute(
        "irons_spellbooks:nature_spell_power",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.05,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .modifyAttribute(
        "irons_spellbooks:nature_magic_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("自然亲和")

    event.create('upgrade_orb_cooldown','basic')
    .beneficial()
    .color(Color.WHITE)
    .modifyAttribute(
        "irons_spellbooks:cooldown_reduction",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("冷却缩减")

    event.create('upgrade_orb_protection','basic')
    .beneficial()
    .color(Color.BLACK)
    .modifyAttribute(
        "irons_spellbooks:spell_resist",
        "87733c95-909c-4fc3-9780-e35a89565999",
        0.1,
        $AttributeModifier.Operation.MULTIPLY_TOTAL
    )
    .displayName("抗魔")
})


// StartupEvents.registry('potion',event=>{
//     event.create('upgrade_orb_fire_tier1','basic')
//     .addEffect(new $MobEffectInstance(
//         ,3600,0))
// })