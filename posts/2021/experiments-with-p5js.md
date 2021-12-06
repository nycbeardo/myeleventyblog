---
layout: post-layout.njk 
title: Color Experiments with p5.js
date: 2021-12-06
tags: 'post'
---
<!-- Excerpt Start -->
***Continuing my focus on improving my skillset through creative coding...***
<!-- Excerpt End -->

Continuing my focus on improving my skillset through creative coding, I decided to take the plunge into learning one of the more interesting JavaScript libraries that exists, aka p5.js. 

[**p5.js**](https://p5js.org/) is used by programmers, artists, and students to learn JavaScript through creative coding and it is one of the most accessible libraries out there that regardless of your skill level you can pick it up via the robust documentation provided by the Processing foundation.

As someone who always had a passion for art and design before entering into tech, naturally this piqued my interest. This wasnt the first time I dealt with p5 and processing, as I had experience with it in college but there's a difference between being made to do something and organically discovering how to do it on your own. 

With that being said the key for me was to go straight to the documentation and read it for myself. This helped me get a grasp of the things that I wanted to do with p5.js and how I could go about building it out. 

Creative coding though more art focused still requires you as a programmer to learn how to identify a problem and apply the solutions you need to solve that problem.

So after a few weeks of playing with p5 in both the live editor and in VS code (which I'll provide you ways to set it up on your local machine), I decided to make something a little bit more fancier than just 2d primitives moving around via GraphGL. 

Before we get into that there are two ways for you to go about using p5 right out the gate: 

### 1. Using the browser editor: 

On the [**p5**](https://p5js.org/  "home page for p5") home page you'll find a link to use the editor if you want to play with it right away without any unneccessary hurdles. In my opinion this is a good way to find out if you want to continue playing with it on your local machine or not.

!["p5 editor"](https://images2.imgbox.com/cc/4d/jsnwWu4L_o.png)

### 2. Using VS Code: 

Now for those who like a little risk...

!["risky risky"](https://media1.giphy.com/media/AZ1PPDF8uO9MI/giphy.gif?cid=ecf05e471aww5hi7b7q9e3cu9drcab9b2qp4a05d8uj0jvc7&rid=giphy.gif&ct=g)

I would explain the steps myself but I feel this video would do the trick.
[**Tim Rodenbröker**](https://twitter.com/timrodenbroeker) is considered one of the best generative artists and creative programmers, and does a wonderful job of explaining how to set up your local environment to build in p5.js using VS Code: 

[![Blinking LEDs](https://images2.imgbox.com/d7/d8/cH6Ni2Cl_o.png)](http://www.youtube.com/watch?v=vj9nDja8ZdQ "Blinking LEDs")

Once you set that up, you'll be on your way to building projects on your local machine instead of relying on the online editor.


The sky is the limit when it comes to what you want to create, although it wouldn't hurt to brainstorm some ideas or search the web for inspiration before jumping right in. 
To visualize an example of that I'll show you what I been playing with as of late. 

!["color grid"](https://images2.imgbox.com/9f/b9/9WBjLP2b_o.gif)

What you're seeing is a piece of generative art created using p5.js and displyed in HTML. I got the inspiration from a few projects I've seen online, and expanded on the features of the grid itself without compromising it's basic structure. 

While it appears that it is moving on its own without any additional input from me, this piece of code is the one that's resposible for the "randomness" you're seeing in the screenshot:

!["code snippet"](https://images2.imgbox.com/aa/06/RU2CSMir_o.png)

As you can see, you'll see the word random appears three times. The first two times the random function is declared to control the individual cells on the x and y cooridnates, and the third time determines the colors defined in the array I set for the squares. In p5, when the random function is called, it returns a random value every time. This is what we want if we're trying to create visual pieces without any predetermined values defined in your code.

For more of a look at the rest of the code you can check out my repo [**here**](https://github.com/nycbeardo/p5colours) and take a shot at creating your own version if you choose.