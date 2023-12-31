import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { order } from "$lib/types";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/orders/get`);
    const { orders }: { success: boolean; orders: order[] } = await result.json();

    return { orders };
};
