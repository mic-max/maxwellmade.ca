---
layout: base
---

![Maxwell Made Logo](/assets/img/logo.png)

Welcome to Maxwell Made, where we bring your ideas to life. Most wood sourced locally and sustainably from [The WoodSource](https://wood-source.com).

Prices shown in CAD with tax included.
Currently only doing Ottawa area sales (haven't shipped anything). Canada wide is coming. I will need to check rules for selling to USA.
I currently only accept e-transfers to the email address TODO for payment. Please include in the description all products being purchased.

Let me know if you would like to customize the wood for a piece. I can easily acquire anything from [The WoodSource](https://wood-source.com/product-category/lumber-timbers/dressed-lumber/) or [KJP Select Hardwoods](https://kjpselecthardwoods.com/collections/s4s-lumber-thick), prices will be adjusted accordingly.

Out of stock items will have a lead time for me to buy the wood and build the piece.

<hr>

{% for x in site.pieces %}
  <div>
    <h4 style='display: inline;'>{{ x.title }}</h4>
    <p style='float: right;'>${{ x.price }}</p>
  </div>
  {% for src in "/assets/img/{{ x.src }}" %}
    <img src="/assets/img/{{ src }}"/>
  {% endfor %}

  {{ x.content | markdownify }}
{% endfor %}

<hr>

[Instagram](https://instagram.com/maxwellmade_)
[YouTube](#)
