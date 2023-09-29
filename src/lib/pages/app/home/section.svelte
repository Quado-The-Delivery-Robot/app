<script lang="ts">
    import SectionHeader from "./sectionHeader.svelte";
    import SectionBody from "./sectionBody.svelte";

    export let endpoint: string;
    export let sectionName: string;
</script>

<div class="w-full">
    <SectionHeader {sectionName} />
    <SectionBody {endpoint} />
</div>
