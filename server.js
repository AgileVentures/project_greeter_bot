var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: process.env.PROJECT_GREETER_SLACK_BOT_TOKEN,
  retry: 20
}).startRTM()

var ls_greet = "Welcome to LocalSupport <@USER_NAME> :slightly_smiling_face: To install the codebase see: https://github.com/AgileVentures/LocalSupport/blob/develop/docs/installation.md#installation and our #localsupport-install channel if you need help"

ls_greet += "\n\n\n see https://github.com/AgileVentures/LocalSupport/blob/develop/CONTRIBUTING.md for how to contribute to the project, but feel free to ask questions here too :-)"

var wso_greet = "Welcome to WebSiteOne <@USER_NAME> :slightly_smiling_face: To install the code see: https://github.com/AgileVentures/WebsiteOne/blob/develop/docs/project_setup.md and our #websiteone-install channel if you need help"

wso_greet += "\n\n\n feel free to ask questions here, but do also see https://github.com/AgileVentures/WebsiteOne/blob/develop/CONTRIBUTING.md for contribution guidelines :-)"

var rfm_greet = "Welcome <@USER_NAME> to #rundfunk-mitbestimmen!"

rfm_greet += "\n\nLearn about the goal of this project by visiting our website"
rfm_greet += "\nhttps://rundfunk-mitbestimmen.de/"
rfm_greet += "\nand our Github page"
rfm_greet += "\nhttps://github.com/roschaefer/rundfunk-mitbestimmen"
rfm_greet += "\n- spoiler: it has to do with public broadcasting and digital democracy :wink:"
rfm_greet += "\n\nFeel free to ask @roschaefer and @somamo anything. As a start, tell us your interests and what you want to learn."
rfm_greet += "\n\nWe believe in agile methodology, use Scrum for our workflow and state of the art technologies like Ruby on Rails, EmberJS, Semantic UI, D3, Highcharts, MochaJS, Rspec, Cucumber and Capybara."
rfm_greet +="\n\nJoin us in our weekly scrum:"
rfm_greet += "\nhttps://www.agileventures.org/events/rundfunk-mitbestimmen-meeting"
rfm_greet +="\n\nYou can also get going and install the code base: https://github.com/roschaefer/rundfunk-mitbestimmen#local-installation-best-option-for-developers"
rfm_greet +="\n\nWe would love to hear from you! :simple_smile:"


//for testing on staging slack
const greetings = { 
                    'C69J9GC1Y': ls_greet, 
                    'C69J9H6KU': wso_greet, 
                    'C6ALKE66N': rfm_greet, 
                  };

// for main AV slack
// const greetings = { 
//                     'C0KK907B5': ls_greet, 
//                     'C029E8G80': wso_greet, 
//                     'C5LCQSJMA': rfm_greet, 
//                   };

controller.on('member_joined_channel', function(bot, message){
  // console.log('member_joined_channel')
  // bot.say({channel: message.channel, text: greet});
  var greet = greetings[message.channel];
  greet = greet.replace('USER_NAME', message.user);
  if(greet){
    bot.reply(message, greet);
  }
});


// controller.on('message_received', function(bot, message) {
//   console.log('message_received')
//   console.log(message)
// });





