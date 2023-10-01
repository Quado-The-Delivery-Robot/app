<script lang="ts">
    import { onMount } from "svelte";

    export let restaurant: any;

    let container: HTMLDivElement

    onMount(() => {
        container.style.background = `linear-gradient(to bottom, ${restaurant.colors[0]}, ${restaurant.colors[1]})`
    })
</script>

<div class="aspect-square rounded-lg px-4 py-4 border border-backgroundSecondary bg-no-repeat bg-cover" bind:this={container}>
    <img class="aspect-square w-14" src={restaurant.image} alt={restaurant.name} />
</div>
