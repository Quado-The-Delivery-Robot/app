import { json } from "@sveltejs/kit";
import { getCollection } from "$lib/database/connect";
import type { Collection } from "mongodb";

const restaurantsCollection: Collection = getCollection("restaurants");

export async function GET() {
    const result = restaurantsCollection.find().limit(5);
    const restaurants = await result.toArray();

    return json({
        success: restaurants.length > 0,
        restaurants: restaurants.map(({ name, icon }) => {
            return { name, icon };
        }),
    });
}