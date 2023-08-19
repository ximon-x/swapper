import config from "@/utils/config";

const env = config.getEnv();
const { MONGODB_URI } = env;
const client = config.getDbClient(MONGODB_URI!);

export async function pingDB() {
  try {
    await client.connect();
    await client.db("Swapper").command({ ping: 1 });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    await client.close();
  }
}
