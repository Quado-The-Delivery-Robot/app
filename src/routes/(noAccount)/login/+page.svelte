<script lang="ts">
    import Title from "$lib/pages/login/title.svelte";
    import Login from "$lib/pages/login/login.svelte";
    import Footer from "$lib/pages/login/footer.svelte";
    import Dots from "$lib/pages/login/dots/dots.svelte";
</script>

<div class="bg-gradient-to-b from-backgroundSecondary to-background w-screen h-screen">
    <div class="absolute z-[3] w-screen h-screen">
        <Title />
        <Login />
        <Footer />
    </div>

    <Dots />
</div>
