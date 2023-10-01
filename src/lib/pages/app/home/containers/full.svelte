<script lang="ts">
    export let restaurant: any;
</script>

<div class="h-full rounded-lg px-4 py-4 border border-backgroundSecondary bg-background flex gap-4 min-w-[300px] max-w-[300px] snap-start">
    <img class="aspect-square w-14" src={restaurant.image} alt={restaurant.name} />

    <div class="h-full py-1.5 flex flex-col justify-between items-start">
        <p class="font-semibold text-lg">{restaurant.name}</p>
        <p class="text-sm text-primary-800">{restaurant.tags.join(", ")}</p>
    </div>
</div>
