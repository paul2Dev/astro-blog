<script>
    import { fly } from 'svelte/transition'
    import { onMount } from 'svelte';

    export let content

    let ready = false;
    onMount(() => ready = true);
</script>

{#if ready}
<main class="sm:grid sm:grid-cols-[1fr] sm:gap-x-10 sm:items-start"
in:fly={{y: 50, duration: 500}}   
out:fly={{y: 50, duration: 500}}   
>
    <article>
        {#if content.heroImage}
        <img
            width="720"
            height="360"
            src={content.heroImage}
            class="rounded-lg"
            alt=""
        />
        {/if}
        <h1 class="title my-4">{content.title}</h1>
        <slot name="tags-list" />
        
        <hr/>
        <div class="mt-5 prose-sm prose-cactus prose-headings:font-semibold prose-headings:before:content-['#'] prose-headings:before:text-accent prose-headings:before:absolute prose-headings:before:-ml-4 prose-th:before:content-none">
            <slot name="content" />
        </div>
        <ul class="flex flex-wrap gap-2 text-bgColor mt-2">
            {#if content.repoUrl}
            <li class="flex items-center justify-center px-1 rounded-sm bg-accent font-bold">
                <a href={content.repoUrl} target="_blank">GitHub Repo</a>
            </li>
            {/if}
            {#if content.demoUrl}
            <li class="flex items-center justify-center px-1 rounded-sm bg-accent font-bold">
                <a href={content.demoUrl} target="_blank">DEMO</a>
            </li>
            {/if}
        </ul>
    </article>
</main>
{/if}