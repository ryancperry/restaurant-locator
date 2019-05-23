# Restaurant Finder

This project is built with React using the Next.Js library.

## Areas to expand

The map could use more interactive elements, like interactive hover elements for the restaurants that are not currently selected.
As is, the app is simple enough where I didn't worry about prop-drilling because there is not much nesting. However, I would use React's Context API if this were to expand further, but seemed like overkill here. I also would more thoroughly destructure the restaurant details and write unit tests.

I also wanted to stay true to the designs and the instructions of this project, and I usually would ask the designer if they wanted the fonts to resize on larger desktops.

## Testing

This project has been tested on iOS (Safari and Chrome), Windows 10 (Chrome, Firefox, and Edge), Mojave (Safari and Chrome).

## Start developing:

```
$ npm -i
$ npm run dev
```

In the browser, go to http://localhost:3000

## For a static export:

```
npm run build
npm run export
cd out
serve -p 8080
```
