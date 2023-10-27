<script lang="ts">
    import anime from "animejs";
    import { onMount } from "svelte";

    let container: HTMLDivElement;

    	
  $: checkTrue = () => {
		console.log("checkTrue()");
		
	}

    onMount(() => {
        setTimeout(() => {
            anime({
                targets: container,
                backgroundColor: ["#FFF", "#000"],
                duration: 5000,
                easing: "easeInOutQuad",
            });
        }, 5000);

    });
</script>

<div class=" absolute w-screen h-1/2 bottom-0 z-10" bind:this={container}  />

