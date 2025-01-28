var secTick = 0
function between(x, num1, num2) {
    return (x <= Math.max(num1, num2) && x >= Math.min(num1, num2));
}

function inArea(p,point1,point2) {//判断玩家是否在区域内的函数，二维
    return (
        between(p.x, point1[0], point2[0]) &&
        // between(p.y, point1[1], point2[1]) && 
        between(p.z, point1[2], point2[2])
    )
}

function inArea3D(p,point1,point2) {//判断玩家是否在区域内的函数，三维
    return (
        between(p.x, point1[0], point2[0]) &&
        between(p.y, point1[1], point2[1]) &&
        between(p.z, point1[2], point2[2])
    )
}

function deviation(x,p1,p2,d) {//偏移函数
    let midp = (p1+p2)/2
    if (x<midp) {
        return x-d
    }else if (x >= midp){
        return x+d
    }
}

function isMob(name){
    for(let listType of banEntityModList){
        if(name.includes(listType)){
            return true
        }
    }
    for(let listType of banEntityList){
        if(name.includes(listType)){
            return true;
        }
    }
    return false;
}
let areaList = [
    [[-729,9,1252],[-1017,79,1217]]
];

function entityInSafeArea(entity){
    for(let area of areaList){
        if(inArea(entity, area[0], area[1])){
            return true;
        }
    }
    return false;
}

function entityInSafeArea3D(entity){
    for(let area of areaList){
        if(inArea3D(entity, area[0], area[1])){
            return true;
        }
    }
    return false;
}

let banEntityModList = [
    "born_in_chaos_v1",
    "zombie_extreme"
]
let banEntityList = [
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:enderman",
    "minecraft:spider",
    "minecraft:creeper",
    "minecraft:witch",
    "minecraft:zombie_villager"
]
EntityEvents.spawned(event => {
    let {entity} = event;
    let entityType = entity.type;
    let server = Utils.server;
    //怪物补强
    // if (isMob(entityType)) {
    //     let health = entity.nbt.Health;
    //     let tags = entity.tags
    //     tags.add("Monster")
    //     entity.mergeNbt({
    //         Health: health * 2.5,
    //         ActiveEffects: [
    //             {
    //                 Ambient: 0,
    //                 Amplifier: 0,
    //                 CurativeItems: [
    //                     {
    //                         Count: 1,
    //                         id: "minecraft:milk_bucket"
    //                     }
    //                 ],
    //                 Duration: -1,
    //                 Id: 1,
    //                 ShowIcon: false,
    //                 ShowParticles: false,
    //                 "forge:id": "minecraft:speed"
    //             }
    //         ],
    //         Tags: tags,
    //         Attributes: [
    //             {
    //                 Name: "minecraft:generic.max_health",
    //                 Base: health * 1.2
    //             }
    //         ]
    //     });
    // }
    //禁止怪物生成
    //禁止安全区
    if(!entityInSafeArea(entity)){
        for(let listType of banEntityModList){
            if(entityType.includes(listType)){
                event.cancel()
            }
        }
        for(let listType of banEntityList){
            if(entityType.includes(listType)){
                event.cancel()
            }
        }
    }
});
