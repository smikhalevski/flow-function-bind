# Flow Function Bind

This repo shows how to [Flow](https://flow.org/) can be used in projects with [Babel](https://babeljs.io/) and [function bind operator](https://github.com/tc39/proposal-bind-operator). 

## How to run?

Clone this repo and install dependencies with `npm i`.

You can build project with `npm run build`. The assembly is located in `./target/build` folder.
 
`npm run flow-watch` would start background Babel process (it transforms only bind operator) and starts [flow-watch](https://github.com/jedwards1211/flow-watch). So you can instantly see Flow errors in terminal after running this command.

When you <kbd>Ctrl</kbd> + <kbd>C</kbd> the terminal with `npm run flow-watch`, background Babel process is automatically killed.
