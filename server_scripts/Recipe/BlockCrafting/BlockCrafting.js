let ClientboundSetEntityMotionPacket = Java.loadClass('net.minecraft.network.protocol.game.ClientboundSetEntityMotionPacket');
// 定义仪式类型和等级
const RITUAL_TYPES = ['fire', 'ice', 'lightning', 'holy', 'ender', 'blood', 'evocation', 'nature'];
const RITUAL_TIERS = [1, 2, 3];
// 仪式配置
const ritualConfigs = {
    fire: {
        color: '§c', // 红色
        particleType: 'minecraft:flame',
        effectId: 'upgrade_orb_fire',
        displayName: '炽焰',
        sound: 'minecraft:block.fire.ambient',
        startSound: 'minecraft:item.firecharge.use',
        processSound: 'minecraft:block.fire.ambient',
        endSound: 'minecraft:entity.blaze.shoot'
    },
    ice: {
        color: '§b', // 淡蓝色
        particleType: 'minecraft:snowflake',
        effectId: 'upgrade_orb_ice',
        displayName: '冰霜',
        sound: 'minecraft:block.glass.break',
        startSound: 'minecraft:block.glass.place',
        processSound: 'minecraft:block.glass.break',
        endSound: 'minecraft:block.glass.fall'
    },
    lightning: {
        color: '§9', // 蓝色
        particleType: 'minecraft:electric_spark',
        effectId: 'upgrade_orb_lightning',
        displayName: '雷霆',
        sound: 'minecraft:entity.lightning_bolt.thunder',
        startSound: 'minecraft:entity.lightning_bolt.thunder',
        processSound: 'minecraft:entity.lightning_bolt.impact',
        endSound: 'minecraft:entity.lightning_bolt.thunder'
    },
    holy: {
        color: '§e', // 黄色
        particleType: 'minecraft:end_rod',
        effectId: 'upgrade_orb_holy',
        displayName: '神圣',
        sound: 'minecraft:block.beacon.ambient',
        startSound: 'minecraft:block.beacon.activate',
        processSound: 'minecraft:block.beacon.ambient',
        endSound: 'minecraft:block.beacon.power_select'
    },
    ender: {
        color: '§5', // 紫色
        particleType: 'minecraft:portal',
        effectId: 'upgrade_orb_ender',
        displayName: '末影',
        sound: 'minecraft:entity.enderman.teleport',
        startSound: 'minecraft:entity.enderman.teleport',
        processSound: 'minecraft:entity.enderman.ambient',
        endSound: 'minecraft:entity.enderman.death'
    },
    blood: {
        color: '§4', // 深红色
        particleType: 'minecraft:damage_indicator',
        effectId: 'upgrade_orb_blood',
        displayName: '猩红',
        sound: 'minecraft:entity.player.hurt',
        startSound: 'minecraft:entity.player.hurt',
        processSound: 'minecraft:block.lava.pop',
        endSound: 'minecraft:entity.player.death'
    },
    evocation: {
        color: '§2', // 深绿色
        particleType: 'minecraft:enchanted_hit',
        effectId: 'upgrade_orb_evocation',
        displayName: '呼魔',
        sound: 'minecraft:entity.evoker.cast_spell',
        startSound: 'minecraft:entity.evoker.prepare_summon',
        processSound: 'minecraft:entity.evoker.ambient',
        endSound: 'minecraft:entity.evoker.cast_spell'
    },
    nature: {
        color: '§a', // 亮绿色
        particleType: 'minecraft:happy_villager',
        effectId: 'upgrade_orb_nature',
        displayName: '自然',
        sound: 'minecraft:block.grass.step',
        startSound: 'minecraft:block.grass.place',
        processSound: 'minecraft:block.grass.step',
        endSound: 'minecraft:block.chorus_flower.grow'
    }
};

// 标签前缀
const TAG_PREFIX = 'kubejs:ritual_';
const START_TAG = tag => `${TAG_PREFIX}start_${tag}`;
const PROCESS_TAG = tag => `${TAG_PREFIX}process_${tag}`;
const END_TAG = tag => `${TAG_PREFIX}end_${tag}`;

// 生成特定类型和等级的仪式标签
const getRitualTag = (type, tier) => `${type}_tier${tier}`;

/**
 * @param {Internal.Level} level
 * @param {Internal.BlockPos$MutableBlockPos} pos
 * @param {Internal.ServerPlayer} player
 */
