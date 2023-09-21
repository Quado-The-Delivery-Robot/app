import type { Session } from "@auth/core/types";
import type { LayoutServerLoad } from "./$types";
import { redirect } from "@sveltejs/kit";
import type { RequestEvent } from "../$types";

export const load: LayoutServerLoad = ({ locals }: any) => {
    if (!locals.session) {
        throw redirect(307, "/login");
    }
};
