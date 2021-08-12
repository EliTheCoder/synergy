[![GitHub License](https://img.shields.io/badge/license-OSL--3.0-green.svg)](https://github.com/ETCEntertainment/synergy/blob/master/LICENSE)
![Github All Releases](https://img.shields.io/github/downloads/ETCEntertainment/synergy/total.svg)
![GitHub issues](https://img.shields.io/github/issues/ETCEntertainment/synergy.svg)

# Synergy - A fun multiplayer io game online

Join your friends in **Synergy**, a simplistic game about teamwork.
Players play as blocks with a goal to get one player to the portal at the right edge of the level.
Play with four players, a red square, blue square, green square, and yellow square.
The player has the option to invite friends to play or enjoy the game with random people.

![Gameplay Screenshot v0.0.1](https://imgur.com/hK7Tq0d.png)

## Install

#### Check if you have `node` and `npm`

If you have used node and/or npm on this computer in the past, you most likely have it.

1. Open up your OS' command line
    - Linux: GNOME Terminal, UXTerm or XTerm, Konsole, Tilda, etc.
    - Macintosh: Terminal
    - Windows: cmd / Command Prompt
2. Type in `node -v` and press enter
3. You should see v4.2.6 or something close to that
4. If you do, that means you have node, so follow the according instructions.
5. If you do not, that means you do not have node, so follow the according instructions.

#### If you have `node` and `npm`

After downloading the git (with either `git clone` or downloading the .zip), run the following command: `npm install`. This will install all the needed packages.

#### If you do not have `node` and `npm`

##### Through Command Line

Go to [this link](https://nodejs.org/en/download/package-manager/) and find your package manager / OS. Follow the given instructions.
Go to the previous step (_If you have `node` and `npm`_).

##### Windows or Macintosh

Go to [this link](https://nodejs.org/en/) and download your desired package. Run the downloaded file and follow the given instructions. This will install `node` and `npm` on to your command line (cmd for Windows, Terminal for Mac).
Go to the previous step (_If you have `node` and `npm`_).

## Run

In your command line, go to the Synergy directory. Type in `npm start` and press enter.

## Troubleshooting

#### Failed at Synergy start script 'node server.js'

##### Solution:

Run `node server.js` instead of `npm start`. This will output the error message. Either find the solution below, or (if none exists) create an issue in this repoistory using [this](https://github.com/ETCEntertainment/synergy/blob/master/ISSUE_TEMPLATE.md) template.

#### listen EACCES 0.0.0.0:80

##### Solution 1:

On Linux or Macintosh, log into root account and run or use `sudo npm start` instead.
On Windows, right-click cmd and click **Run as Administrator**. Then run.

##### Solution 2:

Edit line 5 of [server.js](https://github.com/ETCEntertainment/synergy/blob/master/server.js) and change 80 to something above 1024. When accessing the page in your browser, enter `:<number you entered>` at the end of the url.
