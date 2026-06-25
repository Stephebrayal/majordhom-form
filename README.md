# majordhom-form
# Test Développeur Web – Tremplin

## À propos de moi

**Nom / Prénom :** PENWE NGAPINSI Stephe Brayal

**Formation :** ESIGELEC 4e année ecole d'ingénieur dominante Ingenierie des services du numérique

**Durée de stage souhaitée :** 2 à 3 mois 

**Liens :**

* GitHub : https://github.com/Stephebrayal
* Portfolio : https://stephepenwe.helioho.st/

---

## Présentation du projet

Ce projet a été réalisé dans le cadre du test technique proposé par Tremplin.

L'objectif était d'intégrer une maquette de formulaire en utilisant React et d'enregistrer les données saisies dans une base de données.

J'ai porté une attention particulière à la gestion des erreurs, à l'expérience utilisateur, à la validation des données saisies ainsi qu'à l'adaptabilité de l'interface sur différents formats d'écran.

---

## Captures d'écran
<img width="1048" height="623" alt="image" src="https://github.com/user-attachments/assets/30c06edd-9c51-480b-aeb8-39ae833af789" />
<img width="1313" height="334" alt="image" src="https://github.com/user-attachments/assets/8f367610-7cc9-473f-acb3-0bf0bf1e976d" />

### Formulaire principal

Ajouter ici les captures d'écran du projet :

<img width="1362" height="654" alt="image" src="https://github.com/user-attachments/assets/ed2f52f7-2691-4dd5-851a-48273fc3a2cf" />


---

## Stack technique & choix

### React 22.14.0

Utilisé pour construire l'interface utilisateur sous forme de composants réutilisables et maintenir une structure claire du projet.

### JavaScript

Utilisé pour gérer la logique applicative, les interactions utilisateur et les échanges avec le serveur supabse via supabasejs.

### Tailwind CSS

Utilisé pour intégrer rapidement la maquette tout en conservant un design responsive et cohérent.

### Supabase

Utilisé comme Backend-as-a-Service afin de simplifier la gestion de la base de données et l'accès aux données depuis l'application.

### PostgreSQL

Utilisé comme système de gestion de base de données relationnelle pour stocker les informations soumises par le formulaire.

---

## Architecture

```text
React
   ↓
Supabase Client
   ↓
Supabase
   ↓
PostgreSQL
```

Les données saisies dans le formulaire sont validées côté client puis envoyées à Supabase pour être enregistrées dans une base PostgreSQL.

---

## Fonctionnalités

* Intégration de la maquette fournie.
* Validation des champs du formulaire.
* Gestion des erreurs utilisateur.
* Enregistrement des données dans PostgreSQL via Supabase.
* Interface responsive.
* Message de confirmation après soumission du formulaire par l'utilisateur.

---

## Installation et lancement

### Prérequis

* Node.js
* npm

### Installation

```bash
npm install
```

### Lancement du projet

```bash
npm run dev
```

L'application est ensuite accessible à l'adresse :

```text
http://localhost:5173
```

## Questions

### Avez-vous trouvé l’exercice facile ou difficile ? Qu’est-ce qui vous a posé problème ?

J'ai trouvé l'exercice accessible mais intéressant car il demandait à la fois des compétences d'intégration front-end et de gestion des données que je maitrise assez bien. La partie la plus délicate a été de reproduire fidèlement la maquette, ainsi que la gestion des disponibilité notamment avec la suppression des disponibilités après ajout de celles ci.

### Avez-vous appris de nouveaux outils pour répondre à l’exercice ? Si oui, lesquels ?

Cet exercice m'a surout appris à approfondir mes connaissances en React, m'a permis de découvrir Supabase grâce aux conseils de Claude Code car à la base je voulais heberger une base de données sur mon domaine et me servir de mysql

### Quelle est la place du développement web dans votre cursus de formation ?

Le développement Web est au coeur de notre formation en dominante ISN avec de l'apprentissage de back-end, de front-end, de devops et de developpement mobile.

### Avez-vous utilisé un LLM ? Si oui, comment intégrez-vous les LLM à chaque étape de votre workflow ?

Oui, j'utilise ponctuellement des LLM comme outil d'assistance pour obtenir des explications techniques, explorer différentes approches ou relire certaines portions de code. Les solutions proposées sont systématiquement vérifiées, adaptées au contexte du projet et testées avant leur intégration.
