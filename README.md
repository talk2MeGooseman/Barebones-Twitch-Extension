# Yet Another Extension Example

Simple and straight to the point example configuration for creating a Twitch Extension.

This repository complements the presentation for [Build Your First Twitch Extension](https://docs.google.com/presentation/d/1wAA1dzMM74RwLWCtp_SqtktVzp4I2sQYz_mwl5wq2Cs/edit?usp=sharing). I am using webpack to help with HTML page generation and running a local dev server.

Generates HTML pages for the following views:

- Overlay
- Component
- Panel
- Mobile
- Configuration
- Live Config

This repository is intended to be a bare-bones example so you can then customize everything yourself. Enjoy.

## How it works

Inside `src` all generated HTML views use the same index.html template. If you would like to build a custom HTML page for the different Extension view you can do so by:

- Creating a new HTML page (it doesn't have to be called index.html)
- Open `webpack.common.js` and modify `template` to use your new HTML file

Your JavaScript files will automatically be included in the HTML page using webpack. So all you have to do is write you JavaScript and webpack should handle the rest.

## Local Development

To run in development, use the command:

```bash
npm start

```

This command will use `webpack-dev-server` to run a local server to serve the assets on `http://localhost:8080`. You can then load each page by visiting their corresponding address like `http://localhost:8080/panel.html`

## Building for Release

All you have to do is run:

```bash
npm run build
```

This command will generate all your HTML views, bundle CSS, transpile your JavaScript, bundle your JavaScript into an `app.bundle`, and bundle third-party libraries into `vendor.bundle` files inside `/dist`.

All you have to do next is zip the contents of `/dist` and upload it to Twitch.
