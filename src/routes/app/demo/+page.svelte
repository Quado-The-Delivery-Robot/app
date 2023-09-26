<script lang="ts">
    async function sendRequest() {
        const a = await fetch("/api/restaurants/recommended");
        console.log(await a.json());
    }
</script>

<button class="bg-black" on:click={sendRequest}>place order</button>
