const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_2_ACCESS_TOKEN
const environmentId = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID

const client = require('contentful-management').createClient({
    accessToken: accessToken
});

export async function createTodo(text) {
  const space = await client.getSpace(spaceId);
  const environment = await space.getEnvironment(environmentId);
  const draftEntry = await environment.createEntry("todo", {
    fields: {
      todoTitle: {
        "en-US": text
      }
    }
  })
  try {
    const publishedEntry = await draftEntry.publish();
    console.log(`${publishedEntry.sys.id} をパブリッシュしました。`);
  } catch (err) {
    console.error(err);
  }
}
