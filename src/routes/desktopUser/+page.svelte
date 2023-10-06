<script lang="ts">
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";

    onMount(() => {
        const isMobile: boolean = !matchMedia("(pointer:fine)").matches;

        if (isMobile) {
            goto("/app");
        }
    });
</script>

<div class="bg-gradient-to-b from-backgroundSecondary to-background w-screen h-screen flex flex-col justify-center items-center">
    <h1 class="text-5xl mb-2 text-red-500">Sorry!</h1>
    <p class="text-lg">Quado is intended for use on mobile devices.</p>
</div>
