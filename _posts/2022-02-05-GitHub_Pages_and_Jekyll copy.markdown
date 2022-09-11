---
layout: post
title:  "GitHub Pages and Jekyll"
date:   2022-02-05 21:13:01 -0000
categories: Jekyll Update
tags: [jekyll, html, css, github]
---
Wow.  I have spent an inordinately long amount of time trying to get Jekyll working with [GitHub Pages][github-pages].  GH Pages is a fantastic product and usually super easy to use but something about it's function with Jekyll creates a weird nuance I don't understand.
<!--more-->

First I played with folder structure.  A blog post I read indicated one issue was not having CSS in the root directory structure with main.css under it.  Moving it didn't fix anything and while I haven't removed it yet, I suspect it actually does nothing right now.

I tried commenting in lines in config.yml for "root" or for "css" or "link" to reference a stylesheet and none of those did anything.

Finally I stumbled on an [article][article-baseurl] walking config.yml in more detail once I noticed empty url and baseurl fields.  Well, this article is USEFUL but not the final story.  While Michael's explanations for baseurl and url are correct, they didn't work for me.  Injecting, as suggested
{% highlight ruby %}
baseurl: "https://th3incredibl3hulk.github.io"
url: "/seven_timelines"
{% endhighlight %}

simply yields this URL structure for me:
{% highlight ruby %}
https://th3incredibl3hulk.github.io/seven_timelines/https://th3incredibl3hulk.github.io/seven_timelines/rest_of_your_site_pages
{% endhighlight %}

Don't ask me why, but it did.

After mucking with it for a while, I landed on this successfully:
{% highlight ruby %}
baseurl: "/seven_timelines"
url: "https://th3incredibl3hulk.github.io"
{% endhighlight %}

Now everything is FINALLY functioning as expected.  CSS is loading, site pages are referenceable and it still builds locally as well.


[github-pages]:https://pages.github.com/
[baseurl]:https://mademistakes.com/mastering-jekyll/site-url-baseurl/
