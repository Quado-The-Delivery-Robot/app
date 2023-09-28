<script lang="ts">
    import HomeIcon from "../images/home.svelte";
    import SettingsIcon from "../images/settings.svelte";
    import BasketIcon from "../images/basket.svelte";
    import PlusIcon from "../images/plus.svelte";
</script>

<div class="absolute bottom-0 w-screen h-auto flex justify-between items-center px-10 z-10 bg-background border-t border-backgroundSecondary children:pt-3 children:pb-6" id="actionBar">
    <a href="/">
        <HomeIcon classes="aspect-square h-7 fill-brand-600" />
    </a>

    <a href="/orders">
        <BasketIcon classes="aspect-square h-7 fill-brand-600" />
    </a>

    <div>
        <div class="h-7 aspect-square relative">
            <button class="border-[2px] border-backgroundSecondary absolute -translate-y-[calc(50%_+_0.875rem)] left-1/2 -translate-x-1/2 bg-brand-600 rounded-xl rotate-45 p-1" id="quickActionButton">
                <PlusIcon classes="aspect-square h-9 -rotate-45 fill-black" />
            </button>
        </div>
    </div>

    <a href="/settings">
        <SettingsIcon classes="aspect-square h-7 fill-brand-600" />
    </a>

    <a href="/settings">
        <SettingsIcon classes="aspect-square h-7 fill-brand-600" />
    </a>
</div>
