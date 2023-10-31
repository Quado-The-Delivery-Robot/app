<script lang="ts">
    import type { restuarantItem } from "$lib/types";
    import anime from "animejs";

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
</script>

<div class="hidden absolute w-screen h-1/2 bottom-0 bg-red-500 z-20 left-0" bind:this={container}>
    <p class=" text-base text-ellipsis text-left" style="color:aliceblue">description</p>
</div>
