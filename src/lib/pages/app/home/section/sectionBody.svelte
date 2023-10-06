<script lang="ts">
    import MiniContainer from "./containers/mini.svelte";
    import FullContainer from "./containers/full.svelte";
    import { onMount } from "svelte";
    import { PUBLIC_ENDPOINT } from "$env/static/public";

    export let endpoint: string;
    export let type: "mini" | "full";

    let restaurants: any = [];
    let loading: boolean = true;
    let errored: boolean = false;

    onMount(async () => {
        const result = await fetch(`${PUBLIC_ENDPOINT}${endpoint}`);

        if (result.ok === false) {
            errored = true;
        } else {
            const { restaurants: recommendedRestaurants } = await result.json();
            restaurants = recommendedRestaurants;
        }

        loading = false;
    });
</script>

<div class="rounded-lg overflow-hidden">
    {#if loading}
        <p class="text-base text-primary-800 text-left font-light">Loading...</p>
    {:else if errored}
        <p class="text-base text-red-400 text-left font-light">Failed to load.</p>
    {:else}
        <div class="sectionBodyInner flex gap-4 w-full overflow-x-scroll snap-x snap-mandatory">
            {#each restaurants as restaurant}
                {#if type == "mini"}
                    <MiniContainer {restaurant} />
                {:else}
                    <FullContainer {restaurant} />
                {/if}
            {/each}
        </div>
    {/if}
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
