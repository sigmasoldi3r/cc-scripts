# ComputerCraft Scripts

A simple computercraft monorepo, with the scripts that currently are working in some
computers and turtles at my server, The Conundrum v1.5.0 (Aka The Nightwalk). Drop a
message in the forums if you want to join in.

Also you can contribute and add your own scripts. (They should be written in Saturnus).

## Installing

Now, the easiest way to get around these scripts, is to have installed manually
the "monody" and the "grabby" packages, then use `grabby::grab()` to require
the rest of scripts from the internet (Even local scripts!).

Oh you may use `grabby.grab()` if you're programming in Lua.

You can also use the `require` alt name in order to replace your scripts, and even,
if wanted the `G()` function, like: `require('grabby')::G();`. That will replace the
global `require` function, if desired.

Run:

```
pastebin run sWRBUZtc
```

## Deployment

The idea is that every commit to main, will publish the script to given pastebin
links, and then you can always grab the latest simply by:

```rs
let { grab } = require("grabby");
let super_lib = grab("pastebin:iex4Tgeb");
```

The links will be published here.

ALTERNATIVE:

```rs
require("grabby")::G();
let super_lib = require("pastebin:iex4Tgeb");
```
OR (less dangerous):

```rs
let { require } = require("grabby");
let super_lib = require("pastebin:iex4Tgeb");
```

But I advise to use only `grab` function, as it is more clear.

