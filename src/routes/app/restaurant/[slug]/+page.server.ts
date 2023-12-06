import { PUBLIC_ENDPOINT } from "$env/static/public";
import type { PageLoad } from "./$types";
import type { order, restaurant } from "$lib/types";

const SECTIONS: { [key: string]: string } = {
    Recommended: "full",
    Meals: "full",
    Popular: "full",
};

export const load: PageLoad = async ({ fetch, params }) => {
    const result = await fetch(`${PUBLIC_ENDPOINT}/v1/restaurants/info/${params.slug}`);
    const { restaurant } = await result.json();

    return {
        page: {
            restaurant,
            sections: SECTIONS,
        },
    };
};
