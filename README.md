# boilerplate app - phonegap + sencha touch

* Most functionality is in `www/app`
* Resources are in `www/resources`
* Entry point is `www/index.html`

## Previewing the app

You'll need compass and sass installed, you can gem install them.
Run `compass compile` from `www/resources/sass/` to generate the CSS.

You can use any static file server (e.g. Apache Cordova), with `www/` as the document root.

You need to run Chrome with the `--disable-web-security` argument to stop it blocking cross-origin requests. On a Mac, run:

    open -a 'Google Chrome' --args --disable-web-security
