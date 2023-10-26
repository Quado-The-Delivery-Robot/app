<script lang="ts">
    import MiniContainer from "./containers/mini.svelte";
    import FullContainer from "./containers/full.svelte";
    import type { restaurant, restuarantItem } from "$lib/types";

    export let type: string = "mini";
    export let data: restaurant[] | restuarantItem[] = [];
    export let callback: (data: restaurant | restuarantItem) => any = () => {};
</script>

<div class="rounded-lg overflow-hidden">
    <div class="sectionBodyInner flex gap-4 w-full overflow-x-scroll snap-x snap-mandatory">
        {#each data as item}
            {#if type == "mini"}
                <MiniContainer data={item} {callback} />
            {:else}
                <FullContainer data={item} {callback} />
            {/if}
        {/each}
    </div>
</div>

<style>
    .sectionBodyInner::-webkit-scrollbar {
        display: none;
    }

    .sectionBodyInner {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
