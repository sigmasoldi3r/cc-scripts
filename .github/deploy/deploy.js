import { Octokit, App } from "https://esm.sh/octokit?dts";


const octokit = new Octokit({
  auth: Deno.env.get("GIST_DEPLOY_KEY")
})

async function push(target, gist_id) {
  await octokit.request('PATCH /gists/{gist_id}', {
    gist_id,
    description: 'Latest deploy of ' + target.replace(/\.lua/, '').replace(/^./, s => s.toUpperCase()),
    files: {
      [target]: {
        content: await Deno.readTextFile(target)
      }
    },
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
}
await push('commander.lua', '5a71c8a4343a0736236b49c81a80d495')
await push('monody.lua', 'bd42d6de0aa0477ae9e8f1b93943b059')
await push('grabby.lua', '353b108f06e24dd8d70317b51117c349')
Deno.exit(0)
