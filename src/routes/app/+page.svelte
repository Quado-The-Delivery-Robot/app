<script lang="ts">
    import Search from "$lib/pages/app/home/search.svelte";
    import Section from "$lib/pages/app/home/section.svelte";
</script>

<Search />

<div class="flex flex-col justify-center items-start gap-16">
    <Section endpoint="/api/restaurants/recommended" sectionName="Recommendations" type="full" />
    <Section endpoint="/api/restaurants/recommended" sectionName="New to you" type="mini" />
    <Section endpoint="/api/restaurants/recommended" sectionName="Recent" type="mini" />
</div>
