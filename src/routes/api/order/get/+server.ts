import type { RequestEvent } from "./$types";
import type { item } from "$lib/api/types";
import { json } from "@sveltejs/kit";
import { getCollection } from "$lib/database/connect";
import type { Collection } from "mongodb";

const ordersCollection: Collection = getCollection("orders");
const valid = ["Subway", "Burger King"];

type request = {
    restaurant: string;
    order: item[];
};

export async function POST({ request, locals }: RequestEvent) {
    const session = await locals.getSession();

    if (!session) {
        return json({
            success: false,
            error: "User not logged in.",
        });
    }

    const result = await ordersCollection.updateOne(
        {
            user: session.user?.email,
        },
        {
            $push: {
                orders: order,
            },
        },
        {
            upsert: true,
        }
    );

    return json({
        success: result.acknowledged,
    });
}
