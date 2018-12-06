
var ls = "Welcome to LocalSupport <@USER_NAME> :slightly_smiling_face: Get started by <https://github.com/AgileVentures/LocalSupport/blob/develop/docs/installation.md#installation|installing the codebase> and our <#C3QFDHMAM|localsupport-install> channel if you need help"

ls += "\n\n\n see https://github.com/AgileVentures/LocalSupport/blob/develop/CONTRIBUTING.md for how to contribute to the project, but feel free to ask questions here too, flagging me with <@U0292M7AC|tansaku> :-)"

var wso = "Welcome to WebSiteOne <@USER_NAME> :slightly_smiling_face: See our <https://github.com/AgileVentures/WebsiteOne/blob/develop/docs/project_setup.md|project setup notes> to install the codebase and our <#C692KBC66|websiteone-install> channel if you need help"

wso += "\n\n\n feel free to ask questions here, flagging me with <@U0292M7AC|tansaku>, but do also see our <https://github.com/AgileVentures/WebsiteOne/blob/develop/CONTRIBUTING.md|contribution guidelines> :-)"

var rfm = "Welcome <@USER_NAME> to <#C5LCQSJMA|rundfunk-mitbestimmen>!"

rfm += "\n\nLearn about the goal of this project by visiting our <https://rundfunk-mitbestimmen.de/|website>"
rfm += " and our <https://github.com/roschaefer/rundfunk-mitbestimmen|Github page>"
rfm += "\n- spoiler: it has to do with public broadcasting and digital democracy :wink:"
rfm += "\n\nFeel free to ask <@U5KPGRGGZ|roschaefer> and <@U5N8PH0G1|katharina> anything. As a start, tell us your interests and what you want to learn."
rfm +="\n\nJoin us in our <https://www.agileventures.org/events/rundfunk-mitbestimmen-meeting|weekly scrum>"
rfm +="\n\nWe would love to hear from you! :simple_smile:"

var wed = "Welcome <@USER_NAME>! The Wiki Education Dashboard is a Rails and React project, and there are usually some beginner-friendly tasks that are more on the Rails side, more on the React side, more on the HTML/CSS side, or a mix. Want to build a new feature? Want to fix a tricky bug? We've got all kinds of things to do. If you want any help finding a place to start, ping <@U34727JBW|ragesoss>"

wed += "\n\nSetup: https://github.com/WikiEducationFoundation/WikiEduDashboard/blob/master/docs/setup.md"

wed += "\n\nIf you run into any trouble following the instructions for setting up a dev environment, please say something!"

var bot = "Welcome to Bots <@USER_NAME> :slightly_smiling_face: Get started by <https://github.com/AgileVentures/project_greeter_bot/blob/master/README.md#installation|installing the codebase> and feel free to ask questions here too, flagging me with <@U0292M7AC|tansaku> :-)"
var asyncvoter = "Welcome to AsyncVoter <@USER_NAME> :slightly_smiling_face: Get started by <https://github.com/AgileVentures/asyncvoter-slack-command/blob/staging/Readme.md#development|installing the codebase> and feel free to ask questions here too, flagging me with <@U0292M7AC|tansaku> :-)"


var metplus = "Welcome <@USER_NAME>! The PETS project is a Rails, Javascript and Java project. We have a lot of code around but still a lot more things to do. "
metplus += "Take a look at our waffle board to find out what we have open and feel free to ask in the channel for help finding something to work on or if you have any question."
metplus += "\n\nWaffle link: https://waffle.io/AgileVentures/MetPlus_tracker"
metplus += "\n\nRails project overview: https://github.com/AgileVentures/MetPlus_PETS/wiki"
metplus += "\n\nRails setup: https://github.com/AgileVentures/MetPlus_PETS/wiki/Project-Setup"
metplus += "\n\nJava project information: https://github.com/AgileVentures/MetPlus_resumeCruncher"

metplus += "\n\nIf you run into any trouble following the instructions for setting up a dev environment, please say something!"

var test = 'You are on the test channel';

//for testing on staging slack
// const greetings = { 
//                     'C69J9GC1Y': ls_greet, 
//                     'C69J9H6KU': wso_greet, 
//                     'C6ALKE66N': rfm_greet, 
//                     'C6B7LDG10': wed_greet, 
//                   };

// // for main AV slack
// const greetings = { 
//   'CDLLCBT4Z': ls_greet, 
//   'CDM8RJUBU': wso_greet, 
//   'CDLLCJJGH': rfm_greet, 
//   'CDM5X3TFV': wed_greet,
//   'CDNAU3CCB': metplus_greet,
//   'CDNDNJPHQ': bot_greet,
//   'CDMRA0DS5': async_greet
// };


const greetings = { 
  ls, 
  wso, 
  rfm, 
  wed,
  metplus,
  bot,
  asyncvoter,
  test
};


module.exports = greetings;

