<script lang="ts">
    import type { restuarantItem } from "$lib/types";
    import anime from "animejs";
    import { onMount } from "svelte";

    let container: HTMLDivElement;
    let infoContainer: HTMLDivElement;
    let isDragging: boolean = false;
    $: data = {
        name: "",
        price: 0,
        type: "",
        description: "",
        calories: 0,
    } satisfies restuarantItem;

    export function open(newData: restuarantItem) {
        data = newData;

        container.style.display = "block";

        anime({
            targets: infoContainer,
            translateY: ["100%", "0%"],
            translateX: ["-50%", "-50%"],
            duration: 1000,
            easing: "easeOutQuint",
        });
    }

    function startDragging() {
        isDragging = true;
    }

    function stopDragging() {
        isDragging = false;
        infoContainer.style.top = "";
    }

    function drag(event: MouseEvent | TouchEvent) {
        if (!isDragging) return;

        let yPosition: number = 0;

        if (event.type == "touchmove") {
            var touch = (event as any).originalEvent.touches[0] || (event as any).originalEvent.changedTouches[0];
            yPosition = touch.pageY;
        } else if (event.type == "mousemove") {
            yPosition = (event as any).clientY;
        }

        infoContainer.style.top = `${yPosition}px`;
    }

    onMount(() => {
        document.addEventListener("mousemove", drag);
        document.addEventListener("touchmove", drag);
    });
</script>

<div class="hidden absolute top-0 left-0 w-screen h-screen overflow-hidden" bind:this={container}>
    <div class="absolute w-screen h-1/2 bottom-0 bg-backgroundSecondary z-20 rounded-t-[1.5rem] px-7 pt-6 max-w-[650px] left-1/2 -translate-x-1/2" bind:this={infoContainer}>
        <button on:mousedown={startDragging} on:mouseup={stopDragging} on:touchstart={startDragging} on:touchend={stopDragging} class="w-full h-4 absolute left-0 top-0 bg-transparent" />

        <p class="text-2xl font-semibold font-poppins">{data.name}</p>

        <div class="flex justify-center gap-4 mb-4">
            <p class=" text-base text-ellipsis text-left">${data.price}</p>
            <p class=" text-base text-ellipsis text-left">{data.calories} calories</p>
        </div>

        <p class="text-base text-ellipsis text-left">{data.description}</p>
    </div>
</div>