<script lang="ts">
    import PageTitle from "$lib/components/pageTitle.svelte";
    import Order from "$lib/pages/app/orders/order.svelte";
    import type { order } from "$lib/types";

    export let { orders }: { orders: order[] } = { orders: [] };
</script>

<PageTitle>Orders</PageTitle>

<div class="flex-col flex gap-4">
    {#if orders.length == 0}
        <p>Try ordering something!</p>
    {:else}
        {#each orders as { status, restaurant, items, price }}
            <Order order={{ status, restaurant, price, details: items.join(", ") }} />
        {/each}
    {/if}
</div>
