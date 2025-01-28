function openGuiii(/**@type {Internal.ServerPlayer} */ player){
    let serverPlayer = player
        serverPlayer.openChestGUI("测试gui", 7,
            gui =>{
                gui.slot(0,0, slot =>{
                    slot.item = Item.of('bedrock')
                    slot.leftClicked = () =>{
                        player.closeMenu();
                    }
                })
            }
        )
}
// Command registration
ServerEvents.commandRegistry(event => {//监听命令注册事件
    const{commands: Commands, arguments: Arguments} = event;
    event.register(
        Commands.literal("gui")
        .requires(src => src.hasPermission(2))
        .executes(ctx =>{
            var player = ctx.source.playerOrException;
            if(player){
                openGuiii(player)
            }
            return 0;
        })
    )
    event.register(
        Commands.literal("inventory")
        .requires(src => src.hasPermission(2))
        .then(Commands.literal('open')
        .then(Commands.argument('player', Arguments.PLAYER.create(event))//等级参数
        .executes(ctx =>{
            var player = ctx.source.playerOrException;
            var /**@type {Internal.Player} */ targetPlayer = Arguments.PLAYER.getResult(ctx, "player");// 获取等级参数
            if(player){
                player.openInventoryGUI(targetPlayer.inventory,targetPlayer.name)
            }
            return 0;
        }))
    ))
})