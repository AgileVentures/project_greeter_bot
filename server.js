var Botkit = require('botkit');

var controller = Botkit.slackbot({
  debug: false
});

var bot = controller.spawn({
  token: process.env.PROJECT_GREETER_SLACK_BOT_TOKEN,
  retry: 20
}).startRTM()

var ls_greet = "Welcome to LocalSupport <@USER_NAME> :slightly_smiling_face: Get started by <https://github.com/AgileVentures/LocalSupport/blob/develop/docs/installation.md#installation|installing the codebase> and our <#C3QFDHMAM|localsupport-install> channel if you need help"

ls_greet += "\n\n\n see https://github.com/AgileVentures/LocalSupport/blob/develop/CONTRIBUTING.md for how to contribute to the project, but feel free to ask questions here too, flagging me with <@U0292M7AC|tansaku> :-)"

var wso_greet = "Welcome to WebSiteOne <@USER_NAME> :slightly_smiling_face: See our <https://github.com/AgileVentures/WebsiteOne/blob/develop/docs/project_setup.md|project setup notes> to install the codebase and our <#C692KBC66|websiteone-install> channel if you need help"

wso_greet += "\n\n\n feel free to ask questions here, flagging me with <@U0292M7AC|tansaku>, but do also see our <https://github.com/AgileVentures/WebsiteOne/blob/develop/CONTRIBUTING.md|contribution guidelines> :-)"

var rfm_greet = "Welcome <@USER_NAME> to <#C5LCQSJMA|rundfunk-mitbestimmen>!"

rfm_greet += "\n\nLearn about the goal of this project by visiting our <https://rundfunk-mitbestimmen.de/|website>"
rfm_greet += " and our <https://github.com/roschaefer/rundfunk-mitbestimmen|Github page>"
rfm_greet += "\n- spoiler: it has to do with public broadcasting and digital democracy :wink:"
rfm_greet += "\n\nFeel free to ask <@U5KPGRGGZ|roschaefer> and <@U5N8PH0G1|katharina> anything. As a start, tell us your interests and what you want to learn."
rfm_greet +="\n\nJoin us in our <https://www.agileventures.org/events/rundfunk-mitbestimmen-meeting|weekly scrum>"
rfm_greet +="\n\nWe would love to hear from you! :simple_smile:"

var wed_greet = "Welcome <@USER_NAME>! The Wiki Education Dashboard is a Rails and React project, and there are usually some beginner-friendly tasks that are more on the Rails side, more on the React side, more on the HTML/CSS side, or a mix. Want to build a new feature? Want to fix a tricky bug? We've got all kinds of things to do. If you want any help finding a place to start, ping <@U34727JBW|ragesoss>"

wed_greet += "\n\nSetup: https://github.com/WikiEducationFoundation/WikiEduDashboard/blob/master/docs/setup.md"

wed_greet += "\n\nIf you run into any trouble following the instructions for setting up a dev environment, please say something!"

//for testing on staging slack
// const greetings = { 
//                     'C69J9GC1Y': ls_greet, 
//                     'C69J9H6KU': wso_greet, 
//                     'C6ALKE66N': rfm_greet, 
//                     'C6B7LDG10': wed_greet, 
//                   };

// // for main AV slack
const greetings = { 
                    'C0KK907B5': ls_greet, 
                    'C029E8G80': wso_greet, 
                    'C5LCQSJMA': rfm_greet, 
                    'C36MNPWTD': wed_greet
                  };

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





