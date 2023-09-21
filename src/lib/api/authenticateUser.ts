import type { Session } from "@auth/core/types";

export default async function authenticateUser(request: any): Promise<Session | null> {
    const session: Session | null = await request.locals.getSession();

    if (session) {
        return session;
    } else {
        return null;
    }
}
