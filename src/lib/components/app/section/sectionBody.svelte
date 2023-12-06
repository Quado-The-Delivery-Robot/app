<script lang="ts">
    import { Splide } from "@splidejs/svelte-splide";
    import MiniContainer from "./containers/mini.svelte";
    import FullContainer from "./containers/full.svelte";
    import type { restaurant, restuarantItem } from "$lib/types";

    export let type: string = "mini";
    export let data: restaurant[] | restuarantItem[] = [];
    export let colors: string[] | undefined;
    export let callback: (data: restaurant | restuarantItem) => any = () => {};

    function getColors(item: restaurant | any): string[] {
        return colors === undefined && "colors" in item ? item.colors : colors;
    }
</script>

{#await data}
    <p>Loading...</p>
{:then items}
    <div class="rounded-lg overflow-hidden">
        <Splide
            options={{
                gap: "1rem",
                perMove: 1,
                wheel: true,
                autoHeight: true,
                autoWidth: true,
                focus: 0,
                arrows: false,
                omitEnd: true,
            }}
        >
            {#each items as item}
                {#if type == "mini"}
                    <MiniContainer data={item} {callback} />
                {:else}
                    <FullContainer data={item} colors={getColors(item)} {callback} />
                {/if}
            {/each}
        </Splide>
    </div>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}
