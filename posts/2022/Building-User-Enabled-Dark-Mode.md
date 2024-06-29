---
layout: post-layout.njk 
title: Building User Enabled Dark Mode
date: 2022-01-11
tags: 
    - tech
    - post
---
<!-- Excerpt Start -->
***Using CSS and a bit of Javascript magic***
<!-- Excerpt End -->

At some point I decided I wanted a different look for my site without going through the process of building out a whole new theme for it. 
With that in mind, I wanted to accomplish two things: 

![simple](https://media3.giphy.com/media/DxqtKPX2raC83hZRtS/giphy.gif?cid=ecf05e4777b3kfmci7jmq2rdsum3n8n3k17sunwskr79au34&rid=giphy.gif&ct=g)

### Goal one: KISS (Keep It Simple Stupid):
<br>
<br>
You probably heard this before either online or from other devs. It's self explanatory. I kept this in mind when I wrote down exactly how I wanted this feature implemented.
<br>
<br>

![button press](https://media1.giphy.com/media/3miMttP8bhKwjoms69/giphy.gif?cid=ecf05e47xfpn167yqwtl4ko75mydv58ov4o2qxnx9wr4l0t0&rid=giphy.gif&ct=g)
### Goal two: Make it User-Friendly:
<br>
<br>
This was important as I wanted to keep the user in mind. When you visit my site, you don't have to feel forced to view it in one theme. I kept in mind the fact that there are some dark mode haters out here lurking on the web, as well as people who may want to read it in a normal light mode for whatever reason they choose. You have a choice. No need to feel locked in.
<br>
<br>

The simplest approach to achieve this functionality was to create a button and write a script with functions that trigger the shift when the button is clicked.

![darkmode](https://images2.imgbox.com/1c/6e/eMJlKXTo_o.png)

When the `darkToggle` function is invoked by clicking the button, it performs two actions. The `Mode()` function switches the interface between dark and light modes instantly upon the user's click. Meanwhile, the `Toggle()` function saves the user's preference in `localStorage`, ensuring that the chosen mode is retained and reapplied when the page is reloaded.

Styling this feature was straightforward. It involved adding extra selectors in the CSS to target elements modified by the script, specifying their appearance based on the user's selection.

I adhered mostly to the principles of Brutalist design, which emphasizes clear, readable fonts and straightforward links without decorative images, focusing solely on text.

![darkmode2](https://images2.imgbox.com/7e/55/umEGZih4_o.png)

And that's it! For more detailed implementation, check out my repository. Recently, I've switched to using SASS for compiling my CSS, making the site build process more streamlined while maintaining readability. Feel free to explore the GitHub link for a closer look.
