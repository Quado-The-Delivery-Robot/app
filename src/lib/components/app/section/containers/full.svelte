<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
    import type { restaurant, restuarantItem } from "$lib/types";
    import { onMount } from "svelte";

    export let data: restaurant | restuarantItem;
    export let colors: string[] = ["#000000", "#ffffff", "#ffffff"];
    export let callback: (data: restaurant | restuarantItem) => any = () => {};
    let subText: string;
    let preText: string;

    onMount(() => {
        if ("tags" in data) {
            subText = data.tags.join(", ");
        } else if ("description" in data) {
            subText = data.description;
        }

        if ("price" in data) {
            preText = `$${data.price}`;
        }
    });
</script>

<SplideSlide>
    <button
        on:click={() => {
            callback(data);
        }}
        class="h-full rounded-lg p-4 border border-backgroundSecondary bg-background flex items-center justify-start gap-4 snap-start w-[290px] shrink-0 overflow-hidden"
        style="background-color: {colors[0]};"
    >
        {#if "image" in data}
            <img class="w-14 h-14" src={data.image} alt={data.name} />
        {/if}

        <div class="h-full py-1.5 flex flex-col justify-between items-start text-left whitespace-nowrap overflow-hidden">
            <p class="font-semibold text-lg" style="color: {colors[1]};">{data.name}</p>
            <p class="text-sm text-ellipsis" style="color: {colors[2]};"><span class="font-semibold {preText !== undefined ? "mr-2" : ""}">{preText !== undefined ? preText : ""}</span>{subText}</p>
        </div>
    </button>
</SplideSlide>
