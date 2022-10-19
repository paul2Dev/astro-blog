<script setup>
import { ref, onMounted } from 'vue'
import Fuse from "fuse.js";
import Config from '../config'

const props = defineProps({
    posts: Array
})

onMounted(() => {
    searchPosts()
})

const search = ref('')
const timer = ref(null)
const searchResults = ref([])
const showCounterResults = ref(false)

const posts = Object.values(props.posts).filter((f) => f.frontmatter.draft != true)
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
    search.value = ''
    searchResults.value = posts
    showCounterResults.value = false
}

async function searchPosts() {

    const fuse = new Fuse(posts, Config.searchOptions);
    searchResults.value = (search.value.length === 0) ? posts : fuse.search(search.value)

    if(search.value.length === 0) {
        searchResults.value = posts
    } else {
        searchResults.value = fuse.search(search.value)
        showCounterResults.value = true
    }

    searchResults.value = searchResults.value.map((post) => {
        return (post.item) ? post.item : post 
    })

}

function searchPostsDelayed() {  
    if (timer.value) {
        clearTimeout(timer.value);
        timer.value = null;
    }
    timer.value = setTimeout(() => {
        searchPosts()
    }, 600);
}

</script>

<template>
    <div class="form-control my-4">
        <div class="input-group flex flex-row">
          <input
            type="text"
            placeholder="search in posts..."
            class="w-full text-accent p-2 rounded outline-1 focus:outline"
            id="textSearch"
            v-model="search"
            @keyup="searchPostsDelayed"
          />
          <button
            id="clearButton"
            class="btn btn-square btn-error"
            style="margin-left: 10px;"
            @click="clearSearch"
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
        </div>
    </div>
    <div class="divider"></div>
    <p class="text-accent font-bold my-2" v-if="showCounterResults">
        <span>{{ searchResults.length }} posts found for "{{ search }}"</span>
    </p>
    <slot />
    <div id="posts" v-if="searchResults.length > 0">
        <div class="flex flex-col mb-8" v-for="(post, index) in searchResults" :key="index">
            <h2 class="mb-4 text-xl title">
                <a :href="post.url">
                    {{ post.title}}
                </a>
            </h2>
            <div class="flex gap-4">
                <div class="flex text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <time
                    datetime={{post.pubDate}}>
                        {{ new Date(post.pubDate).toLocaleDateString('en-us', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                        }) }}
                    </time>
                </div>  
                <div v-if="post.tags.length > 0">
                    <span>in: </span>
                    <ul class="text-gray-500 inline">
                        <li v-for="(tag, index) in post.tags" :key="index" class="inline text-accent">
                            {{ tag.toLowerCase() }}
                            <span v-if="index < post.tags.length - 1"> | </span>
                        </li>
                    </ul>
                </div>
            </div>
            <p class="my-2">{{ post.description }}</p>
        </div>
    </div>
    <div v-else>
        No results found for "{{ search }}"
    </div>
</template>