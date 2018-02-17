// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,

  firebaseConfig : {
    apiKey: "AIzaSyAdn1EZIpSjSr62CnbiZ3FFeuIlRkr8ycE",
    authDomain: "angularmidproj.firebaseapp.com",
    databaseURL: "https://angularmidproj.firebaseio.com",
    projectId: "angularmidproj",
    storageBucket: "angularmidproj.appspot.com",
    messagingSenderId: "940924796291"
  }
};
