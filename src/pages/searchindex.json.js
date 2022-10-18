export async function get() {
    let posts = await import.meta.globEager(`./posts/*.md`);
    return {
      body: JSON.stringify(
        Object.values(posts)
          .filter((f) => f.frontmatter.draft != true)
          .map((p) => {
            return {
              title: p.frontmatter.title,
              description: p.frontmatter.description,
              pubDate: p.frontmatter.pubDate,
              heroImage: p.frontmatter.image,
              tags: p.frontmatter.tags,
              url: p.url
            };
          }),
        false,
        1
      ),
    };
  }