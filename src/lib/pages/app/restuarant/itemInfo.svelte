<script lang="ts">
    import type { restuarantItem } from "$lib/types";
    import anime from "animejs";
    import { onMount } from "svelte";

    let container: HTMLDivElement;
    let data: restuarantItem;

    export function open(newData: restuarantItem) {
        data = newData;

        container.style.display = "block";

        anime({
            targets: container,
            translateY: ["100%", "0%"],
            duration: 5000,
            easing: "easeOutQuint",
        });
    }
    onMount(() => {
        //const actionBar: HTMLDivElement = document.querySelector("#actionBar")!;
       // container.style.bottom = `-${actionBar.clientHeight}px`;
    });

</script>

<div class="hidden absolute w-screen h-1/2 bottom-0 bg-red-500 z-20 left-0" bind:this={container} >
    <p class="text-sm text-ellipsis" style="color:aliceblue"></p>
</div>
