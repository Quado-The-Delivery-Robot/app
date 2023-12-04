<script lang="ts">
    import PageTitle from "$lib/components/pageTitle.svelte";
    import Section from "$lib/components/app/section/section.svelte";
    import { get } from "svelte/store";
    import { itemInfo } from "$lib/stores";
    import { onMount } from "svelte";
    import type { restaurant, restuarantItem } from "$lib/types";

    export let data: { page: { restaurant: restaurant; sections: { [key: string]: string } } } = {
        page: {
            restaurant: {
                name: "",
                colors: [],
                tags: [],
                image: "",
                items: [],
                nameID: "",
            },
            sections: {},
        },
    };

    // https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
    function shadeColor(color: string, percent: number): string {
        let R: number = parseInt(color.substring(1, 3), 16);
        let G: number = parseInt(color.substring(3, 5), 16);
        let B: number = parseInt(color.substring(5, 7), 16);

        R = (R * (100 + percent)) / 100;
        G = (G * (100 + percent)) / 100;
        B = (B * (100 + percent)) / 100;

        R = R < 255 ? R : 255;
        G = G < 255 ? G : 255;
        B = B < 255 ? B : 255;

        R = Math.round(R);
        G = Math.round(G);
        B = Math.round(B);

        let RR: string = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
        let GG: string = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
        let BB: string = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

        return "#" + RR + GG + BB;
    }

    function itemClicked(data: restuarantItem | restaurant): void {
        get(itemInfo).open(data as any);
    }

    onMount(() => {
        const background = document.getElementById("background")!;
        background.style.setProperty("--tw-gradient-from", shadeColor(data.page.restaurant.colors[0], -70));
    });
</script>

<PageTitle>{data.page.restaurant.name}</PageTitle>

<div class="flex flex-col justify-center items-start gap-16">
    {#each Object.entries(data.page.sections) as [sectionName, type]}
        <Section {sectionName} {type} data={data.page.restaurant.items} callback={itemClicked} />
    {/each}
</div>
