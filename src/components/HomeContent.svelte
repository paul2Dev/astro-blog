<script>
    import { fly } from 'svelte/transition'
    import { onMount } from 'svelte';

    let ready = false;
    onMount(() => ready = true);
</script>

{#if ready}
<div class="space-y-6"
in:fly={{y: 50, duration: 500}}   
out:fly={{y: 50, duration: 500}}   
>
    <section class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <img alt="paul2D" class="rounded-full w-32 overflow-hidden mb-4 self-center" src="/about_me.jpg" loading="eager" decoding="async" width="320" height="320">
        <div class="max-w-lg sm:my-0 sm:order-first">
          <p class="w-full font-normal leading-7 sm:max-w-sm md:max-w-xl">
            Hi, my name is Paul, i'm a web developer with 13+ years experience in modern web technology stack.
            i enjoy experimenting new web technologies in my free time and test on new projects.
          </p>
          <slot name="social-list" />
        </div>
    </section>
    
    <section class="mb-14 sm:mb-14">
        <h2 class="mb-4 text-2xl font-bold tracking-tight">
          Technologies that i use frequently
        </h2>
        <p class="w-full mb-8 font-normal leading-7">
          I enjoy to find, explore and test new libraries and frameworks. Below
          is a list of technologies that I've used everyday at work or on my personal projects.
        </p>
        <slot name="skills-list" />
    </section>

    <section class="mb-8 sm:mb-14">
        <h2 class="mb-4 text-2xl font-bold tracking-tight">
          Projects
        </h2>
        <p class="w-full mb-8 font-normal leading-7">
            Most of my projects are done over the weekend, because i work a full time job, or in weekdays after work when i'm in the mood.
        </p>
        <p>
            Feel free to clone or fork my
            <a
                class="inline-block cactus-link"
                href="https://github.com/paul2Dev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="github repository"
            >
                repos
            </a> if you found something useful! 😉
        </p>
    </section>
</div>
{/if}