<script lang="ts">
    export let item: any;
</script>

<div class="rounded-lg p-5 bg-backgroundSecondary text-left">
    <div class="flex justify-between items-center gap-2">
        <p class="text-2xl text-left font-semibold">{item.name}</p>
        <p class=" text-red-400 font-medium text-lg">${item.price}</p>
    </div>

    <p class="text-base text-primary-800 font-normal">{item.details}</p>
</div>