<script lang="ts">
    import type { restaurant } from "$lib/types";

    export let restaurant: restaurant;
</script>

<div class="w-full flex flex-col items-center justify-end">
    <p class="w-full mb-6">{restaurant.description}</p>
</div>
