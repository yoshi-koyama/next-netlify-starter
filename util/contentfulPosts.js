const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries({content_type: "post"})
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export async function fetchHero() {
  const entry = await client.getEntry("3MSqQmUGD6AZZS4YtUix9m")
  if (entry) return entry
  console.log("Error getting Hero")
}

export async function fetchCompanyInfo() {
  const companyInfo = await client.getEntry("5Dquxzmvugd1X8XDmwaTE1")
  if (companyInfo) return companyInfo
  console.log("Error getting companyInfo")
}

export async function fetchTodos() {
  const todos = await client.getEntries({content_type: "todo"})
  if (todos.items) return todos.items
  console.log("Error getting Entries for todos.")
}

export default { fetchEntries }