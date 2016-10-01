# qwertee-chrome-extension
Chrome extension to reveal the price of all the tshirts without having to hover images first. 

## How does it work ?
This is a pretty basic chrome extension. If you open qwertee.com and inspect DOM, you'll see that the prices are there, but all of them are hidden and waiting you to hover the images which will make it seitch from display:none to display:block.

What this extension does is to set the display mode of the price elements to "block" instead of none and do it with a higher priority so that it doesn't get removed anymore.
