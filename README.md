# Convertisseur

## notes jour 5

Finalement en gros notre routine c'est :

- décrire l'interface via des composants pour représenter ce qu'on veut
- on rend paramétrable via les props le composants pour pouvoir décrire plusieurs scénarios possibles
- on veut que l'ui évolue en réponse à des intéractions ?
  - on représente ce qui va évoluer dans le state et on s'en sert pour paramétrer l'affichage
  - on écoute l'intéraction
  - on modifie le state en réponse à l'intéraction

## Objectif

Réaliser ce projet

![](resultat.gif)

## Instructions

- Commencer par la structure fondamentale (les blocs principaux)
- Créer les composants
- Un peu de style
- Identifier les données à transmettre
- Placer des props
- Dynamiser avec `src/data/currencies.js`

## Styles

### Font

[Spartan](https://fonts.google.com/?query=spartan)
- `300` : textes
- `500` : liste de devises
- `700` : titre et résultat

### Couleurs

- Principale `#bb5432`
- Alternative `#f1c5b6`
- Claire `#fff`

### Transitions

- Rapide : `0.2s`
- Lente : `1s`


## Whaaat ?

- https://fr.reactjs.org/docs/components-and-props.html#composing-components
- https://fr.reactjs.org/docs/introducing-jsx.html#embedding-expressions-in-jsx
- https://developer.mozilla.org/fr/docs/Web/CSS/overflow
- https://developer.mozilla.org/fr/docs/Web/CSS/transition
