Project Greeter Bot
-------------------

The idea behind the project greeter bot is to be able to help new people orient when joining project Slack channels.

Ideally human project maintainers would do this, but we have the problem that Slack doesn't actively notify channel members when someone joins a channel - and sometimes project maintainers are not around so the idea is that a bot with a canned message might be able to help.

The member joining can be seen if you are in the channel like so:

![](https://dl.dropbox.com/s/m0xdnmtlj1v9g0y/Screenshot%202018-11-01%2013.56.20.png?dl=0)

but unlike new messages, or @name, @here, @channel the join neither highlights the channel, nor adds a number in a circle.

![](https://dl.dropbox.com/s/oz9g2rlylm6x342/Screenshot%202018-11-01%2014.10.13.png?dl=0)

![](https://dl.dropbox.com/s/n8cyiaiz261clw0/Screenshot%202018-11-01%2014.12.19.png?dl=0)

This project is all about onboarding people and making them feel welcome, comfortable and giving them the info they need.  Are bots unfriendly? Should we be notifying real humans to come and welcome folk in?

### Installation

(Fork and) Clone the project to your local machine:

```
$ git clone https://github.com/AgileVentures/project_greeter_bot
```

and then install the dependencies

```
$ npm install
```

This project requires a Slack API key set as an env variable to `TOKEN`.

### Manual Testing

You can get your own test token at [#get tokens](https://api.slack.com/custom-integrations/legacy-tokens) , or come to the [#bots channel](https://agileventures.slack.com/messages/bots) on the AV slack to ask @tansaku for a token for the [agileventuresbottest slack](https://join.slack.com/t/agileventuresbottest/shared_invite/enQtMjIwOTkyMTQwNjQ0LWZlMjI4YjA4OGYwZTcxMjRmMzlkZTMzZWU3OWJiOWU5YjA5MzIzZjIxMjUyNzdkY2YxZTlmMTYyY2IxMmMzN2Q).

To work with the bottest slack you'll need to configure your environment variables:

Create a `.env` file at the root directory and set the following `variables`.
(See the `.env.sample` file as an example.)

```
TOKEN=YOUR_OWN_TEST_TOKEN or THE_TOKEN_FOR_BOTTEST_SLACK
NODE_ENV=development

```

Run and passed the test

```
$ npm test
```

Then you can start the bot like so:
```
$ npm start
```

and if you join one the channels at the bottest slack you should be able to see something like the following from your bot

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
