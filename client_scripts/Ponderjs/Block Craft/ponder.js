/**
 * @param {Internal.PonderRegistryEventJS} event
 * @param {Internal.Ingredient_} item
 * @param {string} id
 * @param {string} name
 * @param {number} height
*/
function createScene(event, item, id, name, height){
    event.create(item)
    .scene(
        `kubejs:`+id+`_ponder`,
        name,
        `kubejs:`+id+`_ponder`,
        (scene,utils)=>{
            scene.rotateCameraY(180)
            scene.configureBasePlate(
                0,0,7
            )
            scene.addKeyframe()
            scene.idle(20)
            scene.showBasePlate()
            scene.addKeyframe()
            scene.idle(20)
            //显示结构
            for(let i = 1; i <= height; i++){
                scene.world.showSection(
                    [
                        0,i,0,
                        6,i,6
                    ],
                    Direction.DOWN
                )
                scene.addKeyframe()
                scene.idle(20)
            }
            scene.rotateCameraY(+70)
            scene.text(120,"序列九祭坛应放入法球\n其余时候放入法术书\n放错导致开启错误的序列祭坛概不负责\n最后用法球右键基座",[3,1,2])
            scene.addKeyframe()
            scene.idle(40)

            scene.overlay.showOutline('red',{},[0,1,0,6,height-1,6],80)
            scene.rotateCameraY(-70)
            scene.addKeyframe()
            scene.idle(40)
            
            
            scene.showControls(40,[3,1,3],`left`)
            .rightClick()
            .withItem(item)
            scene.addKeyframe()
            scene.idle(40)
            
        }
    )
}
Ponder.registry((event)=>{
    for(let i = 1 ; i <= 3 ; i++){
        if(i == 1){
            createScene(event,`irons_spellbooks:holy_upgrade_orb`,`tier${i}_holy`,`神圣祭坛-序列九`,3);
            createScene(event,`irons_spellbooks:fire_upgrade_orb`,`tier${i}_fire`,`炽焰祭坛-序列九`,3);
            createScene(event,`irons_spellbooks:nature_upgrade_orb`,`tier${i}_nature`,`自然祭坛-序列九`,3);
            createScene(event,`irons_spellbooks:ice_upgrade_orb`,`tier${i}_ice`,`冰霜祭坛-序列九`,3);
            createScene(event,`irons_spellbooks:lightning_upgrade_orb`,`tier${i}_lightning`,`雷霆祭坛-序列九`,3);
            createScene(event,`irons_spellbooks:blood_upgrade_orb`,`tier${i}_blood`,`猩红祭坛-序列九`,3);
            createScene(event,`irons_spellbooks:evocation_upgrade_orb`,`tier${i}_evocation`,`呼魔祭坛-序列九`,3);
            createScene(event,`irons_spellbooks:ender_upgrade_orb`,`tier${i}_ender`,`末影祭坛-序列九`,3);
        }
        if(i == 2){
            createScene(event,`irons_spellbooks:holy_upgrade_orb`,`tier${i}_holy`,`神圣祭坛-序列八`,3);
            createScene(event,`irons_spellbooks:fire_upgrade_orb`,`tier${i}_fire`,`炽焰祭坛-序列八`,3);
            createScene(event,`irons_spellbooks:nature_upgrade_orb`,`tier${i}_nature`,`自然祭坛-序列八`,3);
            createScene(event,`irons_spellbooks:ice_upgrade_orb`,`tier${i}_ice`,`冰霜祭坛-序列八`,4);
            createScene(event,`irons_spellbooks:lightning_upgrade_orb`,`tier${i}_lightning`,`雷霆祭坛-序列八`,3);
            createScene(event,`irons_spellbooks:blood_upgrade_orb`,`tier${i}_blood`,`猩红祭坛-序列八`,3);
            createScene(event,`irons_spellbooks:evocation_upgrade_orb`,`tier${i}_evocation`,`呼魔祭坛-序列八`,3);
            createScene(event,`irons_spellbooks:ender_upgrade_orb`,`tier${i}_ender`,`末影祭坛-序列八`,3);
        }
        if(i == 3){
            createScene(event,`irons_spellbooks:holy_upgrade_orb`,`tier${i}_holy`,`神圣祭坛-序列七`,5);
            createScene(event,`irons_spellbooks:fire_upgrade_orb`,`tier${i}_fire`,`炽焰祭坛-序列七`,4);
            createScene(event,`irons_spellbooks:nature_upgrade_orb`,`tier${i}_nature`,`自然祭坛-序列七`,10);
            createScene(event,`irons_spellbooks:ice_upgrade_orb`,`tier${i}_ice`,`冰霜祭坛-序列七`,9);
            createScene(event,`irons_spellbooks:lightning_upgrade_orb`,`tier${i}_lightning`,`雷霆祭坛-序列七`,6);
            createScene(event,`irons_spellbooks:blood_upgrade_orb`,`tier${i}_blood`,`猩红祭坛-序列七`,6);
            createScene(event,`irons_spellbooks:evocation_upgrade_orb`,`tier${i}_evocation`,`呼魔祭坛-序列七`,5);
            createScene(event,`irons_spellbooks:ender_upgrade_orb`,`tier${i}_ender`,`末影祭坛-序列七`,6);
        }
    }
    
})