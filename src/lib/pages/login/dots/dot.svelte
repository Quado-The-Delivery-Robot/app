<script lang="ts">
    import { onMount } from "svelte";
    import anime from "animejs";

    let dot: HTMLDivElement;

    function getRandom(size: number): number {
        return Math.random() * size;
    }

    function animate() {
        const left: number = getRandom(window.innerWidth);
        const top: number = getRandom(window.innerHeight);
        const distance: number = (left ^ 2) + (top ^ 2);

        anime({
            targets: dot,
            duration: distance / 0.1,
            easing: "linear",
            left: `${left}px`,
            top: `${top}px`,
            complete: animate,
        });
    }

    onMount(() => {
        dot.style.left = `${getRandom(window.innerWidth)}px`;
        dot.style.top = `${getRandom(window.innerHeight)}px`;

        animate();
    });
</script>

<div class="absolute w-[30px] aspect-square rounded-full bg-brand-600" bind:this={dot} />
