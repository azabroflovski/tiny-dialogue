# Dialogue 

![GitHub Repo stars](https://img.shields.io/github/stars/azabroflovski/tiny-dialogue)
![GitHub Release](https://img.shields.io/github/v/release/azabroflovski/tiny-dialogue?label=version)
![GitHub deployments](https://img.shields.io/github/deployments/azabroflovski/tiny-dialogue/github-pages)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/azabroflovski/tiny-dialogue/.github%2Fworkflows%2Fstatic.yml)
![NPM Downloads](https://img.shields.io/npm/dm/tiny-dialogue)

## Installation

Package is available on npm and can be installed from the command line.
```shell
$ npm i tiny-dialogue
```
### via CDN
You can also download or link to the latest compiled version using the CDN.

```shell
https://unpkg.com/tiny-dialogue/dist/tiny-dialogue.min.js
```

## Usage

See simple usage with attribute based modals.

```typescript
import { initSimpleMode } from 'tiny-dialogue'

initSimpleMode() // enable simple mode (attrs handling)
```

```html
<!-- pass `dialog` selector in attr -->
<button data-modal-open="dialog">Show modal</button>

... 

<dialog>
    <h2>Dialogue</h2>
    <p>Hello, click on OK to close modal.</p>
    <button data-modal-close>OK</button>
</dialog>
```
> Appearance
The original modal window doesn't have any styles, so you'll need to style
the dialog box yourself or use ready-made themes, or even write your own theme.

## Multiple modals

```html
<button data-modal-open="#first">Open first</button>
<button data-modal-open="#second">Open second</button>

... 

<dialog id="first">
    <h2>First!</h2>
    <p>Hello, click on OK to close modal.</p>
    <button data-modal-close>OK</button>
</dialog>

<dialog id="second">
    <h2>I am second</h2>
    <p>Hello, click on OK to close modal.</p>
    <button data-modal-close>OK</button>
</dialog>
```

## Pass props
You can modify the behavior of the modal window by passing parameters
to the dialog box. It's very simple. Let's look at an examples:

---

### Disable `esc` closing

By default, an open dialog box can be closed using `esc`.
We can prevent this by passing the parameter `disable-esc`.

```html
<button data-modal-open="dialog">Open modal</button>

... 

<dialog disable-esc>
    <h2>Hello</h2>
    <p>Pressing <code>esc</code> has no effect</p>
    <button data-modal-close>Good</button>
</dialog>
```

---

### One time
You can set a props `once` so that the modal window is triggered **only once.**
```html
<button data-modal-open="dialog">Open modal</button>

... 

<dialog once>
    <h2>Onetime</h2>
    <p>You'll only see me once, thank attribute <code>once</code>. </p>
    <button data-modal-close>Thx for once</button>
</dialog>
```

> Take note
Don't forget, this example will work only **once**, you will need to refresh the page to reopen the modal window example.
---

### Another example
Add delay to opening modal via `show-delay`
```html
<button data-modal-open="dialog">Open modal</button>

... 

<dialog disable-esc show-delay="2000">
    <h2>Hello</h2>
    <p>Also pressing <code>esc</code> has no effect</p>
    <button data-modal-close>Cool</button>
</dialog>
```

## Programmatically

To control modal windows from a script, you can use the `Modal` class.

First, we need to define the modal structure of the DOM
```html
<dialog id="modal">
    <h2>Modal</h2>
    <p>Hello, click on OK to close modal.</p>
    <button data-modal-close>OK</button>
</dialog>
```

Next, we need to create a Modal instance:
```typescript
import { Dialogue } from 'tiny-dialogue'

const modal = new Dialogue('#modal')

modal.open() // Yeah, you open me!
modal.close() // easy to close!
```

Okay, how do I apply the parameters? Let's look at an example:

```typescript
import { Dialogue } from 'tiny-dialogue'

const modal = new Dialogue('#modal', {
    animation: true, // enable open/close animation
    disableEsc: true, // prevent esc closing
})

modal.open() // Well done!
```

## What's next?

You can easily customize the content of your modal window, this package gives you a simple wrapper to work with
your modal window, its appearance is solely your responsibility.

- Explore [demos](/demos) page.
- See available [props](/api/props) (options)
- Learn how to [customize](/api/customize) your modals (themes)
