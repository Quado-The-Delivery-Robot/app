<script lang="ts">
    export let restaurant: any;
</script>

<div class="aspect-square rounded-lg px-4 py-4 border border-backgroundSecondary bg-no-repeat bg-cover" style="background-color: {restaurant.colors[0]};">
    <img class="aspect-square w-14" src={restaurant.image} alt={restaurant.name} />
</div>
