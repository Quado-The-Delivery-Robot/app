<script lang="ts">
    import Header from "$lib/pages/app/home/header.svelte";
    import Section from "$lib/pages/app/home/section.svelte";
</script>

<Header></Header>
<Section endpoint="/api/restaurants/recommended" sectionName="Recommendations" />
