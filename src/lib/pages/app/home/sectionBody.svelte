<script lang="ts">
    import MiniContainer from "./containers/mini.svelte";
    import FullContainer from "./containers/full.svelte";
    import { onMount } from "svelte";

    export let endpoint: string;
    export let type: "mini" | "full";

    let restaurants: any = [];

    onMount(async () => {
        const result = await fetch(endpoint);
        const { restaurants: recommendedRestaurants } = await result.json();
        restaurants = recommendedRestaurants;
    });
</script>

<div class="rounded-lg overflow-hidden">
    <div class="flex gap-4 w-full overflow-x-auto snap-x">
        {#each restaurants as restaurant}
            {#if type == "mini"}
                <MiniContainer {restaurant} />
            {:else}
                <FullContainer {restaurant} />
            {/if}
        {/each}
    </div>
</div>
