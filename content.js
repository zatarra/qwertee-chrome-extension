/*
  "Developed" by David Gouveia <david.gouveia [_at_] gmail.com>
  https://www.davidgouveia.net
*/

//After inspecting DOM it's pretty clear that the prices are simply hidden. Switching frim display: none to display:block is enough to see all the prices.

var css = '.hover-info { display: block !important; } .product-price { display: block !important; } .price { display: block !important }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);
