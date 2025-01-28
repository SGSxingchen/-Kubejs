let $NearestAttackableTargetGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal")
let $Monster = Java.loadClass('net.minecraft.world.entity.monster.Monster')
let $Player = Java.loadClass('net.minecraft.world.entity.player.Player')
let $LivingEntity = Java.loadClass('net.minecraft.world.entity.LivingEntity');
let $Zombie = Java.loadClass('net.minecraft.world.entity.monster.Zombie');
EntityEvents.spawned('irons_spellbooks:summoned_polar_bear',event=>{
    let {entity} = event;
    let /**@type {Internal.PolarBear}*/ polarBear = entity
    polarBear.targetSelector.addGoal(3,
        new $NearestAttackableTargetGoal(polarBear,$Monster,10,true,false,null)
    )
})

EntityEvents.spawned('irons_spellbooks:summoned_skeleton',event=>{
    let {entity} = event;
    let /**@type {Internal.Skeleton}*/ skeleton = entity
    skeleton.targetSelector.addGoal(3,
        new $NearestAttackableTargetGoal(skeleton,$Monster,10,true,false,null)
    )
})

EntityEvents.spawned('irons_spellbooks:summoned_zombie',event=>{
    let {entity} = event;
    let /**@type {Internal.Zombie}*/ zombie = entity
    zombie.targetSelector.addGoal(3,
        new $NearestAttackableTargetGoal(zombie,$Monster,10,true,false,null)
    )
})

EntityEvents.spawned('irons_spellbooks:summoned_vex',event=>{
    let {entity} = event;
    let /**@type {Internal.Vex}*/ vex = entity
    vex.targetSelector.addGoal(3,
        new $NearestAttackableTargetGoal(vex,$Monster,10,true,false,null)
    )
})
