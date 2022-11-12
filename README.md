![mocha](/image/mocha.jpg)
![ss](/image/ss.png)
a discord selfbot write in nodejs 16 with discordjs 13 module, designed to bumping disboard.org every 2 hours. <br/>
![nodejs](https://img.shields.io/badge/NODEJS-16-bf616a?style=flat-square)
![licence](https://img.shields.io/badge/LICENE-MIT-ebcb8b?style=flat-square)
![version](https://img.shields.io/badge/VERSION-1.0.1-a3be8c?style=flat-square)

## _setup_

### _Install nodejs_

```
Ubuntu/Debian
curl -sL https://deb.nodesource.com/setup_16.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install nodejs

Arch Linux
sudo pacman -S nodejs

Windows
https://nodejs.org/download/release/v16.18.0/node-v16.18.0-x64.msi
```

### _Install git_

```
Ubuntu/Debian
sudo apt install git

Arch Linux
sudo pacman -S git

Windows
https://gitforwindows.org/
```

### _Clone this repo_

```
git clone https://github.com/Elliottophellia/mocha
```

### _Install dependencies_

```
cd mocha
npm install
```

### _Edit config.json_

```json
{
    // https://linuxhint.com/get-discord-token/
    // Remember account token only works if your account still login in the browser (you can close it but dont logout or clear cache)
    "token": "your token", 
    "bump": {
        "server": "server id",
        "channel;": "channel id"
    }
}
```

### _Run the bot_

```
npm start
```


## _license_
```
MIT License

Copyright (c) 2021 Ellittophellia.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

## _disclaimer_
```
Any kinds of trouble that happen to your Discord account (BAN, RESTRICTED, BLOCKED, etc) are NOT MY RESPONSIBILITY,
for more information about Discord Terms Of Service you can read it here https://discord.com/terms
```
