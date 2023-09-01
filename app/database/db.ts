import config from "@/utils/config";
import { OrderSchema } from "./schema";
import { ObjectId } from "mongodb";
import { Address } from "viem";

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

export async function createOrder(order: OrderSchema) {
  try {
    await client.connect();
    const database = client.db("Swapper");
    const orders = database.collection("Orders");
    const result = await orders.insertOne(order);
    console.log(
      `Successfully created order with the following id: ${result.insertedId}`
    );
    return result;
  } finally {
    await client.close();
  }
}

export async function getOrder(id: ObjectId) {
  try {
    await client.connect();
    const database = client.db("Swapper");
    const orders = database.collection("Orders");
    const order = await orders.findOne({ _id: id });
    return order;
  } finally {
    await client.close();
  }
}

export async function updateOrder(id: ObjectId, fulfiller: Address) {
  try {
    await client.connect();
    const database = client.db("Swapper");
    const orders = database.collection("Orders");
    const result = await orders.updateOne(
      { _id: id },
      { $set: { fulfiller: fulfiller, fulfilled: true, updated: new Date() } }
    );
    console.log(
      `Successfully updated order with the following id: ${result.upsertedId}`
    );
  } finally {
    await client.close();
  }
}
