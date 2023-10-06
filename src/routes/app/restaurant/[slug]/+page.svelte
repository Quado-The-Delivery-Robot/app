<script lang="ts">
    import PageTitle from "$lib/components/pageTitle.svelte";
    import { onMount } from "svelte";
    onMount (()=>{
        const element = document.getElementById("background")!;
        element.style.backgroundColor="#002a06"
    })
</script>
<PageTitle>Subway</PageTitle>


