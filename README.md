a little npm package to hot-reload sass changes so you don't have to reload the app every time.

1. clone this repo into your mendix project root. 
2. `cd` into the `mendix-css-hot-reload` directory.
3. run `npm install`.
4. run `gulp`.

or, if you're feeling risky, run this in your project root:
```sh
git clone https://github.com/cdcharlebois/mendix-css-hot-reload.git; 
cd mendix-css-hot-reload; 
npm install; 
gulp;
```

**NOTE: Always remember to stop gulp before committing your project to the Team Server. If you don't, gulp will still have a lock on some files in the `node_modules` directory and break your SVN repo structure.**
