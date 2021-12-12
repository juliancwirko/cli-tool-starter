### CLI Tool Starter

It is a quick starter for CLI tools written in Node. Typescript, Prettier and Eslint configuration included.

### How to use it?

1. Clone the repo
2. Change all that you need in the package.json files
3. Reuse the scaffold and write your CLI logic


### How to dev test your CLI tool?

1. `npm install`
2. `npm run build`
3. `npm link`
4. `cli-tool-starter log`
5. `cli-tool-starter -v`

The `cli-tool-starter` is the name of your cli tool. Change it in the package.json file. In two places:

```json
(...)
"name": "cli-tool-starter",
(...)
```

```json
(...)
"bin": {
  "cli-tool-starter": "./build/index.js"
},
(...)
```

After changes, rebuild the tool using `npm run build`.

### How to publish it to npm?

1. `npm login`
2. `npm publish`

### Configuration using [cosmiconfig](https://www.npmjs.com/package/cosmiconfig).

The starter uses the cosmiconfig. You can create, for example, `.clitoolrc` file and add there:

```
{
  exampleQuestion: "What is the name of your dog?",
  exampleAnswer: "Good dogo"
}
```

Then if the script will run in the same place as the config file, it will use these values instead of default ones.

You can configure the name for the config files in `config.ts` file.

### Dev tools

- `npm run dev:prettier`
- `npm run dev:lint`

### Real live examples: 

- [nft-art-maker](https://github.com/juliancwirko/nft-art-maker)
- [elven-mint](https://github.com/juliancwirko/elven-mint)
- [create-harold-app](https://github.com/juliancwirko/create-harold-app)

### Contact

- [Twitter](https://twitter.com/JulianCwirko)
