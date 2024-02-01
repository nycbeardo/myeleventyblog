---
layout: base-layout.njk
pagination:
  data: collections.post
  size: 15
  reverse: true
  alias: posts
---
<br>
<br>
<p id="subtitle">Welcome to my blog/digital moodboard</p>
<p id="subtitle1">This is where you'll see my musings on being a technologist. I blog about the things I learn, what inspires me, and an assortment of randomness.</p>
<br>

{% for post in posts %}
  <article>

    <h1>
      <a href="{{ post.url | url }}">{{ post.data.title }}</a>
    </h1>

    <time datetime="{{ post.date | dateIso }}">{{ post.date | dateReadable }}</time>

    {% excerpt post %}


    

  </article>
{% endfor %}