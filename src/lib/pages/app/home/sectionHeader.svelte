<script lang="ts">
    export let sectionName: string;
</script>

<div class="flex justify-between items-center mb-1">
    <p class="text-lg">{sectionName}</p>
    <a href="/all" class="flex items-center text-base text-primary-700">See all <img src="/images/arrowRight.svg " alt="arrow facing right" /></a>
</div>
