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
That being said, the easiest way to make this work was to make a button and write some script with functions that would trigger a shift when the user clicks on the button. 

![darkmode](https://images2.imgbox.com/1c/6e/eMJlKXTo_o.png)

As you see the function darkToggle has two functions that will be called when the button is clicked. Mode() will trigger as soon as the user clicks the button for dark/light mode while Toggle() will save the user's choice in localStorage and when the page is reloaded the script will fetch the selected mode, applying it in your browser.

Styling was pretty easy as it required adding additional selectors in CSS whose elements are targeted by the script written, defining what that should look like when the user clicks on the button. 

I mostly stayed within the rules of Brutalist design, which calls for links to be made obvious through the use of easy-to-read fonts, no pretty pictures, just words.

![darkmode2](https://images2.imgbox.com/7e/55/umEGZih4_o.png)

And that's it. My repo shows more details about implementation. Recently I switched over to compiling in SASS so that my site builds it out as CSS but the concept is pretty much the same and easy to read. Hit up the Github link to take a look.
