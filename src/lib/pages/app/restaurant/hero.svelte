<script lang="ts">
    import { contentSpaceSize } from "$lib/stores";
    import { headerSize } from "$lib/stores";
    import { onMount } from "svelte";
    import type { restaurant } from "$lib/types";

    export let restaurant: restaurant;
    let containerTitle: HTMLParagraphElement;

    onMount(() => {
        const destroyHeaderSizeUpdater = headerSize.subscribe((size: number) => {
            containerTitle.style.setProperty("--tw-translate-y", `calc(0px - (50% + ${size}px))`);
        });

        return () => {
            destroyHeaderSizeUpdater();
        };
    });
</script>

<div class="w-full flex flex-col items-center justify-end relative" style="height: {$contentSpaceSize};">
    <p class="w-full text-4xl absolute left-1/2 top-1/2 -translate-x-1/2 font-semibold -rotate-6" bind:this={containerTitle}>Limited time deal!</p>
    <p class="w-full mb-6">{restaurant.description}</p>
</div>
