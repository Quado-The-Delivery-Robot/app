<script lang="ts">
    import { SplideSlide } from "@splidejs/svelte-splide";
    import type { restaurant } from "$lib/types";

    export let data: restaurant;
    export let callback: (data: restaurant) => any = () => {};
</script>

<SplideSlide>
    <button
        on:click={() => {
            callback(data);
        }}
        class="w-fit h-fit rounded-lg p-4 border border-backgroundSecondary snap-start shrink-0"
        style="background-color: {data.colors[0]};"
    >
        <img class="w-14 h-14" src={data.image} alt={data.name} />
    </button>
</SplideSlide>
