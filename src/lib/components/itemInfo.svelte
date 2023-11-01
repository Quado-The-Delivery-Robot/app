<script lang="ts">
    import type { restuarantItem } from "$lib/types";
    import anime from "animejs";

    let container: HTMLDivElement;
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
            targets: container,
            translateY: ["100%", "0%"],
            duration: 1000,
            easing: "easeOutQuint",
        });
    }
</script>

<div class="hidden absolute w-screen h-1/2 bottom-0 bg-backgroundSecondary z-20 left-0 rounded-t-[1.5rem]" bind:this={container}>
    <p class="text-lg text-semibold " style="color:aliceblue">{data.name}</p>
    <div class="flex justify-center gap-2">
        <p class=" text-base text-ellipsis text-left" style="color:aliceblue">${data.price}</p> 
        <div class="w-[1px] h-full bg-white"></div>
        <p class=" text-base text-ellipsis text-left" style="color:aliceblue">{data.calories} calories</p>
    </div> 
    <p class=" text-base text-ellipsis text-left" style="color:aliceblue">{data.description}</p>
   
</div>
