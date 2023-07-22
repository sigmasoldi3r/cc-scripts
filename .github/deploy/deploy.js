import { Octokit, App } from "https://esm.sh/octokit?dts";
const text = await Deno.readTextFile("commander.lua");

console.log(">", Deno.env.get("gist_deploy_key"))
