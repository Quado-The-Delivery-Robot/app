<script lang="ts">
    import MiniContainer from "./containers/mini.svelte";
    import FullContainer from "./containers/full.svelte";
    import type { restaurant } from "$lib/types";

    export let type: string = "mini";
    export let restaurants: restaurant[] = [];
</script>

<div class="rounded-lg overflow-hidden">
    <div class="sectionBodyInner flex gap-4 w-full overflow-x-scroll snap-x snap-mandatory">
        {#each restaurants as restaurant}
            {#if type == "mini"}
                <MiniContainer {restaurant} />
            {:else}
                <FullContainer {restaurant} />
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
