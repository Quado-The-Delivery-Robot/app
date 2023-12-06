<script lang="ts">
    import anime, { type AnimeInstance } from "animejs";
    import { onMount } from "svelte";
    import type { restuarantItem } from "$lib/types";

    let container: HTMLDivElement;
    let infoContainer: HTMLDivElement;
    let isDragging: boolean = false;
    let startingPosition: number;
    let openAnimtion: AnimeInstance;
    let closeAnimtion: AnimeInstance;
    $: data = {
        name: "",
        price: 0,
        type: "",
        description: "",
        calories: 0,
    } satisfies restuarantItem;

    export function open(newData: restuarantItem) {
        data = newData;
        closeAnimtion.pause();
        openAnimtion.restart();
        openAnimtion.play();
    }

    function close() {
        openAnimtion.pause();
        closeAnimtion.restart();
        closeAnimtion.play();
    }

    function startDragging() {
        isDragging = true;
        openAnimtion.pause();
        closeAnimtion.pause();
    }

    function stopDragging() {
        isDragging = false;

        if (-(startingPosition - parseInt(infoContainer.style.top.replace("px", ""))) >= infoContainer.clientHeight / 2.3) {
            close();
        } else {
            anime({
                targets: infoContainer,
                top: startingPosition,
                duration: 500,
                easing: "easeOutQuint",
            });
        }
    }

    function drag(event: MouseEvent | TouchEvent) {
        if (!isDragging) return;

        let yPosition: number = 0;

        if (event.type == "touchmove") {
            const touch = (event as any).touches[0] || (event as any).changedTouches[0];
            yPosition = touch.pageY;
        } else if (event.type == "mousemove") {
            yPosition = (event as any).clientY;
        }

        infoContainer.style.top = `${yPosition}px`;
    }

    onMount(() => {
        document.addEventListener("mousemove", drag);
        document.addEventListener("touchmove", drag);

        const backgroundAnimation: AnimeInstance = anime({
            targets: container,
            easing: "easeInOutSine",
            duration: 800,
            backgroundColor: ["rgba(0, 0, 0, 0.8)", "rgba(0, 0, 0, 0)"],
            autoplay: false,
        });
        // Sets the initial opacity.
        backgroundAnimation.play();

        openAnimtion = anime({
            targets: infoContainer,
            translateY: ["100%", "0%"],
            translateX: ["-50%", "-50%"],
            duration: 1000,
            easing: "easeOutQuint",
            autoplay: false,
            begin: () => {
                container.style.pointerEvents = "auto";
                container.style.display = "block";

                if (!backgroundAnimation.reversed) {
                    backgroundAnimation.reverse();
                }

                backgroundAnimation.play();
            },
            complete: () => {
                // Set it for the first time.
                if (startingPosition === undefined) startingPosition = infoContainer.getBoundingClientRect().top;
            },
        });

        closeAnimtion = anime({
            targets: infoContainer,
            translateY: ["0%", "100%"],
            duration: 1000,
            easing: "easeOutQuint",
            autoplay: false,
            begin: () => {
                container.style.pointerEvents = "none";

                if (backgroundAnimation.reversed) {
                    backgroundAnimation.reverse();
                }

                backgroundAnimation.play();
            },
            complete: () => {
                container.style.display = "none";
                infoContainer.style.top = "";
                backgroundAnimation.reverse();
            },
        });
    });
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="hidden absolute top-0 left-0 w-screen h-screen overflow-hidden" on:click={close} bind:this={container}>
    <div class="absolute w-screen h-1/2 bottom-0 bg-backgroundSecondary z-20 rounded-t-[1.5rem] px-7 pt-8 max-w-[650px] left-1/2 -translate-x-1/2" bind:this={infoContainer}>
        <button on:mousedown={startDragging} on:mouseup={stopDragging} on:touchstart={startDragging} on:touchend={stopDragging} class="w-full h-8 absolute left-0 top-0 bg-transparent z-[2]">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-2 bg-black" />
        </button>

        <p class="text-2xl font-semibold font-poppins">{data.name}</p>

        <div class="flex justify-center gap-4 mb-4">
            <p class=" text-base text-ellipsis text-left">${data.price}</p>
            <p class=" text-base text-ellipsis text-left">{data.calories} calories</p>
        </div>

        <p class="text-base text-ellipsis text-left">{data.description}</p>
    </div>
</div>
