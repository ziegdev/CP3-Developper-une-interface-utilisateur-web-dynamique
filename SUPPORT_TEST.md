# Outils de tests

## Mocha - Test runner

https://mochajs.org/

-`describe`: permet de définir un chapitre
-`it`: permet de définir un test

## Chai - Outil d'assertion

https://www.chaijs.com/api/bdd/

- (`assert`), `should`, `except` : permet d'affirmer quelque chose

## Enzyme - Test de composants React

https://enzymejs.github.io/enzyme/

- `shallow`: permet de faire un pseudo rendu ( rendu peu profond ) des composants pour les tester

# Antisèches pour la config

Librairie afin d'utiliser la syntaxe d'import ES6 dans l'environnement node

```js
yarn add --dev @babel/register
```

Installation de assertion / test runner / test de composants

```js
yarn add --dev chai mocha enzyme @wojtekmaj/enzyme-adapter-react-17
```

Outils pour ignorer les styles css dans les composants. Sachant que pour les tests on ne va pas passer par webpack mais par mocha, alors node ne sait pas comment gérer les fichier scss qu'on a importé dans les composants React ( comme webpack ).

Donc comme ici on test du fonctionnel et non pas un rendu visuel, alors on désactive complétement tout les imports de styles

```js
yarn add --dev ignore-styles
```

## Fonctionnement

1. On créé un dossier `tests` à la racine du projet.
2. Dans ce dossier on créé un `.eslintrc`

```json
{
  "env": {
    "mocha": true
  },
  "rules": {
    "no-used-expressions": "off"
  }
}
```

3. Dans le dossier, on créé un fichier `.setup.js`
   
```js
require("@babel/register")();
require("ignore-styles");
const enzyme = require("enzyme");
const Adapter = require("@wojtekmaj/enzyme-adapter-react-17");
enzyme.configure({ adapter: new Adapter() });
```

4. On ajoute dans le `package.json` le script de lancement des tests, regarder `*.test.js` dans tous les dossiers et sous dossiers **sauf** les `nodes_modules`.

```js
{
  // ...
  "scripts": {
    // ...
    "test": "cross-env NODE_PATH=./ mocha --require tests/.setup.js './{,!(node_modules)/**/}*.test.js'",
    "test:watch": "cross-env NODE_PATH=./ mocha --watch --require tests/.setup.js './{,!(node_modules)/**/}*.test.js'"
    // ...
  }
  // ...
}
```
