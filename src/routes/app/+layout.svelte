<script lang="ts">
    import Header from "$lib/components/app/header.svelte";
    import ActionBar from "$lib/components/app/actionBar.svelte";
    import ItemInfo from "$lib/components/itemInfo.svelte";
    import { onMount } from "svelte";
    import { itemInfo as itemInfoStore, contentSize, headerSize, contentSpaceSize } from "$lib/stores";
    import { page, navigating } from "$app/stores";
    import { get } from "svelte/store";

    let actionBar: HTMLDivElement;
    let contentContainer: HTMLDivElement;
    let background: HTMLDivElement;
    let itemInfo: any;
    let scrollTicking: boolean = false;

    $: if ($navigating === null && !$page.url.toString().includes("/restaurant/") && background !== undefined) background.style.setProperty("--tw-gradient-from", "#1E1E21");

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
    function windowResize() {
        contentContainer.style.paddingBottom = `${actionBar.clientHeight + 30}px`;
        background.style.height = `${window.innerHeight - actionBar.clientHeight}px`;

        const computedStyle: CSSStyleDeclaration = getComputedStyle(contentContainer);
        contentSize.set(contentContainer.clientHeight - (parseFloat(computedStyle.paddingTop.replace("px", "")) + actionBar.clientHeight));
    }

    // Update the content space whenever the sizes are updated.
    function updateContentSpaceSize() {
        contentSpaceSize.set(`${get(contentSize) - get(headerSize)}px`);
    }

    onMount(() => {
        windowResize();
        window.addEventListener("resize", windowResize);

        itemInfoStore.set(itemInfo);

        updateContentSpaceSize();
        const destroyHeaderSizeUpdater = headerSize.subscribe(updateContentSpaceSize);
        const destroyContentSizeUpdater = contentSize.subscribe(updateContentSpaceSize);

        return () => {
            destroyHeaderSizeUpdater();
            destroyContentSizeUpdater();
            window.removeEventListener("resize", windowResize);
        };
    });
</script>

<div class="absolute w-screen bg-gradient-to-b from-backgroundSecondary via-background to-background z-[-1] bg-no-repeat" id="background" bind:this={background} />

<div class="absolute top-0 left-1/2 -translate-x-1/2 w-screen max-w-[650px] px-7 pt-12 h-screen overflow-y-auto" bind:this={contentContainer} on:scroll={onScroll}>
    <Header />
    <slot />
</div>

<ActionBar bind:actionBar />

<ItemInfo bind:this={itemInfo} />

<style>
    #background {
        background-size: 100% 200%;
    }
</style>
