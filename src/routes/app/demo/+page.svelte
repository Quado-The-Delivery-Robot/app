<script lang="ts">
    import { page } from "$app/stores";

    async function sendRequest() {
        const a = await fetch("/api/order/new", {
            method: "POST",
            body: JSON.stringify({
                restaurant: "Subway",
                order: [
                    {
                        id: 1,
                        quanity: 1,
                    },
                ],
            }),
        });
        console.log(await a.json());
    }
</script>

<button class="bg-black" on:click={sendRequest}>place order</button>
