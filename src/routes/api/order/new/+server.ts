import type { RequestEvent, RequestHandler } from "./$types";
import type { item } from "$lib/api/types";
import { error, json } from "@sveltejs/kit";
import authenticateUser from "$lib/api/authenticateUser";

type request = {
    restaurant: string;
    order: item[];
};

const valid = ["Subway", "Burger King"];

export async function POST({ request }: RequestEvent) {
    const user = authenticateUser(request);

    if (user == null) {
        return json({
            success: false,
            error: "No user.",
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
}
