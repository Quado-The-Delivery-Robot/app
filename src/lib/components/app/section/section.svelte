<script lang="ts">
    import ArrowRight from "$lib/components/images/arrowRight.svelte";
    import SectionBody from "./sectionBody.svelte";
    import type { restaurant } from "$lib/types";

    export let restaurants: restaurant[] = [];
    export let sectionName: string = "";
    export let type: string = "mini";
</script>

<div class="w-full">
    <div class="flex justify-between items-center mb-1">
        <p class="text-lg font-semibold">{sectionName}</p>
        <a href="/{sectionName}/all" class="flex items-center text-sm opacity-50 font-light">See all <ArrowRight classes="aspect-square h-3.5 stroke-white" /></a>
    </div>

    <SectionBody {restaurants} {type} />
</div>
