<script lang="ts">
    import ActionBar from "$lib/components/app/actionBar.svelte";
</script>

<div class="flex justify-center items-center flex-col">
    <div class="flex-grow w-screen overflow-y-auto">
        <slot />
    </div>

    <ActionBar />
</div>