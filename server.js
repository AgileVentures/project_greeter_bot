var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: process.env.PROJECT_GREETER_SLACK_BOT_TOKEN,
  retry: 20
}).startRTM()

var greet = "Welcome to LocalSupport! :slightly_smiling_face: To install the codebase see: https://github.com/AgileVentures/LocalSupport/blob/develop/docs/installation.md#installation and our #localsupport-install channel if you need help"

greet += "\n\n\n see https://github.com/AgileVentures/LocalSupport/blob/develop/CONTRIBUTING.md for how to contribute to the project, but feel free to ask questions here too :-)"

controller.on('member_joined_channel', function(bot, message){
  // console.log('member_joined_channel')
  // bot.say({channel: message.channel, text: greet});
  if(message.channel === process.env.PROJECT_SLACK_CHANNEL_ID){
    bot.reply(message, greet);
  }
});


// controller.on('message_received', function(bot, message) {
//   console.log('message_received')
//   console.log(message)
// });





