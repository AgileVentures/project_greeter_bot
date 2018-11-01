Project Greeter Bot
-------------------

The idea behind the project greeter bot is to be able to help new people orient when joining project Slack channels.

Ideally human project maintainers would do this, but we have the problem that Slack doesn't notify channel members when someone joins a channel - and sometimes project maintainers are not around so the idea is that a bot with a canned message might be able to help.

It's all about onboarding people and making them feel welcome, comfortable and giving them the info they need

### Installation

(Fork and) Clone the project to your local machine:

```
$ git clone https://github.com/AgileVentures/project_greeter_bot
```

and then install the dependencies

```
$ npm install
```

and then run the tests

```
$ npm test
```

the system can be started like so:

```
$ npm start
```

but it needs a Slack API key set as an env variable to `PROJECT_GREETER_SLACK_BOT_TOKEN`.  Note also that the channel ids are currently hard coded to the relevant channels on the main AV slack instance.  To do a complete round trip test you'll need your own Slack instance and channel ids, or reach out to sam@agileventures.org to get access to the test Slack.

### Manual Testing

You can create your own slack instance to test, or come to the [#bots channel](https://agileventures.slack.com/messages/bots) on the AV slack to ask @tansaku for a token for the [agileventuresbottest slack](https://join.slack.com/t/agileventuresbottest/shared_invite/enQtMjIwOTkyMTQwNjQ0LWZlMjI4YjA4OGYwZTcxMjRmMzlkZTMzZWU3OWJiOWU5YjA5MzIzZjIxMjUyNzdkY2YxZTlmMTYyY2IxMmMzN2Q).

To work with the bottest slack you'll need to replace the greetings constant in the `lib/greetings.js` file with the following:

```js
const greetings = { 
  'CDLLCBT4Z': ls_greet, 
  'CDM8RJUBU': wso_greet, 
  'CDLLCJJGH': rfm_greet, 
  'CDM5X3TFV': wed_greet,
  'CDNAU3CCB': metplus_greet,
  'CDNDNJPHQ': bot_greet,
  'CDMRA0DS5': async_greet
};
```

Then you can start the bot like so:

```
PROJECT_GREETER_SLACK_BOT_TOKEN=<INSERT_TOKEN> npm start
```

and if you join one the channels you should be able to see something like the following from your bot

![](https://dl.dropbox.com/s/exayo4cl6g2z7jd/Screenshot%202018-10-25%2016.55.09.png?dl=0)




### Dokku deploy to production

This will only work if you have been given access to our dokku system - this is for advanced users who have demonstrated ongoing committment to the project.

To make the commands simple, add the following to your ~/.ssh/config

```
Host avp-dokku
HostName agileventures-playground.westeurope.cloudapp.azure.com
User dokku
```
Then the following commands (assuming you have the correct ssh key set up) will create an app and allow pushing to the production server via git

```sh
$ ssh avp-dokku apps:create projectgreeterbot-production # if app not yet created
$ git remote add projectgreeterbot-production dokku@agileventures-playground.westeurope.cloudapp.azure.com:projectgreeterbot-production    # assuming you are in local directory for this project -- only needed first time
$ git push projectgreeterbot-production master
```

### old notes

```
ssh dokku@agileventures.eastus.cloudapp.azure.com apps:create projectgreeterbot-production
ssh dokku@agileventures.eastus.cloudapp.azure.com config:set projectgreeterbot-production PROJECT_GREETER_SLACK_BOT_TOKEN=XXXXX
ssh dokku@agileventures.eastus.cloudapp.azure.com config projectgreeterbot-production set PROJECT_SLACK_CHANNEL_ID=C0KK907B5
git push azure-production master
```
