# Styleguide

## Introduction

This style guide is made to organize shared basic components used in 99.co hopefully other portals owned by 99 Group. The end goal of this project is to accelerate the development on all portals with override styling on each styleguide portals.

The project adapts the Atomic Design approach to classify each component as atoms, molecules and organisms. You can find the detail on Atomic Design in this https://atomicdesign.bradfrost.com/. Higher hierarchical structure (pages and templates) should be handled outside of the repository and applied on each specific portal.


## Installation

Before you install Styleguide, you need to check the node version that you currently use. Please check the latest version of the node that we use in package.json. If you're not using the specified version, it is recommended to use Node Version Manager to upgrade your node version.

### Install Node Version Manager (NVM)

You can follow instruction from this repository: https://github.com/nvm-sh/nvm

```console
foo@bar:~$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

After you already install nvm, you can run this command to upgrade your node version, please kindly check version node js on package.json > `engines` > `node`

```console
foo@bar:~$ nvm use xx.xx.0
foo@bar:~$ node --version
```

### Install git-cz

And then for the next setup, please ensure your machine already install [git-cz](https://www.npmjs.com/package/git-cz) on global depedency. You can run this command to install git-cz global on your machine.

```console
foo@bar:~$ npm install -g git-cz
```

### Install packages

```console
foo@bar:~$ make init-dev
```

If you have found issue for installing depedency, you can create some issue on this repository.

Note: Initial setup may take a few minutes to finish.

## Running Dev Server

### To run on your local machine

There are two ways of running on local machine. One is you run develop mode but the asset will be made runtime.

#### Running develop mode

```console
foo@bar:~$ make run-dev
```

Once you run the above command, you will expose your dev app on the default `3000` port. Finally, you can access the web on the url http://localhost:6006.


### Component preview
Create a sample usage and documentation in storybook, using the `<component-name>.stories.tsx` file on the storybook directory.

## Reference
- [Rollup](https://rollupjs.org/guide/en/#quick-start)
- [Unit Testing](https://jestjs.io/docs/en/tutorial-react)
- [Storybook](https://storybook.js.org/docs/basics/writing-stories/)
