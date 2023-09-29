<script lang="ts">
    import ArrowRight from "$lib/components/images/arrowRight.svelte";

    export let sectionName: string;
</script>

<div class="flex justify-between items-center mb-1">
    <p class="text-lg">{sectionName}</p>
    <a href="/all" class="flex items-center text-sm opacity-50">See all <ArrowRight classes="aspect-square h-3.5 stroke-white"></ArrowRight></a>
</div>
