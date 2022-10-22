<script>
    import Fuse from "fuse.js";
    import Config from '../config'
    import { each } from 'svelte/internal';
    import { onMount } from 'svelte'
    import { fly } from 'svelte/transition'

    export let posts
    let searchInput
    let searchValue = ''
    let timer = null
    let searchResults = []
    let showCounterResults = false

    onMount(() => {
		searchPosts()
        searchInput.focus()
	})

    let filteredPosts = Object.values(posts).filter((f) => f.frontmatter.draft != true)
                .map((p) => {
                    return {
                    title: p.frontmatter.title,
                    description: p.frontmatter.description,
                    pubDate: p.frontmatter.pubDate,
                    heroImage: p.frontmatter.image,
                    tags: p.frontmatter.tags,
                    url: p.url
                    };
                })           
    
    function clearSearch() {
        searchValue = ''
        searchResults = filteredPosts
        showCounterResults = false
        searchInput.focus()
    }

    async function searchPosts() {

        const fuse = new Fuse(filteredPosts, Config.searchOptions);
        searchResults = (searchValue.length === 0) ? filteredPosts : fuse.search(searchValue)

        if(searchValue.length === 0) {
            searchResults = filteredPosts
        } else {
            searchResults = fuse.search(searchValue)
            showCounterResults = true
        }

        searchResults = searchResults.map((post) => {
            return (post.item) ? post.item : post 
        })

    }

    function searchPostsDelayed() {  
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(() => {
            searchPosts()
        }, 500);
    }

    
</script>

<div class="form-control my-4">
    <div class="input-group flex flex-row">
      <input
        type="text"
        placeholder="search in posts..."
        class="w-full text-accent p-2 rounded outline-1 focus:outline"
        id="textSearch"
        bind:value={searchValue}
        on:keyup={searchPostsDelayed}
        bind:this={searchInput}
      />
      {#if searchValue.length > 0}
      <button
        id="clearButton"
        class="btn btn-square btn-error"
        style="margin-left: 10px;"
        on:click={clearSearch}
        in:fly={{x: 10, duration: 600}}   
        out:fly={{x: 10, duration: 300}}   
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </button>
      {/if}
    </div>
</div>
<div class="divider"></div>
{#if showCounterResults === true && searchValue.length > 0}
    <p class="text-accent font-bold my-2">
        <span>{searchResults.length} posts found for "{searchValue}"</span>
    </p>
{/if}
<slot />
{#if searchResults.length > 0}
<div id="posts" 
in:fly={{y: 50, duration: 500}}   
out:fly={{y: 50, duration: 500}}   
>
    {#each searchResults as post}
    <div class="flex flex-col mb-8">
        <h2 class="mb-4 text-xl title">
            <a href={post.url}>
                {post.title}
            </a>
        </h2>
        <div class="flex gap-4">
            <div class="flex text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <time
                datetime={post.pubDate}>
                    { new Date(post.pubDate).toLocaleDateString('en-us', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    }) }
                </time>
            </div>
            {#if post.tags.length > 0}  
            <div>
                <span>in: </span>
                <ul class="text-gray-500 inline">
                    {#each post.tags as tag, index}
                    <li class="inline text-accent">
                        {tag.toLowerCase()}
                        {#if index < post.tags.length - 1}
                        <span> | </span>
                        {/if}
                    </li>
                    {/each}
                </ul>
            </div>
            {/if}
        </div>
        <p class="my-2">{post.description}</p>
    </div>
    {/each}
</div>
{:else}
<div>
    No results found for "{ searchValue }"
</div>
{/if}
