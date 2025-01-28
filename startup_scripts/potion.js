// priority: 10
let $MobEffectInstance = Java.loadClass('net.minecraft.world.effect.MobEffectInstance')
let $Potion = Java.loadClass('net.minecraft.world.item.alchemy.Potion')
let $DeferredRegister = Java.loadClass('net.minecraftforge.registries.DeferredRegister')
let $Registries = Java.loadClass('net.minecraft.core.registries.Registries')
let $ForgeRegistries = Java.loadClass('net.minecraftforge.registries.ForgeRegistries')
let $MobEffect = Java.loadClass('io.redspace.ironsspellbooks.effect.MagicMobEffect')
let $MobEffectCategory = Java.loadClass('net.minecraft.world.effect.MobEffectCategory')
let $AttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")
let $ISS_AttributeRegistry = Java.loadClass('io.redspace.ironsspellbooks.api.registry.AttributeRegistry')

let $RegistriesInfo = Java.loadClass('dev.latvian.mods.kubejs.registry.RegistryInfo')
StartupEvents.init(event=>{
    const eventBus = ForgeModEvents.eventBus()
    // let EFFECTS_REGISTER = $DeferredRegister["create(net.minecraft.resources.ResourceKey,java.lang.String)"]($Registries.MOB_EFFECT,'kubejs')
    // let MANA_REGENERATION = EFFECTS_REGISTER.register(
    //     'mana_regeneration',
    //     ()=>{
    //         return new $MobEffect($MobEffectCategory.BENEFICIAL,3311322)
    //         .addAttributeModifier($ISS_AttributeRegistry.MANA_REGEN.get(), "87733c95-909c-4fc3-9780-e35a89565777", 0.5, $AttributeModifier.Operation.ADDITION)
    //     }
    // )
    // EFFECTS_REGISTER.register(eventBus)

    let POTIONS_REGISTER = $DeferredRegister["create(net.minecraftforge.registries.IForgeRegistry,java.lang.String)"]($ForgeRegistries.POTIONS,'kubejs')
    let MANA_POTION = POTIONS_REGISTER.register("mana_regeneration_potion_tier1", () => {
        return new $Potion("mana_regeneration_potion",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,1)
        ]);
    });
    let MANA_POTION_TWO = POTIONS_REGISTER.register("mana_regeneration_potion_tier2", () => {
        return new $Potion("mana_regeneration_potion",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,3)
        ]);
    });
    let MANA_POTION_THREE = POTIONS_REGISTER.register("mana_regeneration_potion_tier3", () => {
        return new $Potion("mana_regeneration_potion",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,5)
        ]);
    });
    let MANA_POTION_FOUR = POTIONS_REGISTER.register("mana_regeneration_potion_tier4", () => {
        return new $Potion("mana_regeneration_potion",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,7)
        ]);
    });
    let MANA_POTION_FIVE = POTIONS_REGISTER.register("mana_regeneration_potion_tier5", () => {
        return new $Potion("mana_regeneration_potion",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,9)
        ]);
    });
    // let MANA_POTION_SIX = POTIONS_REGISTER.register("mana_regeneration_potion_tier6", () => {
    //     return new $Potion("mana_regeneration_potion",[
    //         new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,34)
    //     ]);
    // });
    // let MANA_POTION_SEVEN = POTIONS_REGISTER.register("mana_regeneration_potion_tier7", () => {
    //     return new $Potion("mana_regeneration_potion",[
    //         new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,39)
    //     ]);
    // });
    // let MANA_POTION_EIGHT = POTIONS_REGISTER.register("mana_regeneration_potion_tier8", () => {
    //     return new $Potion("mana_regeneration_potion",[
    //         new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,44)
    //     ]);
    // });
    // let MANA_POTION_NINE = POTIONS_REGISTER.register("mana_regeneration_potion_tier9", () => {
    //     return new $Potion("mana_regeneration_potion",[
    //         new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,45)
    //     ]);
    // });
    // let MANA_POTION_TEN = POTIONS_REGISTER.register("mana_regeneration_potion_tier10", () => {
    //     return new $Potion("mana_regeneration_potion",[
    //         new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb"),12000,49)
    //     ]);
    // });
    
    let FIRE_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_fire_tier1", () => {
        return new $Potion("upgrade_orb_fire",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_fire"),6000,0)
        ]);
    });
    let FIRE_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_fire_tier2", () => {
        return new $Potion("upgrade_orb_fire",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_fire"),6000,1)
        ]);
    });
    let FIRE_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_fire_tier3", () => {
        return new $Potion("upgrade_orb_fire",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_fire"),6000,2)
        ]);
    });

    let ICE_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_ice_tier1", () => {
        return new $Potion("upgrade_orb_ice",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_ice"),6000,0)
        ]);
    });
    let ICE_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_ice_tier2", () => {
        return new $Potion("upgrade_orb_ice",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_ice"),6000,1)
        ]);
    });
    let ICE_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_ice_tier3", () => {
        return new $Potion("upgrade_orb_ice",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_ice"),6000,2)
        ]);
    });

    let LIGHTNING_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_lightning_tier1", () => {
        return new $Potion("upgrade_orb_lightning",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_lightning"),6000,0)
        ]);
    });
    let LIGHTNING_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_lightning_tier2", () => {
        return new $Potion("upgrade_orb_lightning",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_lightning"),6000,1)
        ]);
    });
    let LIGHTNING_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_lightning_tier3", () => {
        return new $Potion("upgrade_orb_lightning",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_lightning"),6000,2)
        ]);
    });

    let HOLY_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_holy_tier1", () => {
        return new $Potion("upgrade_orb_holy",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_holy"),6000,0)
        ]);
    });
    let HOLY_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_holy_tier2", () => {
        return new $Potion("upgrade_orb_holy",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_holy"),6000,1)
        ]);
    });
    let HOLY_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_holy_tier3", () => {
        return new $Potion("upgrade_orb_holy",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_holy"),6000,2)
        ]);
    });

    let NATURE_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_nature_tier1", () => {
        return new $Potion("upgrade_orb_nature",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_nature"),6000,0)
        ]);
    });
    let NATURE_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_nature_tier2", () => {
        return new $Potion("upgrade_orb_nature",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_nature"),6000,1)
        ]);
    });
    let NATURE_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_nature_tier3", () => {
        return new $Potion("upgrade_orb_nature",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_nature"),6000,2)
        ]);
    });

    let ENDER_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_ender_tier1", () => {
        return new $Potion("upgrade_orb_ender",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_ender"),6000,0)
        ]);
    });
    let ENDER_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_ender_tier2", () => {
        return new $Potion("upgrade_orb_ender",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_ender"),6000,1)
        ]);
    });
    let ENDER_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_ender_tier3", () => {
        return new $Potion("upgrade_orb_ender",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_ender"),6000,2)
        ]);
    });

    let EVOCATION_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_evocation_tier1", () => {
        return new $Potion("upgrade_orb_evocation",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_evocation"),6000,0)
        ]);
    });
    let EVOCATION_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_evocation_tier2", () => {
        return new $Potion("upgrade_orb_evocation",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_evocation"),6000,1)
        ]);
    });
    let EVOCATION_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_evocation_tier3", () => {
        return new $Potion("upgrade_orb_evocation",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_evocation"),6000,2)
        ]);
    });

    let BLOOD_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_blood_tier1", () => {
        return new $Potion("upgrade_orb_blood",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_blood"),6000,0)
        ]);
    });
    let BLOOD_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_blood_tier2", () => {
        return new $Potion("upgrade_orb_blood",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_blood"),6000,1)
        ]);
    });
    let BLOOD_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_blood_tier3", () => {
        return new $Potion("upgrade_orb_blood",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_blood"),6000,2)
        ]);
    });

    let COOLDOWN_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_cooldown_tier1", () => {
        return new $Potion("upgrade_orb_cooldown",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_cooldown"),6000,0)
        ]);
    });
    let COOLDOWN_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_cooldown_tier2", () => {
        return new $Potion("upgrade_orb_cooldown",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_cooldown"),12000,1)
        ]);
    });
    let COOLDOWN_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_cooldown_tier3", () => {
        return new $Potion("upgrade_orb_cooldown",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_cooldown"),12000,2)
        ]);
    });

    let PROTECTION_POTION_ONE = POTIONS_REGISTER.register("upgrade_orb_protection_tier1", () => {
        return new $Potion("upgrade_orb_protection",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_protection"),6000,0)
        ]);
    });
    let PROTECTION_POTION_TWO = POTIONS_REGISTER.register("upgrade_orb_protection_tier2", () => {
        return new $Potion("upgrade_orb_protection",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_protection"),12000,1)
        ]);
    });
    let PROTECTION_POTION_THREE = POTIONS_REGISTER.register("upgrade_orb_protection_tier3", () => {
        return new $Potion("upgrade_orb_protection",[
            new $MobEffectInstance($RegistriesInfo.MOB_EFFECT.getValue("kubejs:upgrade_orb_protection"),12000,2)
        ]);
    });
    POTIONS_REGISTER.register(eventBus)
})