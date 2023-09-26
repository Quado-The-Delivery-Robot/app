<script lang="ts">
    import { onMount } from "svelte";
    import Restaurant from "./restaurant.svelte";

    export let endpoint: string;
    let restaurants: any = [];

    onMount(async () => {
        const result = await fetch(endpoint);
        const { restaurants: recommendedRestaurants } = await result.json();
        restaurants = recommendedRestaurants;
    });
</script>

<div class="flex gap-4">
    {#each restaurants as restaurant}
        <Restaurant {restaurant} />
    {/each}
</div>
