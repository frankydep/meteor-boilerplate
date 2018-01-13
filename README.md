# Meteor + React starter

Bare minimum boilerplate for building apps with Meteor and React. The libraries included are:
- [React](https://reactjs.org)
- [prop-types](https://www.npmjs.com/package/prop-types)
- [React-router-dom](https://reacttraining.com/react-router/web/guides/philosophy)

The app's skeleton is organized according to the latest [meteor's guidelines.](https://guide.meteor.com/structure.html#javascript-structure).

The following packages have been removed from meteor:
- `autopublish` (publish the entire database to all clients)
- `insecure` (allow all database writes from the client)
- `blaze-html-templates` (Meteor's HTML templates library)

The following packages have been added:
- `react-meteor-data` (react higher-order component for reactively tracking Meteor data)
- `static-html` (define static page content in .html files)
---

### Getting Started

- [Install Meteor](https://www.meteor.com/install)
- Clone the Repo with your project name: `git clone https://github.com/frankydep/meteor-boilerplate.git <my-project-name>`
- `cd <my-project-name> && meteor npm install`
- Set your own origin remote: `git remote set-url origin <your-git-repo-url>`


### Adding environmental variables

If you have any environmental variables:
- create a new file/s in the project's root named: `settings-development.json` and/or `settings-production.json`.
- Add any sensitive variables (like API keys) inside a `private` key. Conversely add any public variables inside a `public` key.


### Running the app

- On your terminal run `meteor`. If you want to use any environmental variables: `npm run dev` (alias for `meteor --settings settings-development.json`) or `npm run prod` alias for `meteor --settings settings-production.json`.
- Open your browser and navigate to `http://localhost:3000/`

### Questions?

If you have any questions please open an issue. Thanks!