function Awakening(level, pos, player, type, tier) {
    if (!RITUAL_TYPES.includes(type) || !RITUAL_TIERS.includes(tier)) {
        player.tell('无效的仪式类型或等级');
        return false;
    }

    const config = ritualConfigs[type];
    const ritualTag = getRitualTag(type, tier);

    player.tell(`${config.color}§l开始 ${config.displayName} 途径 序列 ${9-tier+1} 晋升仪式...`);
    player.mainHandItem.count--;
    level.destroyBlock(pos, false);
    level.destroyBlock(pos.offset(2,1,0), false);
    level.destroyBlock(pos.offset(-2,1,0), false);
    level.destroyBlock(pos.offset(0,1,2), false);
    level.destroyBlock(pos.offset(0,1,-2), false);
    level.server.runCommandSilent(`kill @e[type=item,x=${pos.x},y=${pos.y},z=${pos.z},distance=..1]`);

    // 添加仪式开始标签
    player.addTag(START_TAG(ritualTag));

    startRitualProcess(player, type, tier, pos);

    player.tags.remove(START_TAG(ritualTag));

    return false;
}

// /**
//  * @param {Internal.Level} level
//  * @param {Internal.Position} pos
//  * @param {Internal.ServerPlayer} player
// */
// PlayerEvents.tick(event => {
//     let server = Utils.server
//     let player = event.player;
//     // 检查是否有仪式开始标签
//     RITUAL_TYPES.forEach(type => {
//         RITUAL_TIERS.forEach(tier => {
//             let ritualTag = getRitualTag(type, tier);
//             if (player.tags.contains(START_TAG(ritualTag))) {
//                 startRitualProcess(player, type, tier, pos);
//                 player.tags.remove(START_TAG(ritualTag));
//             }
//         });
//     });

//     // 检查是否有仪式结束标签
//     RITUAL_TYPES.forEach(type => {
//         RITUAL_TIERS.forEach(tier => {
//             let ritualTag = getRitualTag(type, tier);
//             if (player.tags.contains(END_TAG(ritualTag))) {
//                 endRitualProcess(player, type, tier);
//                 player.tags.remove(END_TAG(ritualTag));
//                 player.tags.remove(PROCESS_TAG(ritualTag));
//             }
//         });
//     });
    
