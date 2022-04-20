# lazyload.js
lazy loading all external javascripts

usage
```html
<script src="dist/browser/lazyload.js"></script>
<script>
  // scripts loaded when user scrolling page
  const lazy = new lazyload();
  // add global
  lazy.add('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.19.1/moment.min.js');
  // with callback
  lazy.add('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', function(){
    console.log(typeof jQuery);
  });
  // execute
  lazy.exec();
</script>
```