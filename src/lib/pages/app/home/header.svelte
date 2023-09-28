<script lang="ts">
    import { page } from "$app/stores"
</script>

<h1 class="text-6xl mb-4 p-2 mt-5">Hello, {$page.data.session?.user?.name}</h1>
