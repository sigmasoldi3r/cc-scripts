import { Octokit, App } from "https://esm.sh/octokit?dts";


const octokit = new Octokit({
  auth: Deno.env.get("GIST_DEPLOY_KEY")
})

async function cFile(where) {
  return { [where]: { content: await Deno.readTextFile(where) } }
}

await octokit.request('PATCH /gists/{gist_id}', {
  gist_id: '5a71c8a4343a0736236b49c81a80d495',
  description: 'Latest deploy of the CC libraries',
  files: {
    ...cFile('commander.lua'),
    ...cFile('enquirer.lua'),
    ...cFile('monody.lua'),
    ...cFile('grabby.lua'),
    ...cFile('lyre.lua'),
    ...cFile('lark.lua'),
    ...cFile('netpipe.lua'),
    ...cFile('robot.lua'),
  },
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
