# Quizz

Ce mini projet basé sur le boilerplate https://github.com/angular/material-start est un jeu
de question-réponse à tour de rôle.

Vous pouvez facilement modifier la liste des questions en modifiant le fichier **app/questions.js**.

Voici un exemple d'objet question à déclarer :

```js
{
  question: `
    Qui a fait quoi ?<br>
    <!-- Vous pouvez insérer du contenu HTML et/ou AngularJS -->
    <!-- Une fonction playSound() est également disponible dans le scope pour jouer de sons stockés dans app/assets/mp3/ -->
    <md-button class="md-accent md-raised" ng-click="playSound('blue-suede-shoes')">Ecouter</md-button>
  `,
  answer: `
    La réponse<br>
    <br>
    <img src="./assets/img/illustration.jpg">
  `,
  points: 4, // nombre de point rapporté par la question
  entrySound: 'question-music', // son joué à l'affichage de la question
  exitSound: 'answer-music',    // son joué à l'affichage de la réponse
}
```

Note: pour qu'un son puisse être lancé via la fonction `playSound()`, il faut qu'il
soit dans le dossier **app/assets/mp3** et ait l'extension `.mp3`.

## Contrôles clavier

| Touche         | Action                                                                 |
|----------------|------------------------------------------------------------------------|
| [Entrée]       | Bonne réponse (afficher la réponse) / question suivante                |
| [A]            | Joue la musique d'introduction                                         |
| [E] / [Espace] | Mauvaise réponse (passer la main à un autre joueur / une autre équipe) |
| [F]            | Couper la musiqe (en fondu progressif de 2 secondes)                   |
| [M]            | Volume à 50%                                                           |
| [S]            | Afficher la réponse sans attribuer les points de la question           |
