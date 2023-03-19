<script>
    import { fly } from 'svelte/transition'
    import { onMount } from 'svelte';

    export let content
    export let headings

    let ready = false;
    onMount(() => ready = true);
</script>

{#if ready}
<main class="sm:grid sm:grid-cols-1 sm:gap-x-10 sm:items-start"
in:fly={{y: 50, duration: 500}}   
out:fly={{y: 50, duration: 500}}   
>
    <article>
        {#if content.heroImage}
        <img
                width="720"
                height="360"
                src={content.heroImage}
                alt=""
                class="mb-4"
            />
        {/if}
        <h1 class="title mb-4">{content.title}</h1>
        {#if content.pubDate}
            <time class="text-gray-500">{content.pubDate}</time>
        {/if}
        <slot name="tags-list"/>
        <hr/>
        <div class="mt-5 prose-sm prose-cactus prose-headings:font-semibold prose-headings:before:content-['#'] prose-headings:before:text-accent prose-headings:before:absolute prose-headings:before:-ml-4 prose-th:before:content-none">
            <slot name="content"/>
        </div>
    </article> 
    <!-- <aside
    class="invisible hidden text-right sm:sticky sm:top-20 sm:block sm:visible"
    >
        <h2 class="font-semibold">Table of Contents</h2>
        {#if headings.length > 0}
        <ul class="mt-4 text-xs space-y-2">
            {#each headings as {slug, text}}
                <li class="line-clamp-2 hover:text-accent">
                    <a href={`#${slug}`} aria-label={`Scroll to section: ${text}`}>
                        <span>&#35;</span> {text}
                    </a>
                </li>
            {/each}
        </ul>
        {/if}
    </aside> -->
</main>
{/if}