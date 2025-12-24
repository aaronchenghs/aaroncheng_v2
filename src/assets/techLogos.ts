export const techLogos = {
  JS: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg',
  TS: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg',
  NODE: 'https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg',
  HTML5: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg',
  SASS: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
  PYTHON: 'https://img.icons8.com/color/48/null/python--v1.png',
  REACT: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  REDUX:
    'https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-redux-an-open-source-javascript-library-for-managing-application-state-logo-color-tal-revivo.png',
  FIREBASE: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg',
  MUI: 'https://img.icons8.com/color/48/null/material-ui.png',
  DART: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Dart-logo-icon.svg',
  FLUTTER: 'https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg',
  FIGMA: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg',
  JAVA: 'https://www.vectorlogo.zone/logos/java/java-icon.svg',
  KOTLIN: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Kotlin_Icon.svg',
  ANDROID: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg',
  DISCORD: 'https://img.icons8.com/fluency/48/null/discord-logo.png',
  FLASK: 'https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon.svg',
  PANDAS: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Pandas_mark.svg',
  NEXT: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  TAILWIND: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  EXPRESS: 'https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg',
} as const;

export type TechKey = keyof typeof techLogos;
