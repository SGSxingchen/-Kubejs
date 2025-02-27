StartupEvents.registry('item',event=>{
    event.create('holy_tier1_spellbook','irons_spells_js:spellbook')
    .setMaxSpellSlots(2)
    .addDefaultAttribute('irons_spellbooks:holy_spell_power',"神圣亲和",0.5,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana',"最大法力值",100,'addition')
    .addDefaultAttribute('irons_spellbooks:mana_regen',"法力回复",-1,'addition')
    .addDefaultAttribute('irons_spellbooks:cast_time_reduction',"吟唱缩减",0.1,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:cooldown_reduction',"冷却缩减",0.1,'multiply_total')
    .addDefaultSpell('irons_spellbooks:divine_smite',1)
    .addDefaultSpell('irons_spellbooks:healing_circle',3)
    .displayName("神圣序列九")

    event.create('fire_tier1_spellbook','irons_spells_js:spellbook')
    .setMaxSpellSlots(2)
    .addDefaultAttribute('irons_spellbooks:fire_spell_power',"炽焰亲和",0.5,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana',"最大法力值",100,'addition')
    .addDefaultAttribute('irons_spellbooks:mana_regen',"法力回复",-1,'addition')
    .addDefaultAttribute('irons_spellbooks:cast_time_reduction',"吟唱缩减",0.1,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:cooldown_reduction',"冷却缩减",0.1,'multiply_total')
    .addDefaultSpell('irons_spellbooks:burning_dash',3)
    .addDefaultSpell('irons_spellbooks:scorch',3)
    .displayName("炽焰序列九")

    event.create('nature_tier1_spellbook','irons_spells_js:spellbook')
    .setMaxSpellSlots(2)
    .addDefaultAttribute('irons_spellbooks:nature_spell_power',"自然亲和",0.5,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana',"最大法力值",100,'addition')
    .addDefaultAttribute('irons_spellbooks:mana_regen',"法力回复",-1,'addition')
    .addDefaultAttribute('irons_spellbooks:cast_time_reduction',"吟唱缩减",0.1,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:cooldown_reduction',"冷却缩减",0.1,'multiply_total')
    .addDefaultSpell('irons_spellbooks:spider_aspect',1)
    .addDefaultSpell('irons_spellbooks:poison_arrow',3)
    .displayName("自然序列九")

    event.create('ice_tier1_spellbook','irons_spells_js:spellbook')
    .setMaxSpellSlots(2)
    .addDefaultAttribute('irons_spellbooks:ice_spell_power',"冰霜亲和",0.5,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana',"最大法力值",100,'addition')
    .addDefaultAttribute('irons_spellbooks:mana_regen',"法力回复",-1,'addition')
    .addDefaultAttribute('irons_spellbooks:cast_time_reduction',"吟唱缩减",0.1,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:cooldown_reduction',"冷却缩减",0.1,'multiply_total')
    .addDefaultSpell('irons_spellbooks:frostwave',2)
    .addDefaultSpell('irons_spellbooks:icicle',3)
    .displayName("冰霜序列九")

    event.create('lightning_tier1_spellbook','irons_spells_js:spellbook')
    .setMaxSpellSlots(2)
    .addDefaultAttribute('irons_spellbooks:lightning_spell_power',"雷霆亲和",0.5,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana',"最大法力值",100,'addition')
    .addDefaultAttribute('irons_spellbooks:mana_regen',"法力回复",-1,'addition')
    .addDefaultAttribute('irons_spellbooks:cast_time_reduction',"吟唱缩减",0.1,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:cooldown_reduction',"冷却缩减",0.1,'multiply_total')
    .addDefaultSpell('irons_spellbooks:ball_lightning',3)
    .addDefaultSpell('irons_spellbooks:lightning_lance',3)
    .displayName("雷霆序列九")

    event.create('blood_tier1_spellbook','irons_spells_js:spellbook')
    .setMaxSpellSlots(2)
    .addDefaultAttribute('irons_spellbooks:blood_spell_power',"猩红亲和",0.5,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana',"最大法力值",100,'addition')
    .addDefaultAttribute('irons_spellbooks:mana_regen',"法力回复",0,'addition')
    .addDefaultAttribute('irons_spellbooks:cast_time_reduction',"吟唱缩减",0.1,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:cooldown_reduction',"冷却缩减",0.1,'multiply_total')
    .addDefaultSpell('irons_spellbooks:blood_slash',1)
    .addDefaultSpell('irons_spellbooks:ray_of_siphoning',3)
    .displayName("猩红序列九")

    event.create('evocation_tier1_spellbook','irons_spells_js:spellbook')
    .setMaxSpellSlots(2)
    .addDefaultAttribute('irons_spellbooks:evocation_spell_power',"呼魔亲和",0.5,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana',"最大法力值",100,'addition')
    .addDefaultAttribute('irons_spellbooks:mana_regen',"法力回复",-1,'addition')
    .addDefaultAttribute('irons_spellbooks:cast_time_reduction',"吟唱缩减",0.1,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:cooldown_reduction',"冷却缩减",0.1,'multiply_total')
    .addDefaultSpell('irons_spellbooks:invisibility',3)
    .addDefaultSpell('irons_spellbooks:chain_creeper',3)
    .displayName("呼魔序列九")

    event.create('ender_tier1_spellbook','irons_spells_js:spellbook')
    .setMaxSpellSlots(2)
    .addDefaultAttribute('irons_spellbooks:ender_spell_power',"末影亲和",0.5,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:max_mana',"最大法力值",100,'addition')
    .addDefaultAttribute('irons_spellbooks:mana_regen',"法力回复",-1,'addition')
    .addDefaultAttribute('irons_spellbooks:cast_time_reduction',"吟唱缩减",0.1,'multiply_total')
    .addDefaultAttribute('irons_spellbooks:cooldown_reduction',"冷却缩减",0.1,'multiply_total')
    .addDefaultSpell('irons_spellbooks:summon_ender_chest',1)
    .addDefaultSpell('irons_spellbooks:starfall',1)
    .displayName("末影序列九")
})