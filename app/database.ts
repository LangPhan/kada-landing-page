import { Client, Databases } from "appwrite";
const client = new Client();
const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("658e89514f94ab5dda0f");

export default databases