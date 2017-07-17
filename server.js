var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: process.env.PROJECT_GREETER_SLACK_BOT_TOKEN,
  retry: 20
}).startRTM()

var ls_greet = "Welcome to LocalSupport! :slightly_smiling_face: To install the codebase see: https://github.com/AgileVentures/LocalSupport/blob/develop/docs/installation.md#installation and our #localsupport-install channel if you need help"

ls_greet += "\n\n\n see https://github.com/AgileVentures/LocalSupport/blob/develop/CONTRIBUTING.md for how to contribute to the project, but feel free to ask questions here too :-)"

var wso_greet = "Welcome to WebSiteOne! :slightly_smiling_face: To install the code see: https://github.com/AgileVentures/WebsiteOne/blob/develop/docs/project_setup.md and our #websiteone-install channel if you need help"

wso_greet += "\n\n\n feel free to ask questions here, but do also see https://github.com/AgileVentures/WebsiteOne/blob/develop/CONTRIBUTING.md for contribution guidelines :-)"

const greetings = { 
                    'C69J9GC1Y': ls_greet, 
                    'C69J9H6KU': wso_greet, 
                  };

// for testing on staging slack
// const greetings = { 
//                     'C0KK907B5': ls_greet, 
//                     'C029E8G80': wso_greet, 
//                   };

controller.on('member_joined_channel', function(bot, message){
  // console.log('member_joined_channel')
  // bot.say({channel: message.channel, text: greet});
  var greet = greetings[message.channel];
  if(greet){
    bot.reply(message, greet);
  }
});


// controller.on('message_received', function(bot, message) {
//   console.log('message_received')
//   console.log(message)
// });





