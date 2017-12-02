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
This project includes a `tslint.json` and `tslint` is included as a development dependency.  You can lint the project manually by running the following npm script:

```bash
npm run lint
```

### Setting up the IDE to Use `tslint`
If you're using WebStorm, you may need to enable `tslint`.  You can do so by performing the following steps:

* * Hit `Ctrl+Alt+2` to open **Settings**.
* Under **Languages and Frameworks | TypeScript | TSLint** click the **Enable** checkbox.

### Spaces, or tabs?
The `tslint` configuration in this project assumes the use of tabs instead of spaces.  This may or may not be what you want.  You can change that preference by editing the [indent] rule(https://palantir.github.io/tslint/rules/indent/).

If you're using WebStorm, your default configuration may prefer spaces.  If so, perform the following steps:

* Hit `Ctrl+Alt+2` to open **Settings**.
* Under **Editor | Code Style | TypeScript** look at the **Tabs and Indent** tab.
* Check the **Use tab character** box.
* The `tslint.json` file in this project assumes a tab size of 4.

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
 
