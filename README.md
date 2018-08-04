# B'ware of Cookies!

Customizeable Webcomponent to inform your users about cookies on your website.

**This project has no tests!
I built it to gain a bit more confidence with custom elements.
Usage in Production Systems at your own risk!**

## Requirements

Since this is a Webcomponent, a technology which isn't fully supported in all browsers by now (See [here](https://caniuse.com/#feat=custom-elementsv1)),
you will need some Polyfills to use this.  
You can find more information about this [here](https://www.webcomponents.org/polyfills/).

## Usage

Setup

```html
<script src="src/index.js" charset="utf-8" async></script>
```

Basic usage

```html
<bware-of-cookies></bware-of-cookies>
```

Using your own info text

```html
<bware-of-cookies>
  This side is using delicious cookies! More info about it can be found in our <a href="#">privacy policy</a>.
</bware-of-cookies>
```

Custom Button text

```html
<bware-of-cookies data-button-text="I understand">
  This side is using delicious cookies! More info about it can be found in our <a href="#">privacy policy</a>.
</bware-of-cookies>
```

Custom Events

If the user clicks the button an event named `boc-accept` will be dispatched.
You can add an Event listener that listenes to that event e.g. to save the users' acknowledgement.

Example event handler

```html
<script type="text/javascript">
  document.addEventListener('boc-accept', () => {
    // Your event handling
  });
</script>
```

## Customization

Most parts of the Webcomponent are not styled. You can add your own styles by adding css-styles for following classes:

- `.boc__slot`: The container which will contain the info text
- `.boc__btnwrapper`: A Wrapper div containing the Button for the users' acknowledgement
- `.boc__btn`: The Button for the users' acknowledgement

Following classes already contain some styling, that could be overwritten:

- `.boc`: The area / element that contains everything else
- `.boc--hide`: A modifier class to hide the element. Get's appended on button-click

## Development

To make development a little bit more comfortable you can use BrowserSync.
Its usage is already prepared. To start it simply run `npm start`.
Your Browser will open automatically and reload on any change.
