<script lang="ts">
    export let restaurant: any;
</script>

<div class=" aspect-square rounded-md bg-backgroundSecondary px-4 py-4 bg-gradient-to-b from-green-800 to-green-900 border border-backgroundSecondary">
    <img class="aspect-square w-14" src={restaurant.icon} alt={restaurant.name} />
</div>
