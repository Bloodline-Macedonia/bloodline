import sanityClient from '@sanity/client';
let client;
const config = {
  dataset: process.env.SANITY_STUDIO_API_DATASET,
  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
  useCdn: true,
  token: process.env.SANITY_API_TOKEN
}
export default client = sanityClient(config)
