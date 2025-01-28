// let $Zombie = Java.loadClass('net.minecraft.world.entity.monster.Zombie');
// let $Player = Java.loadClass('net.minecraft.world.entity.player.Player')
// ForgeEvents.onEvent('net.minecraftforge.event.entity.living.LivingChangeTargetEvent',event=>{
//     global.livingChangeTargetEvent(event)
// })
// /**@param {Internal.LivingChangeTargetEvent} event*/
// global.livingChangeTargetEvent = event =>{
//     if(event.getEntity() instanceof $Zombie && event.getNewTarget() instanceof $Player){
//         event.setCanceled(true)
//     }
// }