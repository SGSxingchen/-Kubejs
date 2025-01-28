// 共享的随机物品表
const sharedLootTable = [
    { item: Item.of('minecraft:bread'), chance: 0.3, count: [1, 8] },
    { item: Item.of('lightmanscurrency:coin_gold'), chance: 0.3, count: [6, 12] },
    { item: Item.of('lightmanscurrency:coin_iron'), chance: 0.4, count: [8, 20] },
    { item: Item.of('tacz:ammo', '{AmmoId:"tacz:9mm"}'), chance: 0.2, count: [5, 12] },
    { item: Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:0b}'), chance: 0.05, count: [1, 1] },
    { item: Item.of('zombie_extreme:bandage'), chance: 0.2, count: [1, 3] }
];

// 保底物品
const guaranteedLoot = { item: 'minecraft:bread', count: [1, 4] };

// 可搜刮的方块列表
const scavengeableBlocks = [
    'horror_element_mod:colonial_marine_body',
    'horror_element_mod:scientist_body',
    'horror_element_mod:self_terminated_body',
    'horror_element_mod:sliced_body',
    'horror_element_mod:rotten_body'
];

/**
 * @param {Internal.Player} player
 * @param {Internal.Block} block
 * @param {Internal.ItemStack} item
 */
function scavenge(player, block) {
    
    let itemsFound = false;
    let itemsList = [];

    // 尝试从共享随机表中获取物品
    sharedLootTable.forEach(entry => {
        if (Math.random() < entry.chance) {
            const count = Math.floor(Math.random() * (entry.count[1] - entry.count[0] + 1)) + entry.count[0];
            const item = entry.item;
            player.give(Item.of(item, count));
            itemsFound = true;
            itemsList.push({ item: item, count: count });
        }
    });

    // 如果没有找到任何物品，给予保底物品
    if (!itemsFound) {
        const count = guaranteedLoot.count[0]; // 保底物品只给最小数量
        player.give(Item.of(guaranteedLoot.item, count));
        itemsList.push({ item: guaranteedLoot.item, count: count });
    }

    // 播放音效
    player.runCommandSilent(`playsound minecraft:entity.player.levelup player @s ~ ~ ~ 1 1`);

    // 生成粒子效果
    player.runCommandSilent(`particle minecraft:happy_villager ~ ~1 ~ 0.5 0.5 0.5 0 20`);

    // 发送消息
    if (itemsList.length > 0) {
        let message = Text.of("你找到了: ");
        itemsList.forEach((found, index) => {
            let itemName = Item.of(found.item).displayName;
            message = message.append(Text.of(`${found.count}x `).append(itemName));
            if (index < itemsList.length - 1) {
                message = message.append(Text.of(", "));
            }
        });
        player.tell(message.green());
    } else {
        player.tell(Text.of("你什么都没找到").yellow());
    }

    // 移除方块
    block.set('minecraft:air');
}

const cooldowns = new Map();
const COOLDOWN_TIME = 5000; // 5秒冷却时间

function isOnCooldown(player) {
    const lastUseTime = cooldowns.get(player.username);
    if (lastUseTime && Date.now() - lastUseTime < COOLDOWN_TIME) {
        return true;
    }
    cooldowns.set(player.username, Date.now());
    return false;
}

BlockEvents.rightClicked(event => {
    const { player, block, hand } = event;

    if (hand !== 'MAIN_HAND') return;

    if (scavengeableBlocks.includes(block.id)) {
        if (isOnCooldown(player)) {
            player.tell(Text.of("你需要等待一会儿才能再次搜刮").red());
            event.cancel();
            return;
        }
        scavenge(player, block);
        event.cancel();
    }
});
