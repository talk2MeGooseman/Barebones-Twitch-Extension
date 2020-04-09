# Yet Another Extension Example

Simple and straight to the point example configuration for creating a Twitch Extension.

Generates HTML pages for the following views:

- Overlay
- Component
- Panel
- Mobile
- Configuration
- Live Config

This is intended to be a bare bones examples so you can then customize everything yourself. Enjoy.

## How it works

Inside `src` all generated HTML views use the same index.html template. If you would like build a custom HTML pages for the different Extension views you can do so inside by:

- Creating a new HTML page, it doesnt have to be called index.html
- Open `webpack.common.js` and modify `template` to use your new HTML file

Your JavaScript will files will automatically be included in to the HTML page using webpack. So all you have to do is write you JavaScript and webpack should handle the rest.

## Local Development

To run in development use the common:

```bash
npm start

```

This will use `webpack-dev-server` to run a local server to serve the assets on `http://localhost:8080`. You can then load each page by visiting their corresponding address like `http://localhost:8080/panel.html`

## Building for Release

All you have to do is run:

```bash
npm run build
```

This will generate all your HTML views, bundle CSS, transpile your JavaScript, bundle your JavaScript into an `app.bundle`, and bundle third party libraries in to `vendor.bundle` files inside `/dist`.

All you have to do next is zip the contents of `/dist` and upload to Twitch.
