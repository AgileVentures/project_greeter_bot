var greet = require("../lib/greetings");

module.exports.config = {
     "development": {
        "config_id": "bottest-slack",
        greetings: { 
            'CDLLCBT4Z': greet.ls, 
            'CDM8RJUBU': greet.wso, 
            'CDLLCJJGH': greet.rfm, 
            'CDM5X3TFV': greet.wed,
            'CDNAU3CCB': greet.metplus,
            'CDNDNJPHQ': greet.bot,
            'CDMRA0DS5': greet.asyncvoter
        },
        "PROJECT_GREETER_SLACK_BOT_TOKEN": process.env.TOKEN,
    },
    "production": {
        "config_id": "agileventures",
         greetings: {
            'C0KK907B5': greet.ls,
            'C029E8G80': greet.wso,
            'C5LCQSJMA': greet.rfm,
            'C724RCXT7': greet.wed,
            'C0VEPAPJP': greet.metplus,
            'C3ETFTYHK': greet.bot,
            'C2HGJF54G': greet.asyncvoter
        },
        "PROJECT_GREETER_SLACK_BOT_TOKEN": process.env.TOKEN,
    }
}

