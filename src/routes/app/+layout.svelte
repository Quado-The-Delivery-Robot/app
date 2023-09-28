<script lang="ts">
    import ActionBar from "$lib/components/app/actionBar.svelte";
    import { onMount } from "svelte";

    let contentContainer: HTMLDivElement;

    onMount(() => {
        // Make the content cover the entire screen. However we do not want it to cover the action bar,
        // so this prevents that from happening.
        const actionBar: HTMLDivElement = document.querySelector("#actionBar")!;
        contentContainer.style.paddingBottom = `${actionBar.clientHeight}px`;
    });
</script>

<div class="flex-grow w-screen h-screen overflow-y-auto" bind:this={contentContainer}>
    <slot />
</div>

<ActionBar />
