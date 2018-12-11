var Botkit = require('botkit');
require("dotenv").config();
var config = require('../config').config;
const ENVIRONMENT = process.env.NODE_ENV || 'development';

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: config[ENVIRONMENT].PROJECT_GREETER_SLACK_BOT_TOKEN,
  retry: 20
}).startRTM()

const greetings = require('./greetings');


controller.on('member_joined_channel', function(bot, message){
  // console.log('member_joined_channel')
  // bot.say({channel: message.channel, text: greet});
  var greet = config[ENVIRONMENT].greetings[message.channel];
  if(greet){
    greet = greet.replace('USER_NAME', message.user);
    bot.reply(message, greet);
  }
});

// controller.on('message_received', function(bot, message) {
//   console.log('message_received')
//   console.log(message)
// });





