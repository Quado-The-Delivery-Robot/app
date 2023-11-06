import { writable } from "svelte/store";
import type { restuarantItem } from "./types";

export const itemInfo = writable({ open: (newData: restuarantItem) => {} });
