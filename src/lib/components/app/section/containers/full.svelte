<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
    import type { restaurant, restuarantItem } from "$lib/types";
    import { onMount } from "svelte";

    export let data: restaurant | restuarantItem;
    export let callback: (data: restaurant | restuarantItem) => any = () => {};
    let colors: string[] = ["#000000", "#ffffff", "#ffffff"];
    let subtext: string;
    let pretext: string = "";

    onMount(() => {
        if ("colors" in data) {
            colors = data.colors;
        }

        if ("tags" in data) {
            subtext = data.tags.join(", ");
        } else if ("description" in data) {
            subtext = data.description;
        }

        if ("price" in data) {
            pretext = `$${data.price} | `;
        }
    });
</script>

<SplideSlide>
    <button
        on:click={() => {
            callback(data);
        }}
        class="h-full rounded-lg p-4 border border-backgroundSecondary bg-background flex items-center justify-start gap-4 snap-start w-[290px] shrink-0"
        style="background-color: {colors[0]};"
    >
        {#if "image" in data}
            <img class="w-14 h-14" src={data.image} alt={data.name} />
        {/if}

        <div class="h-full py-1.5 flex flex-col justify-between items-start text-left whitespace-nowrap overflow-hidden">
            <p class="font-semibold text-lg" style="color: {colors[1]};">{data.name}</p>
            <p class="text-sm text-ellipsis" style="color: {colors[2]};">{pretext}{subtext}</p>
        </div>
    </button>
</SplideSlide>
