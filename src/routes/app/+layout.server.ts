import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";

export const load: LayoutServerLoad = (event) => {
    const session = event.locals.getSession()

    if (!session) {
        throw redirect(307, "/login");
    }
};
