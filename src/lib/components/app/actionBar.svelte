<script lang="ts">
    import HomeIcon from "../images/home.svelte";
    import SettingsIcon from "../images/settings.svelte";
    import CartIcon from "../images/cart.svelte";
    import PlusIcon from "../images/plus.svelte";
    import HistoryIcon from "../images/history.svelte";

    export let actionBar: HTMLDivElement;
</script>

<div class="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-[650px] w-screen h-auto flex justify-between items-center px-10 z-10 backdrop-blur-lg backdrop-brightness-[0.1] children:pt-3 children:pb-6" id="actionBar" bind:this={actionBar}>
    <a href="/app">
        <HomeIcon classes="aspect-square h-7 fill-brand-600" />
    </a>

    <a href="/app/cart">
        <CartIcon classes="aspect-square h-7 fill-brand-600" />
    </a>

    <div class="px-2">
        <div class="h-7 aspect-square relative">
            <button class="border border-backgroundSecondary absolute -translate-y-[calc(50%_+_0.1rem)] left-1/2 -translate-x-1/2 bg-brand-600 rounded-xl rotate-45 p-1" id="quickActionButton">
                <PlusIcon classes="aspect-square h-9 -rotate-45 fill-black" />
            </button>
        </div>
    </div>

    <a href="/app/orders">
        <HistoryIcon classes="aspect-square h-7 fill-brand-600" />
    </a>

    <a href="/app/settings">
        <SettingsIcon classes="aspect-square h-7 fill-brand-600" />
    </a>
</div>
