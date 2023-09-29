<script lang="ts">
    import Search from "$lib/pages/app/home/search.svelte";
    import Section from "$lib/pages/app/home/section.svelte";
</script>

<Search />

<div class="flex flex-col justify-center items-start gap-16">
    <Section endpoint="/api/restaurants/recommended" sectionName="Recommendations" />
    <Section endpoint="/api/restaurants/recommended" sectionName="New to you" />
    <Section endpoint="/api/restaurants/recommended" sectionName="Recent" />
    <Section endpoint="/api/restaurants/recommended" sectionName="Recommendations" />
</div>
