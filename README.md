# @straw-hat/is-ssr

Contains some functions that help you to identify if the execution of the code
is happening in the server side, or in the browser side

## Usage

```tsx
import { isSSR, isBrowser, onSSR, onBrowser } from '@straw-hat/is-ssr';

if(isSSR()) {
  console.log('💻 I am running in server side.');
}

if(isBrowser()) {
  console.log('I am running in browser side.');
}

// Run the function on Server Side

onSSR(function ssrCallback() {
  console.log('💻 I am running in server side.')
});

onSSR(
  function ssrCallback() { console.log('💻 I am running in server side.') },
  function browserCallback() { console.log('I am running in browser side.') },
);

// Run the function on Browser Side

onBrowser(
  function browserCallback() { console.log('I am running in browser side.') },
  function ssrCallback() { console.log('💻 I am running in server side.') },
);

onBrowser(function browserCallback() {
  console.log('I am running in browser side.')
});
```