// });
/**
 * @param {Internal.Level} level
 * @param {Internal.Position} pos
 * @param {Internal.ServerPlayer} player
*/
function startRitualProcess(player, type, tier, centerPos) {
    const ritualTag = getRitualTag(type, tier);
    player.tags.add(PROCESS_TAG(ritualTag));

    const config = ritualConfigs[type];
    const duration = tier === 1 ? 60 : (tier === 2 ? 180 : 300); // 1分钟, 3分钟, 5分钟
    
    let currentStep = 0;

    // 初始化玩家的仪式数据
    player.persistentData.putInt('ritualSuccessCount', 0);
    player.persistentData.putInt('ritualTotalChecks', 0);
    player.persistentData.putString('ritualType', type);
    player.persistentData.putInt('ritualTier', tier);

    let titleText = JSON.stringify({ "text": `${config.color}§l${config.displayName}晋升仪式开始` });
    let subtitleText = JSON.stringify({ "text": `${config.color}序列 ${9-tier+1}` });
    player.server.runCommandSilent(`title ${player.username} title ${titleText}`);
    player.server.runCommandSilent(`title ${player.username} subtitle ${subtitleText}`);

    player.server.tell(`§a§l[公告] ${config.color}§l${player.username}开始了${config.displayName}途径序列${9-tier+1}的晋升仪式！`);

    //player.potionEffects.add('minecraft:slowness', duration * 20, 4);
    player.server.runCommandSilent(`playsound ${config.startSound} record ${player.username} ${player.x} ${player.y} ${player.z} 1 1`);
    
    Utils.server.scheduleRepeatingInTicks(20, callback => {
        if (currentStep >= duration || !player.tags.contains(PROCESS_TAG(ritualTag)) || !player.isAlive()) {
            player.tags.add(END_TAG(ritualTag));
            endRitualProcess(player, type, tier);
            callback.clear()
            return;
        }

        performRitualStep(player, type, tier, currentStep, centerPos);
        
        // 每10秒进行一次判定
        if (currentStep % 10 === 9) {
            let totalChecks = player.persistentData.getInt('ritualTotalChecks') + 1;
            player.persistentData.putInt('ritualTotalChecks', totalChecks);

            let success = Math.random() < calculateSuccessProbability(player, type, tier);
            if (success) {
                let successCount = player.persistentData.getInt('ritualSuccessCount') + 1;
                player.persistentData.putInt('ritualSuccessCount', successCount);
                player.tell(`${config.color}§l第${totalChecks}次判定成功！`);
            } else {
                player.tell(`${config.color}§l第${totalChecks}次判定失败。`);
            }
        }

        if (currentStep % 30 === 9) { // 每30秒进行一次广播
            Utils.server.tell(`§a§l[公告] ${config.color}§l${player.username}正在进行晋升序列${9-tier+1}.....`);
        }
        currentStep++;
    });
}
/**
 * @param {Internal.Position} centerPos
 * @param {Internal.ServerPlayer} player
*/
function performRitualStep(player, type, tier, step, centerPos)  {
    const config = ritualConfigs[type];
    const duration = tier === 1 ? 60 : (tier === 2 ? 180 : 300);

    // 使用 runCommandSilent 生成粒子
    player.server.runCommandSilent(`particle ${config.particleType} ${player.x} ${player.y + 1} ${player.z} 0.5 0.5 0.5 0.1 20`);

    // 每5秒播放一次过程音效
    if (step % 2 === 0) {
        player.server.runCommandSilent(`playsound ${config.processSound} record ${player.username} ${player.x} ${player.y} ${player.z} 0.5 1`);
    }

    // 每秒更新进度条
    let progress = Math.floor((step / duration) * 100);
    let progressBar = createProgressBar(progress, config.color);
    let actionbarText = JSON.stringify({ "text": `${config.color}${config.displayName}晋升仪式进度: ${progressBar} ${progress}%` });
    player.server.runCommandSilent(`title ${player.username} actionbar ${actionbarText}`);

    // 检查玩家是否在范围内
    let distance = player.position().distanceTo(centerPos);
    if (distance > 10) {
        // 计算方向向量
        let dx = centerPos.x - player.x;
        let dy = centerPos.y - player.y;
        let dz = centerPos.z - player.z;
        let length = Math.sqrt(dx*dx + dy*dy + dz*dz);

        // 归一化并设置玩家运动
        player.motionX = (dx / length) * 0.8;
        player.motionY = (dy / length) * 0.8;
        player.motionZ = (dz / length) * 0.8;

        if (player.isPlayer()) {
            player.connection.send(new ClientboundSetEntityMotionPacket(player));
        }
    }

    // 创建链子效果
    let particleCount = 100;
    for (let i = 0; i < particleCount; i++) {
        let t = i / particleCount;
        let x = centerPos.x + (player.x - centerPos.x) * t;
        let y = centerPos.y + (player.y - 1 - centerPos.y) * t + 1; // +1 to raise the chain a bit
        let z = centerPos.z + (player.z - centerPos.z) * t;
        player.server.runCommandSilent(`particle minecraft:end_rod ${x + 0.5} ${y + 0.5} ${z + 0.5} 0 0 0 0 1`);
    }

    // 祭坛呼吸效果
    // 改进的祭坛呼吸效果
    let breathCycle = (step % 60) / 60; // 0 到 1 的呼吸周期
    let breathRadius = 2.5 + Math.sin(breathCycle * 3.1415926 * 2) * 4; // 2.5 到 5 的呼吸效果
    // 创建多个圆环以增加密度
    for (let ring = 0; ring < 3; ring++) {
        let ringRadius = breathRadius - ring * 0.5; // 每个圆环略小一些
        for (let i = 0; i < 100; i++) { // 增加粒子数量
            let angle = 2 * 3.1415926 * i / 30;
            let x = centerPos.x + Math.cos(angle) * ringRadius;
            let z = centerPos.z + Math.sin(angle) * ringRadius;
            let y = centerPos.y + ring * 0.5; // 每个圆环略高一些
            // 使用仪式特定的粒子类型
            player.server.runCommandSilent(`particle ${config.particleType} ${x + 0.5} ${y + 0.5} ${z + 0.5} 0 0 0 0 1`);
        }
    }

    // 额外的垂直粒子柱
    for (let i = 0; i < 30; i++) {
        let angle = 2 * 3.1415926 * i / 5;
        let x = centerPos.x + Math.cos(angle) * breathRadius;
        let z = centerPos.z + Math.sin(angle) * breathRadius;
        for (let y = centerPos.y; y < centerPos.y + breathRadius; y += 0.2) {
            player.server.runCommandSilent(`particle ${config.particleType} ${x + 0.5} ${y + 0.5} ${z + 0.5} 0 0 0 0 1`);
        }
    }
    // 随机爆炸效果
    if (Math.random() < 0.5) { // 5% 概率触发
        let randomAngle = Math.random() * 2 * 3.1315926;
        let randomRadius = Math.random() * 5;
        let explosionX = centerPos.x + Math.cos(randomAngle) * randomRadius + 0.5;
        let explosionZ = centerPos.z + Math.sin(randomAngle) * randomRadius + 0.5;
        let explosionY = centerPos.y + Math.random() * 3 + 1 + 0.5;
        player.server.runCommandSilent(`particle minecraft:explosion ${explosionX} ${explosionY} ${explosionZ} 0 0 0 0 1`);
        player.server.runCommandSilent(`playsound ${config.endSound} record ${player.username} ${player.x} ${player.y} ${player.z} 1 1`);
        player.server.runCommandSilent(`playsound minecraft:entity.generic.explode record ${player.username} ${explosionX} ${explosionY} ${explosionZ} 0.5 1`);
    }
}
/**
 * @param {Internal.ServerPlayer} player
*/
function endRitualProcess(player, type, tier) {
    if(!player.isAlive()) return
    
    const ritualTag = getRitualTag(type, tier);
    player.tags.remove(END_TAG(ritualTag));
    player.tags.remove(PROCESS_TAG(ritualTag));

    let successCount = player.persistentData.getInt('ritualSuccessCount');
    let totalChecks = player.persistentData.getInt('ritualTotalChecks');
    let config = ritualConfigs[type];
    let requiredSuccessRate = 0.8;

    let successRate = successCount / totalChecks;


    if (successRate >= requiredSuccessRate) {
        player.tell(`${config.color}§l恭喜！${config.displayName}途径序列${9-tier+1}晋升成功！`);
        let titleText = JSON.stringify({ "text": `${config.color}§l晋升成功！` });
        let subtitleText = JSON.stringify({ "text": `${config.color}${config.displayName} 序列 ${9-tier+1}` });
        player.server.runCommandSilent(`title ${player.username} title ${titleText}`);
        player.server.runCommandSilent(`title ${player.username} subtitle ${subtitleText}`);
        // 播放成功音效
        player.server.runCommandSilent(`playsound ${config.endSound} record ${player.username} ${player.x} ${player.y} ${player.z} 1 1`);
        // 给予玩家对应的法术书
        player.give(Item.of(`kubejs:${type}_tier${tier}_spellbook`));
        player.tags.add(`${type}_tier${tier}`)
    } else {
        player.tell(`${config.color}§l很遗憾，${config.displayName}途径序列${9-tier+1}晋升失败。`);
        let titleText = JSON.stringify({ "text": `${config.color}§l晋升失败` });
        let subtitleText = JSON.stringify({ "text": `${config.color}${config.displayName} 序列 ${9-tier+1}` });
        player.server.runCommandSilent(`title ${player.username} title ${titleText}`);
        player.server.runCommandSilent(`title ${player.username} subtitle ${subtitleText}`);
        // 播放失败音效
        player.server.runCommandSilent(`playsound minecraft:entity.wither.death record ${player.username} ${player.x} ${player.y} ${player.z} 1 1`);
        if(tier != 1)  player.give(Item.of(`kubejs:${type}_tier${tier-1}_spellbook`));
    }
    player.potionEffects.clear()
}
function createProgressBar(percentage, color) {
    const totalBars = 20;
    const filledBars = Math.round(percentage / 100 * totalBars);
    return `${color}` + '|'.repeat(filledBars) + '§7' + '|'.repeat(totalBars - filledBars);
}

