// // 实体掉落物修改配置数组
// const entityLootTable = [
//     {
//       entities: ['minecraft:zombie', 'minecraft:husk', 'born_in_chaos_v1:decaying_zombie'],
//       loot: [
//         { item: 'minecraft:iron_ingot', chance: 10 },
//         { item: 'minecraft:gold_nugget', count: 2, chance: 15 },
//         { item: 'minecraft:rotten_flesh', remove: true }
//       ]
//     },
//     {
//       entities: ['zombie_extreme:infected', 'zombie_extreme:run', 'zombie_extreme:infected_police'],
//       loot: [
//         { item: 'minecraft:emerald', chance: 5 },
//         { item: 'minecraft:diamond', chance: 1 },
//         { item: 'minecraft:bone', chance: 50, count: '1-3' }
//       ]
//     },
//     // 可以继续添加更多实体的配置...
//   ]
  
//   // 应用实体掉落物修改的函数
//   function applyEntityLootTable() {
//     LootJS.modifiers((event) => {
//       entityLootTable.forEach(config => {
//         config.entities.forEach(entityType => {
//           let modifier = event.addEntityLootModifier(entityType)
  
//           // 首先移除所有原有的掉落物
//           modifier.clearLoot()
  
//           config.loot.forEach(loot => {
//             if (loot.remove) {
//               // 如果指定了remove，我们不需要做任何事，因为已经清除了所有掉落物
//               return
//             }
  
//             let item = Item.of(loot.item)
  
//             if (loot.count) {
//               if (typeof loot.count === 'string' && loot.count.includes('-')) {
//                 let [min, max] = loot.count.split('-').map(Number)
//                 item = item.withCount([min, max])
//               } else {
//                 item = item.withCount(loot.count)
//               }
//             }
  
//             // 设置掉落概率
//             let chance = loot.chance !== undefined ? loot.chance : 20 // 默认 20% 概率
//             item = item.withChance(chance)
  
//             modifier.addLoot(item)
//           })
//         })
//       })
//     })
//   }
  
//   // 调用函数来应用修改
//   applyEntityLootTable()
  