<script lang="ts">
    import Search from "$lib/pages/app/home/search.svelte";
    import Section from "$lib/components/app/section/section.svelte";
    import { goto } from "$app/navigation";
    import type { restuarantItem, restaurant } from "$lib/types";

    export let data: { page: { [key: string]: { type: string; restaurants: restaurant[] } } } = { page: {} };

    function callback(data: restuarantItem | restaurant): void {
        goto(`/app/restaurant/${(data as restaurant).nameID}/`);
    }
</script>

<Search />

<div class="flex flex-col justify-center items-start gap-16">
    {#each Object.entries(data.page) as [sectionName, sectionData]}
        <Section {sectionName} type={sectionData.type} data={sectionData.restaurants} {callback} />
    {/each}
</div>
