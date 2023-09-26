<script lang="ts">
    import SectionHeader from "./sectionHeader.svelte";
    import SectionBody from "./sectionBody.svelte";

    export let endpoint: string
    export let sectionName: string
</script>

<div class="px-7">
    <SectionHeader {sectionName} />
    <SectionBody {endpoint}/>
</div>
