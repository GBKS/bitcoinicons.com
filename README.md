# bitcoinicons.com

This repo holds the soure code for [bitcoinicons.com](https://bitcoinicons.com/), the website for the [Bitcoin icons project](https://github.com/BitcoinDesign/Bitcoin-Icons) by the [Bitcoin Design Community](https://bitcoin.design/).

It's currently hosted under my Github profile, but should be moved to the Bitcoin Design Github organization once it's not so rough.

Contributions are highly appreciated. Design changes should first be discussed in design before implementing them. The source design for the site is in the [Bitcoin icon set Figma community file](https://www.figma.com/community/file/948545404023677970/Bitcoin-icon-set) on the "Website" page.

## Updating icons

When icons change, two things need to be done for this repo.
- Update `src/data/icons.json`
- Update SVGs in `public/svg`

Both the JSON file and the SVGs are generated automatically via the [export helper Figma plugin](https://github.com/BitcoinDesign/Bitcoin-Icons/tree/main/figma-plugins/icon-export-helper). The plugin creates a new page in the main Figma icon file with export-ready icons and the content of the JSON file in a text field. 

Before committing, make sure to run the site locally first and double-check that everything looks good. It's easy to miss something.

## Local development

It's possible to use just npm, I prefer using [Vue UI](https://cli.vuejs.org), as it provides a visual interface for local development.

Make sure to use node 15.0.0+.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
