# B'ware of Cookies!

Customizeable Webcomponent to inform your users about cookies on your website.

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

## Why a webcomponent?

## Development
