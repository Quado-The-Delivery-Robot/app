<script lang="ts">
    import Header from "$lib/components/app/header.svelte";
    import ActionBar from "$lib/components/app/actionBar.svelte";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    let actionBar: HTMLDivElement;
    let contentContainer: HTMLDivElement;
    let background: HTMLDivElement;
    let scrollTicking: boolean = false;

    function updateBackground() {
        background.style.backgroundPosition = `0% ${(contentContainer.scrollTop / background.clientHeight) * 100}%`;
    }

    function onScroll() {
        if (scrollTicking) return;

        window.requestAnimationFrame(() => {
            updateBackground();
            scrollTicking = false;
        });

        scrollTicking = true;
    }

    // Make the content cover the entire screen. However we do not want it to cover the action bar,
    // so this prevents that from happening.
    function updateActionBarDependentsHeight() {
        contentContainer.style.paddingBottom = `${actionBar.clientHeight + 30}px`;
        background.style.height = `${window.innerHeight - actionBar.clientHeight}px`;
    }

    onMount(() => {
        const isMobile: boolean = !matchMedia("(pointer:fine)").matches;

        if (!isMobile) {
            goto("/desktopUser");
        } else {
            updateActionBarDependentsHeight();
            window.addEventListener("resize", updateActionBarDependentsHeight);
        }
    });
</script>

<div class="absolute w-screen bg-gradient-to-b from-backgroundSecondary via-background to-background z-[-1] bg-no-repeat" id="background" bind:this={background} />

<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen max-w-[650px] px-7 pt-12 h-screen overflow-y-auto" bind:this={contentContainer} on:scroll={onScroll}>
    <Header />
    <slot />
</div>

<ActionBar bind:actionBar />

<style>
    #background {
        background-size: 100% 200%;
    }
</style>
