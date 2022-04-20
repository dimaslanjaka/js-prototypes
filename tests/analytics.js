lazy.add('https://www.googletagmanager.com/gtag/js?id=UA-106238155-1', function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  console.log('google analystic loaded');
  gtag('config', 'UA-106238155-1');
});