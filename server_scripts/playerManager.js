const SPELL_TYPES = ['fire', 'ice', 'lightning', 'holy', 'ender', 'blood', 'evocation', 'nature'];
PlayerEvents.loggedIn(event=>{
    const {player} = event
    updataPlayerAttrbution(player)
})
PlayerEvents.inventoryChanged(event=>{
    const {player} = event
    updataPlayerAttrbution(player)
})
PlayerEvents.respawned(event=>{
    const {player} = event
    updataPlayerAttrbution(player)
})
ItemEvents.foodEaten('golden_apple',event=>{
    const {player} = event
    if(player.persistentData.contains(`max_health`)){
        let health = player.persistentData.getInt(`max_health`)
        if(health >= 100 ) return
        player.persistentData.putInt(`max_health`,health + 2);
    }
    updataPlayerAttrbution(player)
})
//生物召唤强度补全
PlayerEvents.spellOnCast(event=>{
    if(event.getSpellId() == 'irons_spellbooks:summon_polar_bear'){
        event.setSpellLevel(event.getSpellLevel() + 10)
    }

    if(event.getSpellId() == 'irons_spellbooks:summon_vex'){
        event.setSpellLevel(event.getSpellLevel() + 3)
    }

    if(event.getSpellId() == 'irons_spellbooks:raise_dead'){
        event.setSpellLevel(event.getSpellLevel() + 4)
    }
})
EntityEvents.death('player',event=>{
    const {player} = event
    player.addTag("death")
    let head = Item.of('player_head',1,`{SkullOwner:"${player.username}"}`)
    head.getOrCreateTag()
    head.nbt.merge({
        display: {
            Lore: [
              `{"italic":false,"color":"white","extra":[{"text":""},{"bold":false,"text":"来源：${player.username}"}],"text":""}`
            ]
          }
    })
    player.block.popItem(head)
    player.persistentData.putInt(`max_health`,60);
})
ServerEvents.recipes((event)=>{
    event.shapeless('minecraft:player_head','minecraft:nether_star')
    .modifyResult((/**@type {Internal.ModifyRecipeCraftingGrid}*/grid,/**@type {Internal.ItemStack} */item) => {
		let netherStar = grid.find("minecraft:nether_star")
        let playerHead = Item.of("minecraft:player_head")
        let nbt = netherStar.nbt
        playerHead.getOrCreateTag()
        playerHead.nbt.merge(nbt)
		playerHead.nbt = nbt
        return playerHead
	})
    event.shapeless('minecraft:nether_star','minecraft:player_head')
    .modifyResult((/**@type {Internal.ModifyRecipeCraftingGrid}*/grid,/**@type {Internal.ItemStack} */item) => {
		let playerHead = grid.find("minecraft:player_head")
        let netherStar = Item.of('nether_star')
        let nbt = playerHead.nbt
        let playerName = nbt.getCompound('SkullOwner').getString('Name')
		netherStar.nbt = nbt
        netherStar.getOrCreateTag()
        netherStar.nbt.merge(nbt)
        netherStar.nbt.merge({
            display: {
                Lore: [
                  `{"italic":false,"color":"white","extra":[{"text":""},{"bold":false,"text":"来源：${playerName}"}],"text":""}`
                ]
              }
        })
        return netherStar
	})

})
/**
 * @param {Internal.ServerPlayer} player
*/
function updataPlayerAttrbution(player){
    let server = Utils.server

    //基础属性修正
    server.runCommandSilent(`attribute ${player.username} irons_spellbooks:spell_resist base set 0.5`)
    server.runCommandSilent(`attribute ${player.username} irons_spellbooks:mana_regen base set 0.1`)
    server.runCommandSilent(`attribute ${player.username} irons_spellbooks:max_mana base set 10`)
    server.runCommandSilent(`attribute ${player.username} irons_spellbooks:summon_damage base set 1.5`)

    //生命值修正
    if(!player.persistentData.contains(`max_health`)){
        server.runCommandSilent(`attribute ${player.username} minecraft:generic.max_health base set 60`)
        player.persistentData.putInt(`max_health`,60)
    }
    else{
        server.runCommandSilent(`attribute ${player.username} minecraft:generic.max_health base set ${player.persistentData.getInt(`max_health`)}`)
    }

    //法术强度修正
    SPELL_TYPES.forEach(type => {
        if(!player.persistentData.contains(`${type}_spell_power`)){
            server.runCommandSilent(`attribute ${player.username} irons_spellbooks:${type}_spell_power base set 0.8`)
        }
        if(!player.persistentData.contains(`${type}_magic_resist`)){
            server.runCommandSilent(`attribute ${player.username} irons_spellbooks:${type}_magic_resist base set 1.25`)
        }
    })
}