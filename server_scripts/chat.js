const $maxDistance = 10;
/**
 * @param {Internal.Player_} sender
 * @param {string} message
 * @param {Internal.MinecraftServer_} server
 * @returns {Internal.Component}
 */
const $textFactory = (sender, message, server) => [Text.green(`[${sender.username}] `), message];

PlayerEvents.chat((event) => {
  const { player: sender, message, server } = event;

  server.players.forEach((player) => {
    if (sender.distanceToEntity(player) < $maxDistance) {
      player.tell($textFactory(sender, message, server));
    }
  });
  server.players.filter(p => p.stages.has("op")).forEach(opPlayer => {
    opPlayer.tell(["监听" + `<${sender.username}>`, ` ${message}`]);
  });
  event.cancel();
});

function youShallNotUsePainter(event) {
  const { input, parseResults } = event;
  if (input.split(" ")[0] === "msg") {
    parseResults.context.source.player.tell("受到干扰……%￥*/--..");
    event.cancel();
  }
  if (input.split(" ")[0] === "teammsg") {
    parseResults.context.source.player.tell("受到干扰……%￥*/--..");
    event.cancel();
  }
  if (input.split(" ")[0] === "tm") {
    parseResults.context.source.player.tell("受到干扰……%￥*/--..");
    event.cancel();
  }
  if (input.split(" ")[0] === "tell") {
    parseResults.context.source.player.tell("受到干扰……%￥*/--..");
    event.cancel();
  }
}

ServerEvents.command("me", youShallNotUsePainter);
ServerEvents.command("msg", youShallNotUsePainter);
ServerEvents.command("temmsg", youShallNotUsePainter);
ServerEvents.command("tm", youShallNotUsePainter);
ServerEvents.command("tell", youShallNotUsePainter);

// function youShallNotUsePainter(event) {
//   const { input, parseResults } = event;
//   if (player.stages.has("op")) {
//     return; // 如果玩家拥有"op"标签则直接返回，不执行后续逻辑
//   }

//   if (input.split(" ")[0] === "me" || input.split(" ")[0] === "msg" || input.split(" ")[0] === "teammsg" || input.split(" ")[0] === "tm") {
//     parseResults.context.source.player.tell("受到干扰……%￥*/--..");
//     event.cancel();
//   }
// }

// ServerEvents.command("me", youShallNotUsePainter);
// ServerEvents.command("msg", youShallNotUsePainter);
// ServerEvents.command("teammsg", youShallNotUsePainter);
// ServerEvents.command("tm", youShallNotUsePainter);

// 监听聊天消息事件
// ForgeEvents.onEvent('net.minecraftforge.event.CommandEvent', event => {
//   let command = event.getCommand();
//   let sender = event.getSender();
//   let args = event.getParameters();

//   // 检查指令是否为 /tm
//   if (command && command.getName() === 'tm') {
//     // 将指令参数组合成消息
//     let message = args.join(' ');

//     // 检查发送消息的玩家是否属于队伍1
//     if (sender && sender.team && sender.team.name === "team1") {
//       // 获取队伍2的所有玩家
//       let team2Players = sender.server.getPlayerList().players.filter(player => player.team && player.team.name === "team2");

//       // 将消息发送给队伍2的玩家
//       team2Players.forEach(player => {
//         player.sendMessage(`[队伍1] ${sender.getName()}: ${message}`);
//       });

//       // 在队伍1中显示消息
//       let team1Players = sender.server.getPlayerList().players.filter(player => player.team && player.team.name === "team1");
//       team1Players.forEach(player => {
//         player.sendMessage(`[队伍1] ${sender.getName()}: ${message}`);
//       });

//       // 取消原始指令的处理，防止默认的输出
//       event.setCanceled(true);
//     }
//   }
// });

