<script lang="ts">
    type button = {
        name: string;
        url: string;
        image: string;
    };

    const BUTTONS: button[] = [
        {
            name: "Home",
            url: "/",
            image: "/images/home/outline.svg",
        },
        {
            name: "Orders",
            url: "/orders",
            image: "/images/shoppingBasket/outline.svg",
        },
        {
            name: "Settings",
            url: "/settings",
            image: "/images/settings/outline.svg",
        },
        {
            name: "Settings",
            url: "/settings",
            image: "/images/settings/outline.svg",
        },
    ];
</script>

<div class="absolute bottom-0 w-screen h-auto flex justify-between items-center pt-3.5 pb-5 px-9 z-10 bg-background" id="actionBar">
    {#each BUTTONS as button}
        <a href={button.url}>
            <img src={button.image} alt={button.name} class="w-full aspect-square h-7" />
        </a>
    {/each}
</div>
