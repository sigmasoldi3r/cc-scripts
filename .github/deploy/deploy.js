import { Octokit, App } from "https://esm.sh/octokit?dts";
const text = await Deno.readTextFile("commander.lua");

const octokit = new Octokit({
  auth: Deno.env.get("GIST_DEPLOY_KEY")
})

await octokit.request('PATCH /gists/{gist_id}', {
  gist_id: '5a71c8a4343a0736236b49c81a80d495',
  description: 'Latest deploy of the Commander library ',
  files: {
    'commander.lua': {
      content: text
    }
  },
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
