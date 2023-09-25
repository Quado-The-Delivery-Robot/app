import type { LayoutServerLoad } from "./$types";
import { json } from "@sveltejs/kit";

export const load: LayoutServerLoad = (event) => {
    const session = event.locals.getSession();

    if (!session) {
        return json({
            success: false,
            error: "User not logged in.",
        });
    }
};
