# Mastermind

## Rules of the game

This game is a Mastermind. You have to guess the combination created by the program

![Playing Mastermind](https://mastermind.geekco.fr/statics/test_mastermind.gif)

The program already chose the combination, so you can start the game right now!

It's easy to make a proposition. You can change the colors of each peg by clicking on it. If you click multiple times, the color switches from one to another. When your proposition is ready, click on the button "test combination" and you will obtain a feedback.

The white badges represents the number of correct pegs, but in the wrong place.

The black badges represents the number of correct pegs, and in the right place.

If the game is too easy or too difficult for you, you can override some parameters to adjust the complexity. See below:

![Game settings](https://mastermind.geekco.fr/statics/settings.gif)

## Develop

`quasar dev -m pwa`

## Deploy in production

There are some requirements before deploying the app on your server:
+ Node 10.16.3
+ Yarn installed
+ @quasar/cli installed

We use [Deployer](https://deployer.org/docs/getting-started.html) to automate the process. Feel free to try this recipe. It works fine for me.

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