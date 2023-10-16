<script lang="ts">
    import PageTitle from "$lib/components/pageTitle.svelte";
    import Section from "$lib/components/app/section/section.svelte";
    import { onMount } from "svelte";
    import type { restaurant } from "$lib/types";

    export let data: { page: { restaurant: restaurant; sections: { [key: string]: string } } } = {
        page: {
            restaurant: {
                name: "",
                colors: [],
                tags: [],
                image: "",
            },
            sections: {},
        },
    };

    onMount(() => {
        const element = document.getElementById("background")!;
        element.style.setProperty("--tw-gradient-from", "#002a06");
    });
</script>

<PageTitle>Subway</PageTitle>

<div class="flex flex-col justify-center items-start gap-16">
    {#each Object.entries(data.page) as [sectionName, sectionData]}
        <Section {sectionName} type={sectionData.type} restaurants={sectionData.restaurants} />
    {/each}
</div>
