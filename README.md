# Meteor + React starter

Bare minimum boilerplate for building apps with Meteor and React. The libraries included are:
- [React](https://reactjs.org)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [React-router-dom](https://reacttraining.com/react-router/web/guides/philosophy)
- [Lodash](https://lodash.com)

The app's skeleton is organized according to the latest [meteor's guidelines.](https://guide.meteor.com/structure.html#javascript-structure).

The following packages have been removed from meteor:
- `autopublish` (publish the entire database to all clients)
- `insecure` (allow all database writes from the client)
- `blaze-html-templates` (Meteor's HTML templates library)

The following packages have been added:
- `react-meteor-data` (react higher-order component for reactively tracking Meteor data)
- `static-html` (define static page content in .html files)
- `dynamic-import` (Runtime support for Meteor 1.5 dynamic import(...) syntax)
---

### Getting Started

- [Install Meteor](https://www.meteor.com/install)
- Clone the Repo with your project name: `git clone https://github.com/frankydep/meteor-boilerplate.git <my-project-name>`
- `cd <my-project-name> && meteor npm install`
- Set your own origin remote: `git remote add origin <your-git-repo-url>`


### Running the app

- On your terminal run `meteor`
- Open your browser and navigate to `http://localhost:3000/`

### Questions?

> If you have any questions please open an issue. Thanks!
