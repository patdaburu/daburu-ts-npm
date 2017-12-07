# daburu-ts-npm
This is a simple boiler-plate for an NPM module written in TypeScript.
In addition to the basics required to publish the module, it also
contains setup for unit testing with [Mocha](https://mochajs.org/),
[Chai](http://chaijs.com/), and [Istanbul](https://istanbul.js.org/).

After [setting up your npm account](https://docs.npmjs.com/getting-started/publishing-npm-packages)
and [.nprmc](https://docs.npmjs.com/files/npmrc) file, run the following
npm scripts:

```bash
npm install
npm publish
```

## tslint
This project includes a `tslint.json` configuration and `tslint` is included as a development dependency.  You can lint the project manually by running the following npm script:

```bash
npm run lint
```

### Setting up the IDE to Use `tslint`
If you're using WebStorm, you may need to enable `tslint`.  You can do so by performing the following steps:

* * Hit `Ctrl+Alt+2` to open **Settings**.
* Under **Languages and Frameworks | TypeScript | TSLint** click the **Enable** checkbox.

### Spaces, or tabs?
The `tslint` configuration in this project assumes the use of spaces instead of tabs.  This may or may not be what you want.  You can change that preference by editing the [indent](https://palantir.github.io/tslint/rules/indent/) rule.

If you're using WebStorm, your default configuration may prefer spaces.  If so, perform the following steps:

* Hit `Ctrl+Alt+2` to open **Settings**.
* Under **Editor | Code Style | TypeScript** look at the **Tabs and Indent** tab.
* Check or uncheck the **Use tab character** box, depending on your preference.
* The `tslint.json` file in this project assumes 4 spaces.

### Quotes: Double or Single?
The `tslint` configuration in this project assumes the use single (instead of double) quotes.  This may or may not be what you want.  You can change that preference by editing the [quotemark](https://palantir.github.io/tslint/rules/quotemark/) rule.

* Hit `Ctrl+Alt+2` to open **Settings**.
* Under **Editor | Code Style | TypeScript** look at the **Punctuation** tab.
* Modify the dropdowns to reflect your preferences.

## Running and Debugging Tests
As we mentioned above, the project includes a unit testing and code coverage frameworks.  There are a number of ways to run and debug the tests.

### Run the Tests with `npm`
You can run the test from an `npm` script like so:

```bash
npm run test
```

This will run the tests and produce a code coverage report.

### Runing Tests in WebStorm
This project uses [Mocha](https://mochajs.org/) and it just so happens that WebStorm has nice support for this platform.
 
 To run or debug a single test, you can simply *right-click* on a test file and run (or debug) it from the context menu.
 
 To create a run/debug configuration for all the tests, perform these steps:
 
 * From the main menu, go to **Run | Edit Configurations...** 
 * Click the *Add New Configuration* button (or hit `Alt+Insert`).
 * Select **Mocha** from the menu that appears.
 * The default options are typically fine, though you'll need to add a bit of information:
 	+ **Extra Mocha options:** *--require ts-node/register*
 	+ Select **File Patterns**
 	+ **Test file patterns:** test/**/*.spec.ts
 	
 When you run a configuration using the *Run with Coverage* options, the IDE will produce a coverage report and mark up your code files coverage indicators.
 
## Document Your Code
 Since you're writing TypeScript, why not get free API documentation from your source code comments?  To achieve this, we're using [typedoc](http://typedoc.org/guides/doccomments/).
 
You can generate the documentation by itself by running the following npm script:

```bash
npm run build:doc
```

This script is also run as part of the normal build process.
