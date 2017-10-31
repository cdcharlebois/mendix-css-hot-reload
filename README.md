a little npm package to hot-reload sass changes so you don't have to reload the app every time.

1. clone this repo into your mendix project root. 
2. `cd` into the `mendix-css-hot-reload` directory.
3. run `npm install`.
4. run `gulp`.
5. Remove the `mendix-css-hot-reload` directory from versioning by right-clicking the folder and choosing **Tortoise SVN > Add to ignore list > mendix-css-hot-reload**

Or run this in your project root, and then remove the `mendix-css-hot-reload` directory from versioning by right-clicking the folder and choosing **Tortoise SVN > Add to ignore list > mendix-css-hot-reload**:
```sh
git clone https://github.com/cdcharlebois/mendix-css-hot-reload.git
cd mendix-css-hot-reload 
npm install 
gulp;
```
