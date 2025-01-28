// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')


ItemEvents.modification(event=>{
    event.modify('minecraft:potion',item=>{
        item.maxStackSize = 16
    })
    event.modify('minecraft:splash_potion',item=>{
        item.maxStackSize = 16
    })
    event.modify('minecraft:lingering_potion',item=>{
        item.maxStackSize = 16
    })

    // let armorParts = ['helmet', 'chestplate', 'leggings', 'boots'];
    // armorParts.forEach(part => {
    //     event.modify(`irons_spellbooks:wandering_magician_${part}`,item=>{
    //         item.addAttribute("irons_spellbooks:max_mana",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"额外法力",25,'addition')
    //         item.addAttribute("irons_spellbooks:mana_regen",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"法力衰减",-0.25,'addition')
    //         item.addAttribute("irons_spellbooks:cooldown_reduction",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"冷却缩减",0.03,'multiply_total')
    //         item.addAttribute("irons_spellbooks:spell_power",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"序列加成",0.03,'multiply_total')
    //     })

    //     event.modify(`irons_spellbooks:pumpkin_${part}`,item=>{
    //         item.addAttribute("irons_spellbooks:max_mana",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"额外法力",25,'addition')
    //         item.addAttribute("irons_spellbooks:mana_regen",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"法力衰减",-0.25,'addition')
    //         item.addAttribute("irons_spellbooks:cooldown_reduction",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"冷却缩减",0.05,'multiply_total')
    //         item.addAttribute("irons_spellbooks:spell_power",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"序列加成",0.05,'multiply_total')
    //     })

    //     event.modify(`irons_spellbooks:netherite_mage_${part}`,item=>{
    //         item.addAttribute("irons_spellbooks:max_mana",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"额外法力",25,'addition')
    //         item.addAttribute("irons_spellbooks:mana_regen",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"法力衰减",-0.25,'addition')
    //         item.addAttribute("irons_spellbooks:cooldown_reduction",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"冷却缩减",0.07,'multiply_total')
    //         item.addAttribute("irons_spellbooks:spell_power",
    //         UUID.fromString("98833c95-909c-4fc3-9780-e35a89565999"),"序列加成",0.07,'multiply_total')
    //     })
    // });
})