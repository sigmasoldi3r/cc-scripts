import { Octokit, App } from "https://esm.sh/octokit?dts";
const text = await Deno.readTextFile("commander.lua");

console.log(">", Deno.env.get("GIST_DEPLOY_KEY"))
