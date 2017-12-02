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

## Running Tests
...coming soon...