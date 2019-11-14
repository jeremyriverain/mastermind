# Mastermind

This app is a Progressive web app. Thus fully offline, and eventually installable on the phone

## Develop

`quasar dev -m pwa`

## Deploy in production

There are some requirements before deploying the app on your server:
+ Node 10.16.3
+ Yarn installed
+ @quasar/cli installed

We use [Deployer](https://deployer.org/docs/getting-started.html) to automate the process. Feel free by trying this recipe. It worked fine for me.

First, begin by filling in all the environment variables in the .env file.
+ DEPLOY_PATH: this is the absolute path of the project on your server
+ HOST:
+ HOSTNAME: your ssh credentials, like user@your_ip
+ GIT_REPO
+ QUASAR_BINARY_PATH: the absolute path of the @quasar/cli package

Then install `Deployer` on your local machine
```
curl -LO https://deployer.org/deployer.phar
mv deployer.phar /usr/local/bin/dep
chmod +x /usr/local/bin/dep
```

Don't forget to make a `composer install` to install the `symfony/dotenv` dependency.

Create the target directory on your remote server.

Finally, make a `dep deploy -vv` and your project will be deployed on your server. If you have any error during the process, then inspect the logs provided by Deployer on the command line.

## Demo

There is a demo [here](https://mastermind.geekco.fr)