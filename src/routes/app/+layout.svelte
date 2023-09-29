<script lang="ts">
    import Header from "$lib/components/app/header.svelte";
    import ActionBar from "$lib/components/app/actionBar.svelte";
    import { onMount } from "svelte";

    let contentContainer: HTMLDivElement;

    onMount(() => {
        // Make the content cover the entire screen. However we do not want it to cover the action bar,
        // so this prevents that from happening.
        const actionBar: HTMLDivElement = document.querySelector("#actionBar")!;
        contentContainer.style.paddingBottom = `${actionBar.clientHeight + 30}px`;
    });
</script>

<div class="bg-gradient-to-b from-backgroundSecondary to-background">
    <div class="flex-grow w-screen h-screen overflow-y-auto px-7 pt-12" bind:this={contentContainer}>
        <Header></Header>

        <slot />
    </div>

    <ActionBar />
</div>
