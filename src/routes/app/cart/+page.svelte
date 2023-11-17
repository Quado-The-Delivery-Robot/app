<script lang="ts">
    import PageTitle from "$lib/components/pageTitle.svelte";
    import { PUBLIC_ENDPOINT } from "$env/static/public";

    function testOrder() {
        fetch(PUBLIC_ENDPOINT + "/v1/orders/new", {
            method: "POST",
            body: JSON.stringify({
                restaurant: "subway",
                items: [
                    {
                        id: 0,
                        quantity: 1,
                    },
                ],
            }),
        });
    }
</script>

<PageTitle>Cart</PageTitle>

<button on:click={testOrder}>Place test order</button>
