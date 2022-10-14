---
layout: "../../layouts/BlogPost.astro"
title: "Integrate google analytics in Astro using Partytown"
description: "how to integrate google analytics in your astro project using partytown integration."
pubDate: "Oct 14 2022"
heroImage: "/posts/partytown-media.png"
tags: ['Astro']
--- 

If you’re using third-party scripts like google analytics, Partytown is a great tool to make sure that they don’t slow down your site.

In this tutorial you will learn how to add google analytics to your project using Partytown integration.

## Install partytown package

in your astro project run this command.

```bash
npm install -D @astrojs/partytown
```

## Configure partytown in astro

add partytown integration to your astro project in <code>**astro.config.mjs**</code>.

```javascript
import { defineConfig } from "astro/config";
import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
```

this configuration will allow **Partytown** to forward all events to **Google Analytics** using window.dataLayer.

## Add google analytics code

next add google analytics code in your <code>head</code> section of your html template.

```html
<!-- head -->
<script
  type="text/partytown"
  src="https://www.googletagmanager.com/gtag/js?id=MEASURMENT_ID"
>

</script>
<script type="text/partytown">
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "MEASURMENT_ID");
</script>
```
- replace the <code>MEASURMENT_ID</code> with your own google analytics tracking ID.
- add a <code>type="text/partytown"</code> to your scripts to tell partytown which script tags to handle.

and that's it :D,  you now have google analytics integrated in your astro project.

you can test it in your google analytics real time dashboard to see that it's recording traffic.