let $RegistriesInfo = Java.loadClass('dev.latvian.mods.kubejs.registry.RegistryInfo')
/**
 * @param {Internal.Level} level
 * @param {Internal.Position} pos
 * @param {Internal.ServerPlayer} player
*/
function calculateSuccessProbability(player, type, tier) {
    let baseProbability = tier === 1 ? 0.8 : 0.5;
    let additionalProbability = 0;
    let effectList = [
        `kubejs:upgrade_orb`,
        `kubejs:upgrade_orb_${type}`,
        'kubejs:upgrade_orb_protection',
        'kubejs:upgrade_orb_cooldown'
    ]
    effectList.forEach(effect=>{
        if(player.potionEffects.isActive($RegistriesInfo.MOB_EFFECT.getValue(effect))){
            additionalProbability += 0.1
        }
    })

    return Math.min(baseProbability + additionalProbability, 1);
}
/**
 * @param {Internal.Level} level
 * @param {Internal.Position} pos
 * @param {Internal.ServerPlayer} player
*/


// 为每种类型和等级注册多方块结构
RITUAL_TYPES.forEach(type => {
    RITUAL_TIERS.forEach(tier => {
        BlockCrafting.addMultiblockStructure(MultiblockStructureFileBuilder.create(`tier${tier}_${type}`)
            .file(`kubejs/assets/kubejs/ponder/tier${tier}_${type}.nbt`)
            .center('supplementaries:pedestal')
            .centerBlockCondition(nbt => {
                let item = nbt.get('Items')[0]
                if (item != undefined) {
                    let id = item.getString("id")
                    return id == (tier === 1 ? `irons_spellbooks:${type}_upgrade_orb` : `kubejs:${type}_tier${tier-1}_spellbook`);
                }
                return false;
            })
            .craftingItem(`irons_spellbooks:${type}_upgrade_orb`)
            .previewAction((level, pos, player) => {
                return Awakening(level, pos, player, type, tier);
            })
            .build()
        );
    });
});
