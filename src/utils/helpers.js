export function generateSlug(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w\-]+/g, '')
      .replace(/\-\-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  }

  export function getAllTags(allPosts) {
    let allTags = allPosts
      .filter((f) => f.frontmatter.tags != undefined && f.frontmatter.draft != true)
      .map((p) => p.frontmatter.tags)
      .reduce((a, b) => {
        return a.concat(b)
      }, []);


    const uniqueTags= Object.entries(
        allTags.reduce((a, b) => {
        a[b] = (a[b] || 0) + 1;
        return a;
      }, {})
    ).map(([k, v]) => ({ 
        name: k,
        count: v,
        slug: generateSlug(k),
    }));

    return uniqueTags
  }
  
  export function getTagData(Tags) {
    let tagData = [];
    Tags.forEach((tag) => {
      tagData.push({
        name: tag,
        slug: `${generateSlug(tag)}`,
      });
    });
    return tagData;
  }