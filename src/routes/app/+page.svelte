<script lang="ts">
    import Section from "$lib/pages/app/home/section.svelte";
</script>

<h1 class="text-6xl mb-4 p-2 mt-5">Home</h1>

<Section endpoint="/api/restaurants/recommended" sectionName="Recommendations" />
