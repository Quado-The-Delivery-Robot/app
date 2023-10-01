import type { RequestEvent } from "./$types";
import type { item } from "$lib/api/types";
import { json } from "@sveltejs/kit";
import { getCollection } from "$lib/database";
import type { Collection } from "mongodb";

const ordersCollection: Collection = getCollection("core", "orders");

export async function POST() {}
