<script lang="ts">
    export let order: any;
</script>

<div class="rounded-lg p-5 bg-backgroundSecondary text-left">
    <p class="text-2xl text-left font-semibold">{order.restaurant.name}</p>

    <div class="flex justify-start items-center gap-2 mb-2">
        {#if order.status == "In progress"}
            <div class="inProgressIndicator aspect-square h-2.5 bg-brand rounded-full" />
        {/if}

        <p class="text-primary font-medium text-lg">{order.status}</p>
        <div class="h-[1px] w-6 bg-white" />
        <p class="text-primary font-medium text-lg">${order.price}</p>
    </div>

    <p class="text-base text-primary-800 font-normal">{order.details}</p>
</div>

<style>
    .inProgressIndicator {
        animation: inProgressIndicator 1s ease infinite alternate;
    }

    @keyframes inProgressIndicator {
        0% {
            opacity: 0%;
        }

        100% {
            opacity: 100%;
        }
    }
</style>
