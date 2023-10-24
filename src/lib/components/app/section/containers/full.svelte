<script lang="ts">
    import type { restaurant, restuarantItem } from "$lib/types";
    import { onMount } from "svelte";

    export let data: restaurant | restuarantItem;
    let color1:string
    let color2:string
    onMount(()=>{
if ("colors" in data){
   color1=data.colors[1]
   color2=data.colors[2]
}
    })
</script>

<div class="h-full rounded-lg p-4 border border-backgroundSecondary bg-background flex items-center justify-start gap-4 snap-start w-[290px] shrink-0" style="background-color: {data.colors[0]};">
    {#if "image" in data}
        <img class="w-14 h-14" src={data.image} alt={data.name} />
    {/if}

    <div class="h-full py-1.5 flex flex-col justify-between items-start">
        <p class="font-semibold text-lg" style="color: {color1};">{data.name}</p>
        <p class="text-sm text-ellipsis" style="color: {color2};">{data.tags.join(", ")}</p>
    </div>
</div>
