#ELLIE TEMPLATE FOR GHOST
Get Ghost [Here](https://en.ghost.org) ( its awesome )

![Ellie](http://i39.tinypic.com/2dub0k6.png)

<hr>

## how to install
* Download Ellie and place her inside /content/themes/
* Restart your instance of ghost
* Goto your blog settings and choose ellie from the themes dropdown.

## how to set a main image for a blog post.

Ellie allows you to upload an image which will be used as the posts featured image in the header. To set a posts main image simply set an image at the start of your post with a name ( alt-tag ) of 'main-image'.

```
![main-image]
```

## Navigation
The navigation links are setup in /partials/links.hbs.

```
<nav>
	<a href="http://www.thomascullendesign.com">Home</a>
	<a href="http://www.thomascullendesign.com">My Work</a>
	<a href="http://www.thomascullendesign.com">About Me</a>
	<a href="{{@blog.url}}">My Thoughts</a>
</nav>
```

The social links in the footer are setup in /partials/socialLinks.hbs.

```
<ul id="social-links">
	<a href="http://www.twttier.com/thomascullen92">Twitter</a>
	<a href="https://github.com/Thomascullen92">Github</a>
	<a href="{{@blog.url}}/rss">Subscribe</a>
</ul>
```

## License
MIT
