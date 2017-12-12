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

### Dokku deploy

```
ssh dokku@agileventures.eastus.cloudapp.azure.com apps:create projectgreeterbot-production
ssh dokku@agileventures.eastus.cloudapp.azure.com config:set projectgreeterbot-production PROJECT_GREETER_SLACK_BOT_TOKEN=XXXXX
ssh dokku@agileventures.eastus.cloudapp.azure.com config projectgreeterbot-production set PROJECT_SLACK_CHANNEL_ID=C0KK907B5
git push azure-production master
```
