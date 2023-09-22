import type { RequestEvent } from "./$types";
import type { item } from "$lib/api/types";
import { json } from "@sveltejs/kit";

type request = {
    restaurant: string;
    order: item[];
};

const valid = ["Subway", "Burger King"];

export async function POST({ request, locals }: RequestEvent) {
    const session = locals.getSession();

    if (!session) {
        return json({
            success: false,
            error: "User not logged in.",
        });
    }

    const { restaurant, order }: request = await request.json();

    // To be replaced with database searching soon.
    if (valid.includes(restaurant) == false) {
        return json({
            success: false,
            error: "Invalid resturant.",
        });
    }

    console.log("placing order", restaurant, order);
    return json({
        success: true,
    });
}
