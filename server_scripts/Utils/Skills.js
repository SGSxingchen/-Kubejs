let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
let Pose = Java.loadClass('net.minecraft.world.entity.Pose')
let ClientboundSetEntityDataPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityDataPacket')
var secTick = 0
//快速移动
function generateUUID() {
    // 生成一个随机的UUID v4
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
PlayerEvents.tick(event=>{
    // let /**@type {Internal.ServerPlayer}*/ player = event.player
    const {player} = event;
    const server = Utils.server;
    const {x,y,z,pitch,yaw,blockX,blockY,blockZ} = player
    const mainHandItem = player.mainHandItem
    //玩家计数器  && 技能CD && 初始化
    {
        if(!player.persistentData.contains("skillTimer")){
            player.persistentData.skillTimer = 0
        }
        if(!player.persistentData.contains("coodownJump")){
            player.persistentData.coodownJump = 0
        }
        player.persistentData.skillTimer++;
        if(player.persistentData.skillTimer >= 20){
            player.persistentData.coodownJump--;
            player.persistentData.skillTimer = 0
        }
    }
    //强制趴下
    {
        if(player.stages.has("forceSwimming")){
            player.setForcedPose('')
        }
        else{
            player.setForcedPose('')
        }
    }
    //持枪快速移动
    {
        if(mainHandItem.id.includes("tacz:modern_kinetic_gun") && !player.stages.has("hasGun")){
            player.stages.add("hasGun")
            
        }
        if(!mainHandItem.id.includes("tacz:modern_kinetic_gun") && player.stages.has("hasGun")){
            player.stages.remove("hasGun")
        }
    }
    //贴墙跳
    {
        let fractionalX = x % 1;
        let fractionalZ = z % 1;
        let isNearWall = false;
        // 计算玩家面前的方块位置
        let frontBlockPos;
        {
        if (yaw < 45 && yaw> -45) {
            // 南
            frontBlockPos = [blockX,blockY,blockZ+1]
            if(fractionalZ < 0){
                if(fractionalZ < -0.30 && fractionalZ > -0.32) isNearWall = true
            }
            else{
                if(fractionalZ > 0.68 && fractionalZ < 0.70) isNearWall = true
            }
            
        } else if (yaw >= 45 && yaw < 135) {
            // 西
            frontBlockPos = [blockX-1,blockY,blockZ]
            
            if(fractionalX < 0){
                if(fractionalX > -0.70 && fractionalX < -0.68) isNearWall = true
            }
            else{
                if(fractionalX < 0.32 && fractionalX > 0.30) isNearWall = true
            }
        } else if (yaw >= -135 && yaw < -45) {
            // 东
            frontBlockPos = [blockX+1,blockY,blockZ]
            if(fractionalX > 0){
                if(fractionalX < 0.70 && fractionalX > 0.68) isNearWall = true
            }
            else{
                if(fractionalX > -0.32 && fractionalX < -0.30) isNearWall = true
            }
            
        } else {
            // 北
            frontBlockPos = [blockX,blockY,blockZ-1]
            if(fractionalZ > 0){
                if(fractionalZ > 0.30 && fractionalZ < 0.32) isNearWall = true
            }
            else{
                if(fractionalZ < -0.68 && fractionalZ > -0.70) isNearWall = true
            }
        }
        }
        if(isNearWall){
            player.stages.add("isNearWall")
        }
        if(!isNearWall && !player.stages.has("sneak")){
            player.stages.remove("isNearWall")
        }
        // 获取面前的方块
        let frontBlock = player.level.getBlock(frontBlockPos[0],frontBlockPos[1],frontBlockPos[2]);
        // 检查玩家是否紧贴面前的墙壁
        if (frontBlock && player.stages.has("isNearWall")) {
            if(!player.onGround()){
                //按下蹲下
                if(player.isCrouching() && !player.stages.has("sneak")){
                    if(player.persistentData.coodownJump <= 0){
                        player.stages.add("sneak")
                    }
                }
                if(player.isCrouching() && player.stages.has("sneak")){
                    player.motionY = -0.01;
                    player.motionX = 0;
                    player.motionZ = 0;
                    if (player.isPlayer()) {
                        player.connection.send(new ClientboundSetEntityMotionPacket(player));
                    }
                }
                //松开一瞬
                else if(!player.isCrouching() && player.stages.has("sneak")){
                    player.stages.remove("sneak")
                    if(player.persistentData.coodownJump <= 0){
                        player.tell(Text.of("[CV] 你释放了蹬墙跳").color(Color.YELLOW))
                        let move = player.getLookAngle().scale(1.4);
                        player.motionY += 0.15;
                        player.addDeltaMovement(move);
                        if (player.isPlayer()) {
                            player.connection.send(new ClientboundSetEntityMotionPacket(player));
                        }
                        //进入CD
                        player.persistentData.coodownJump = 3;
                    }
                    else{
                        player.tell(Text.of(`[CV] 技能还在冷却中，剩余时间${player.persistentData.coodownJump}秒`).color(Color.AQUA))
                    }
                }
            }
        }
    }
    //猫扑 + 滑铲
    {  
        //已经按下
        if(player.stages.has("catJump")){
            //松开 进行一定延迟
            if(!player.isCrouching()){
                player.stages.add("catJumpReady")
                server.scheduleInTicks(10,e=>{
                    player.stages.remove("catJump")
                    player.stages.remove("catJumpReady")
                })
            }
            //快速再次按下
            else if(player.stages.has("catJumpReady") && player.isCrouching()){
                if(!player.stages.has("catJumpCoolDown")){
                    //猫扑
                    if(!player.onGround() && player.isSprinting()){
                        // server.tell("猫扑")
                        var vec = getVectorFromYaw(yaw,1.5)
                        player.addDeltaMovement(new Vec3d(vec[0],0.2,vec[2]))
                        player.stages.add("forceSwimming")
                        player.connection.send(new ClientboundSetEntityMotionPacket(player));
                        player.stages.remove("catJump")
                        player.stages.remove("catJumpReady")
                        player.tell(Text.of("[CV] 你释放了猫扑").color(Color.YELLOW))
                        player.stages.add("catJumpCoolDown")
                        server.scheduleInTicks(20,e=>{
                            player.stages.remove("forceSwimming")
                        })
                        server.scheduleInTicks(100,e=>{
                            player.stages.remove("catJumpCoolDown")
                        })
                    }
                }
                else{
                    player.tell(Text.of(`[CV] 技能还在冷却中`).color(Color.AQUA))
                }

                if(!player.stages.has("sildingCoolDown")){
                    //滑铲
                    if(player.onGround() && player.isSprinting()){
                        // server.tell("滑铲")
                        var vec = getVectorFromYaw(yaw,2)
                        player.addDeltaMovement(new Vec3d(vec[0],vec[1],vec[2]))
                        player.stages.add("forceSwimming")
                        player.connection.send(new ClientboundSetEntityMotionPacket(player));
                        player.stages.remove("catJump")
                        player.stages.remove("catJumpReady")
                        player.tell(Text.of("[CV] 你释放了滑铲").color(Color.YELLOW))
                        player.stages.add("sildingCoolDown")
                        server.scheduleInTicks(20,e=>{
                            player.stages.remove("forceSwimming")
                        })
                        server.scheduleInTicks(60,e=>{
                            player.stages.remove("sildingCoolDown")
                        })
                    }
                }
                else{
                    player.tell(Text.of(`[CV] 技能还在冷却中`).color(Color.AQUA))
                }
                
            }
        }
        else if(!player.stages.has("catJump")){
            //潜行贴地
            if(player.isCrouching() && player.onGround()){
                // server.tell("准备状态")
                player.stages.add("catJump")
            }
            //潜行不贴地
            else if(player.isCrouching() && player.onGround()){

            }
        }
    }
})

function getVectorFromYaw(yaw, length) {
    const yawRad = yaw * (3.1415926 / 180);
    const x = -Math.sin(yawRad) * length;
    const y = 0;
    const z = Math.cos(yawRad) * length;
    return [ x, y, z ];
}
function getVectorFromRotation(pitch, yaw, length) {
    const yawRad = yaw * (3.1415926 / 180);
    const pitchRad = pitch * (Math.PI / 180);
    const x = -Math.sin(yawRad) * Math.cos(pitchRad) * length;
    const y = -Math.sin(pitchRad) * length;
    const z = Math.cos(yawRad) * Math.cos(pitchRad) * length;
    return [ x, y, z ];
}