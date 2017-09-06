var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: process.env.PROJECT_GREETER_SLACK_BOT_TOKEN,
  retry: 20
}).startRTM()

const greetings = require('./greetings');

controller.on('member_joined_channel', function(bot, message){
  // console.log('member_joined_channel')
  // bot.say({channel: message.channel, text: greet});
  var greet = greetings[message.channel];
  if(greet){
    greet = greet.replace('USER_NAME', message.user);
    bot.reply(message, greet);
  }
});

// controller.on('message_received', function(bot, message) {
//   console.log('message_received')
//   console.log(message)
// });





