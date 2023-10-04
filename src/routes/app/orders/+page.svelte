<script lang="ts">
    import PageTitle from "$lib/components/pageTitle.svelte";
    import Order from "$lib/pages/app/orders/order.svelte";
</script>

<PageTitle>Orders</PageTitle>

<div class="flex-col flex gap-4">
    <Order order={{ status: "In progress", restaurant: { name: "Subway", colors: ["#002a06"] }, price: 25.25, details: `6" Italian w/ Ham` }} />
    <Order order={{ status: "Delivered", restaurant: { name: "Subway", colors: ["#002a06"] }, price: 25.25, details: `6" Italian w/ Ham` }} />
</div>
