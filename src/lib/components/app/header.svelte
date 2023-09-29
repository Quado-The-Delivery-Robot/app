<script lang="ts">
    import { page } from "$app/stores";
</script>

<div class="w-full mb-6 flex justify-between items-center">
    <div class="text-left">
        <p class="text-lg">Welcome, {$page.data.session?.user?.name}</p>
    </div>

    <img class="aspect-square h-9 rounded-full border border-backgroundSecondary" src={$page.data.session?.user?.image} alt={$page.data.session?.user?.name} />
</div>
