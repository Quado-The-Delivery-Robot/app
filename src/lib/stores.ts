import { writable, type Writable } from "svelte/store";
import type { restuarantItem } from "./types";

export const backgroundColor: Writable<string> = writable("");

export const itemInfo: Writable<{ open: (newData: restuarantItem) => void }> = writable({ open: (newData: restuarantItem) => {} });

export const contentSpaceSize: Writable<string> = writable("0px");
export const headerSize: Writable<number> = writable(0);
export const contentSize: Writable<number> = writable(0);
