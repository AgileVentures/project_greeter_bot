Project Greeter Bot
-------------------

The idea behind the project greeter bot is to be able to help new people orient when joining project Slack channels.

Ideally human project maintainers would do this, but we have the problem that Slack doesn't notify channel members when someone joins a channel - and sometimes project maintainers are not around so the idea is that a bot with a canned message might be able to help.

It's all about onboarding people and making them feel welcome, comfortable and giving them the info they need

### Dokku deploy

```
ssh dokku@agileventures.eastus.cloudapp.azure.com apps:create projectgreeterbot-production
ssh dokku@agileventures.eastus.cloudapp.azure.com config:set projectgreeterbot-production PROJECT_GREETER_SLACK_BOT_TOKEN=XXXXX
ssh dokku@agileventures.eastus.cloudapp.azure.com config projectgreeterbot-production set PROJECT_SLACK_CHANNEL_ID=C0KK907B5
git push azure-production master
```
