// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
export default {
    siteTitle: 'Paul2D',
    siteDescription: 'full stack web dev blog!',
    siteLogo: '/logo.png',
    themeColorLight: "#fafafa",
    themeColorDark: "#1d1f21",
    postsPerPage: 4,
    tags: [
        {
          name: "theme",
          color: "btn-warning",
          image: "/images/theme.jpg",
          order: 1,
        },
    ],
    tagsSettings: {
        order: "name", // name | count
        layout: "card", //button | card
        image: "",
        color: "btn-primary",
        countVisibility: true,
    },
    searchOptions: {
        includeScore: true,
        includeMatches: true,
        keys: [
          { name: "title", weight: 3 },
          { name: "description", weight: 2 },
        ],
    }
}