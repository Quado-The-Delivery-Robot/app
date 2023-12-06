<script lang="ts">
    import { onMount } from "svelte";
    import type { restaurant } from "$lib/types";

    export let restaurant: restaurant;
    let contentContainer: HTMLDivElement;

    // This allows the hero to cover the entire page.
    function setContentContainerSize() {
        // TODO: Make this a component.
        const pageContent: HTMLDivElement = document.querySelector("#pageContent")!;
        const computedStyle: CSSStyleDeclaration = getComputedStyle(pageContent);
        console.log(computedStyle)
        contentContainer.style.height = `${pageContent.clientHeight - (parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom))}px`;
    }

    onMount(() => {
        setContentContainerSize();
        document.addEventListener("resize", setContentContainerSize);

        return () => {
            document.removeEventListener("resize", setContentContainerSize);
        };
    });
</script>

<div class="w-full flex flex-col items-center justify-end" bind:this={contentContainer}>
    <p class="w-full mb-6">{restaurant.description}</p>
</div>
