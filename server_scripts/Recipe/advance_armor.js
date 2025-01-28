ServerEvents.recipes(event => {
    // 强化皮革盔甲
    let leatherParts = [
        {part: 'helmet', pattern: ['LLL', 'L L', '   ']},
        {part: 'chestplate', pattern: ['L L', 'LLL', 'LLL']},
        {part: 'leggings', pattern: ['LLL', 'L L', 'L L']},
        {part: 'boots', pattern: ['   ', 'L L', 'L L']}
    ];

    leatherParts.forEach(item => {
        event.shaped(Item.of(`minecraft:leather_${item.part}`, '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2), item.pattern, {
            L: 'minecraft:leather'
        })
    });

    // 强化锁链盔甲
    let chainmailParts = [
        {part: 'helmet', pattern: ['CCC', 'C C', '   ']},
        {part: 'chestplate', pattern: ['C C', 'CCC', 'CCC']},
        {part: 'leggings', pattern: ['CCC', 'C C', 'C C']},
        {part: 'boots', pattern: ['   ', 'C C', 'C C']}
    ];
    chainmailParts.forEach(item => {
        event.shaped(Item.of(`minecraft:chainmail_${item.part}`, '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2), item.pattern, {
            C: 'createaddition:iron_wire'
        })
    });

    // 强化铁套装（保护 II）
    let ironParts = ['helmet', 'chestplate', 'leggings', 'boots'];
    ironParts.forEach(part => {
        event.smithing(
            Item.of(`minecraft:iron_${part}`, '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2),
            `minecraft:chainmail_${part}`,
            'minecraft:iron_ingot',
            'minecraft:iron_ingot'
        );
    });


    // 防暴盔甲
    let riotArmorParts = ['helmet', 'chestplate', 'leggings', 'boots'];
    riotArmorParts.forEach(part => {
        event.smithing(
            Item.of(`marbledsarsenal:riot_armor_${part}`, '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2),
            `minecraft:iron_${part}`,
            'marbledsapi:steel_ingot',
            'minecraft:netherite_scrap'
        );
    });

    // 黑色主宰盔甲
    let juggernautArmorParts = ['helmet', 'chestplate', 'leggings', 'boots'];
    juggernautArmorParts.forEach(part => {
        event.smithing(
            Item.of(`marbledsarsenal:black_juggernaut_armor_${part}`, '{Damage:0}').enchant('minecraft:protection', 2).enchant('minecraft:unbreaking', 2),
            `marbledsarsenal:riot_armor_${part}`,
            'marbledsapi:hardened_steel_ingot',
            'minecraft:netherite_ingot'
        );
    });

    // 保护 I 下界合金盔甲
    let netheriteArmorParts = ['helmet', 'chestplate', 'leggings', 'boots'];
    netheriteArmorParts.forEach(part => {
        event.smithing(
            Item.of(`minecraft:netherite_${part}`, '{Damage:0}').enchant('minecraft:unbreaking', 2),
            `minecraft:iron_${part}`,
            'marbledsapi:steel_ingot',
            'minecraft:netherite_ingot'
        );
    });
    
    // 流浪法师套装
    event.shaped(Item.of('irons_spellbooks:wandering_magician_helmet', 1,'{AttributeModifiers:[{Amount:2.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"head",UUID:[I;299301696,-1870575291,-2032057225,-505042411]},{Amount:1.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"head",UUID:[I;-469062361,2082490826,-1734985361,1169854351]},{Amount:30.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"head",UUID:[I;-464508591,955925674,-1988177810,-1970286761]},{Amount:0.05d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"head",UUID:[I;182041256,-138590091,-1166772362,1772161961]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2), [
        ['irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth'],
        ['irons_spellbooks:magic_cloth', 'minecraft:leather_helmet', 'irons_spellbooks:magic_cloth'],
        ['', '', '']
    ]);
    event.shaped(Item.of('irons_spellbooks:wandering_magician_chestplate',1, '{AttributeModifiers:[{Amount:6.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"chest",UUID:[I;299301696,-1870575291,-2032057225,-505042412]},{Amount:1.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"chest",UUID:[I;-469062361,2082490826,-1734985361,1169854352]},{Amount:30.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"chest",UUID:[I;-464508591,955925674,-1988177810,-1970286762]},{Amount:0.05d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"chest",UUID:[I;182041256,-138590091,-1166772362,1772161962]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2), [
        ['irons_spellbooks:magic_cloth', 'minecraft:leather_chestplate', 'irons_spellbooks:magic_cloth'],
        ['irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth'],
        ['irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth']
    ]);
    event.shaped(Item.of('irons_spellbooks:wandering_magician_leggings', 1,'{AttributeModifiers:[{Amount:5.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"legs",UUID:[I;299301696,-1870575291,-2032057225,-505042413]},{Amount:1.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"legs",UUID:[I;-469062361,2082490826,-1734985361,1169854353]},{Amount:30.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"legs",UUID:[I;-464508591,955925674,-1988177810,-1970286763]},{Amount:0.05d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"legs",UUID:[I;182041256,-138590091,-1166772362,1772161963]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2), [
        ['irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth', 'irons_spellbooks:magic_cloth'],
        ['irons_spellbooks:magic_cloth', 'minecraft:leather_leggings', 'irons_spellbooks:magic_cloth'],
        ['irons_spellbooks:magic_cloth', '', 'irons_spellbooks:magic_cloth']
    ]);
    event.shaped(Item.of('irons_spellbooks:wandering_magician_boots', 1,'{AttributeModifiers:[{Amount:2.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"feet",UUID:[I;299301696,-1870575291,-2032057225,-505042414]},{Amount:1.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"feet",UUID:[I;-469062361,2082490826,-1734985361,1169854354]},{Amount:30.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"feet",UUID:[I;-464508591,955925674,-1988177810,-1970286764]},{Amount:0.05d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"feet",UUID:[I;182041256,-138590091,-1166772362,1772161964]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2), [
        ['irons_spellbooks:magic_cloth', '', 'irons_spellbooks:magic_cloth'],
        ['irons_spellbooks:magic_cloth', 'minecraft:leather_boots', 'irons_spellbooks:magic_cloth'],
        ['', '', '']
    ]);

    // 南瓜套装
    event.shaped(Item.of('irons_spellbooks:pumpkin_helmet', 1,'{AttributeModifiers:[{Amount:3.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"head",UUID:[I;1739776372,1000031333,-1760965567,-1391461551]},{Amount:2.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"head",UUID:[I;-1559347091,-1315879044,-1473699396,1569718061]},{Amount:80.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"head",UUID:[I;-2131378719,1037061778,-2076031818,495082401]},{Amount:0.08d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"head",UUID:[I;794534069,-1787149540,-1250943595,405832681]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2), [
        ['hexerei:infused_fabric', 'hexerei:infused_fabric', 'hexerei:infused_fabric'],
        ['hexerei:infused_fabric', 'minecraft:carved_pumpkin', 'hexerei:infused_fabric'],
        ['', '', '']
    ]);
    event.shaped(Item.of('irons_spellbooks:pumpkin_chestplate', 1,'{AttributeModifiers:[{Amount:8.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"chest",UUID:[I;1739776372,1000031333,-1760965567,-1391461552]},{Amount:2.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"chest",UUID:[I;-1559347091,-1315879044,-1473699396,1569718062]},{Amount:80.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"chest",UUID:[I;-2131378719,1037061778,-2076031818,495082402]},{Amount:0.08d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"chest",UUID:[I;794534069,-1787149540,-1250943595,405832682]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2), [
        ['hexerei:infused_fabric', '', 'hexerei:infused_fabric'],
        ['hexerei:infused_fabric', 'minecraft:carved_pumpkin', 'hexerei:infused_fabric'],
        ['hexerei:infused_fabric', 'hexerei:infused_fabric', 'hexerei:infused_fabric']
    ]);
    event.shaped(Item.of('irons_spellbooks:pumpkin_leggings',1, '{AttributeModifiers:[{Amount:6.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"legs",UUID:[I;1739776372,1000031333,-1760965567,-1391461553]},{Amount:2.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"legs",UUID:[I;-1559347091,-1315879044,-1473699396,1569718063]},{Amount:80.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"legs",UUID:[I;-2131378719,1037061778,-2076031818,495082403]},{Amount:0.08d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"legs",UUID:[I;794534069,-1787149540,-1250943595,405832683]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2), [
        ['hexerei:infused_fabric', 'hexerei:infused_fabric', 'hexerei:infused_fabric'],
        ['hexerei:infused_fabric', 'minecraft:carved_pumpkin', 'hexerei:infused_fabric'],
        ['hexerei:infused_fabric', '', 'hexerei:infused_fabric']
    ]);
    event.shaped(Item.of('irons_spellbooks:pumpkin_boots', '{AttributeModifiers:[{Amount:3.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"feet",UUID:[I;1739776372,1000031333,-1760965567,-1391461554]},{Amount:2.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"feet",UUID:[I;-1559347091,-1315879044,-1473699396,1569718064]},{Amount:80.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"feet",UUID:[I;-2131378719,1037061778,-2076031818,495082404]},{Amount:0.08d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"feet",UUID:[I;794534069,-1787149540,-1250943595,405832684]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2), [
        ['', '', ''],
        ['hexerei:infused_fabric', 'minecraft:carved_pumpkin', 'hexerei:infused_fabric'],
        ['hexerei:infused_fabric', '', 'hexerei:infused_fabric']
    ]);

    // 下界法师套装
    event.smithing(
        Item.of('irons_spellbooks:netherite_mage_helmet',1, '{AttributeModifiers:[{Amount:3.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"head",UUID:[I;1193586852,1602177788,-1489426184,136781121]},{Amount:3.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"head",UUID:[I;245207769,-347387076,-1438965706,-198342161]},{Amount:150.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"head",UUID:[I;-634161781,-657895964,-1437930256,512448661]},{Amount:0.15d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"head",UUID:[I;1144842290,1895188934,-1962341657,987271611]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2),
        'irons_spellbooks:pumpkin_helmet',
        'irons_spellbooks:arcane_salvage',
        'marbledsapi:hardened_steel_sheet'
    );
    event.smithing(
        Item.of('irons_spellbooks:netherite_mage_chestplate', 1,'{AttributeModifiers:[{Amount:8.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"chest",UUID:[I;1193586852,1602177788,-1489426184,136781122]},{Amount:3.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"chest",UUID:[I;245207769,-347387076,-1438965706,-198342162]},{Amount:150.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"chest",UUID:[I;-634161781,-657895964,-1437930256,512448662]},{Amount:0.15d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"chest",UUID:[I;1144842290,1895188934,-1962341657,987271612]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2),
        'irons_spellbooks:pumpkin_chestplate',
        'irons_spellbooks:arcane_salvage',
        'marbledsapi:hardened_steel_sheet'
    );
    event.smithing(
        Item.of('irons_spellbooks:netherite_mage_leggings',1, '{AttributeModifiers:[{Amount:6.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"legs",UUID:[I;1193586852,1602177788,-1489426184,136781123]},{Amount:3.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"legs",UUID:[I;245207769,-347387076,-1438965706,-198342163]},{Amount:150.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"legs",UUID:[I;-634161781,-657895964,-1437930256,512448663]},{Amount:0.15d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"legs",UUID:[I;1144842290,1895188934,-1962341657,987271613]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2),
        'irons_spellbooks:pumpkin_leggings',
        'irons_spellbooks:arcane_salvage',
        'marbledsapi:hardened_steel_sheet'
    );
    event.smithing(
        Item.of('irons_spellbooks:netherite_mage_boots',1, '{AttributeModifiers:[{Amount:3.0d,AttributeName:"minecraft:generic.armor",Operation:0,Slot:"feet",UUID:[I;1193586852,1602177788,-1489426184,136781124]},{Amount:3.0d,AttributeName:"minecraft:generic.armor_toughness",Operation:0,Slot:"feet",UUID:[I;245207769,-347387076,-1438965706,-198342164]},{Amount:150.0d,AttributeName:"irons_spellbooks:max_mana",Operation:0,Slot:"feet",UUID:[I;-634161781,-657895964,-1437930256,512448664]},{Amount:0.15d,AttributeName:"irons_spellbooks:spell_power",Operation:2,Slot:"feet",UUID:[I;1144842290,1895188934,-1962341657,987271614]}],Damage:0}').enchant('minecraft:protection', 1).enchant('minecraft:unbreaking', 2),
        'irons_spellbooks:pumpkin_boots',
        'irons_spellbooks:arcane_salvage',
        'marbledsapi:hardened_steel_sheet'
    );
});