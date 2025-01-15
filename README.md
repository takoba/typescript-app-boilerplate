# @takoba/typescript-app-boilerplate

a boilerplate for TypeScript app.

![GitHub](https://img.shields.io:/github/license/takoba/typescript-app-boilerplate)

## Usage

### 1. Uses [tiged](https://www.npmjs.com/package/tiged)

```sh
# clone repo & move to cloned dir
npx tiged takoba/typescript-app-boilerplate [dst]
cd [dst]

# setup git repository
git init
git add . && git commit -m ':sparkles: Initial commit'
git remote add origin [url]
git push origin main -u

# generate package-lock.json & commit to repo
npm install
git add .
git commit -m ':pushpin: Add package-lock.json'
git push
```

### 2. Uses [create-typescript-app-base](https://www.npmjs.com/package/create-typescript-app-base)

```sh
# clone repo & move to cloned dir
npx create-typescript-app-base myapp
cd ./myapp

# setup git repository
git init
git add . && git commit -m ':sparkles: Initial commit'
git remote add origin [url]
git push origin main -u

# generate package-lock.json & commit to repo
npm install
git add .
git commit -m ':pushpin: Add package-lock.json'
git push
```

## Contributing

Found a bug or have a question about this project? We'd love to hear from you!

1. Browse to <https://github.com/takoba/typescript-app-boilerplate/issues>
2. If there are no duplicates, create a new issue
