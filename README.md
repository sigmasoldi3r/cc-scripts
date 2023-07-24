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

Run:

```
pastebin run sWRBUZtc
```

## Getting the scripts

Links will be published here as they are deployed.

```rs
// Getting "commander"
let Commander = grab("https://gist.github.com/sigmasoldi3r/5a71c8a4343a0736236b49c81a80d495");
```

## Grabby: Usage

The idea is that every commit to main, will publish the changes to
github gist links, and then you can always grab the latest like this:

```rs
let { grab } = require("grabby");
let super_lib = grab("pastebin:iex4Tgeb"); // This is just to illustrate the usage
```

Alternative use, altough you should avoid it, if possible:

You can also use the `require` alt name in order to replace your scripts, and even,
if wanted the `G()` function, like: `require('grabby')::G();`. That will replace the
global `require` function, if desired.

```rs
require("grabby")::G();
let super_lib = require("pastebin:iex4Tgeb");
```
OR (less dangerous):

```rs
let { require } = require("grabby");
let super_lib = require("pastebin:iex4Tgeb");
```

But I advise to use only `grab` function, as it is more clear that your code depends on
_Grabby_ to run properly.

## Compiled sources

The CI compiles the sources to Lua automagically, and drops them in a few gists (So you can just grab'em, like pastebin):

- [Commander Gist 5a71c8a4343a0736236b49c81a80d495](https://gist.github.com/sigmasoldi3r/5a71c8a4343a0736236b49c81a80d495)
- [Monody Gist bd42d6de0aa0477ae9e8f1b93943b059](https://gist.github.com/sigmasoldi3r/bd42d6de0aa0477ae9e8f1b93943b059)
- [Grabby Gist 353b108f06e24dd8d70317b51117c349](https://gist.github.com/sigmasoldi3r/353b108f06e24dd8d70317b51117c349)

