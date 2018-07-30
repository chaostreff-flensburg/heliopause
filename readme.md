# heliopause
> a space api microservice
![build status](https://drone.ctfl.space/api/badges/chaostreff-flensburg/heliopause/status.svg)

<!-- @TDOD: Inline About Section -->

## Deployment

### As a node.js Project
Clone the repo and follow the build instructions under [Build Setup](#Build\ Setup).   
A node.js version of `10.4` or higher is needed. Older versions may work, but are not tested.

#### Data Migration
Older databases can be migrated by simply copying the `*.db` files from the `./data` directory.

## Development

### Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm build
$ npm start
```

### Code Style
This project uses [Prettier](https://prettier.io) to format code. Prettier should be run before creating a pull request. You can run it with the default settings from your editor. For more information, refer to the [official documentation](https://prettier.io).

### Frameworks

#### Next.js
For detailed explanation on how things work, checkout the [Next.js docs](https://nextjs.org/).

---
Made with ♡ at [Chaostreff Flensburg](https://twitter.com/chaos_fl) | [CI & CD](https://drone.ctfl.space/chaostreff-flensburg/heliopause) | [License](./LICENSE)
