# 🌀 Uxer - Design System Integration
Projet est une intégration de composants d'interface (UI) basée sur un Design System. L'objectif est de fournir des composants réutilisables, hautement paramétrables et fidèles aux maquettes <sub>![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)</sub> (Pixel Perfect).

<br>
<br>

# 🚀 Installation et Lancement
Le projet est entièrement conteneurisé avec Docker pour garantir un environnement de développement identique pour tous.

Pré-requis
Docker Desktop installé.

Lancer le projet
Ouvrez un terminal à la racine du projet et exécutez la commande suivante :

- ```docker compose -f docker-compose.dev.yml up --build```

Une fois le build terminé, l'application est accessible sur : ```http://localhost:5173```

<br>
<br>

# 🛠 Technologies Utilisées
- <sub>![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=FFD62E)</sub> : Pour la structure des composants.

- <sub>![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)</sub> : Pour un typage strict et une meilleure maintenance.

- <sub>![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white)</sub> : Utilisation intensive de mixins, placeholders (%) et variables pour une architecture CSS modulaire.

- <sub>![React Icons](https://img.shields.io/badge/React_Icons-eb212e?style=for-the-badge&logo=react&logoColor=white)</sub> : Bibliothèque d'icônes vectorielles.

- <sub>![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)</sub> : Pour l'orchestration de l'environnement de développement.

<br>
<br>

# 🏠 Architecture du Projet

| Dossier / Fichier | Description |
| :--- | :--- |
| `public/icons.svg` | Sprite SVG global contenant les icônes vectorielles du projet. |
| `src/components/ui/` | Contient les composants React réutilisables de l'interface (`Button.tsx`, `ButtonGroup.tsx`). |
| `src/scss/` | Architecture SCSS. Centralise les variables (`1_color.scss`), typo (`2_typography.scss`), mixins, placeholders et les styles des composants. |
| `src/Types/` | Fichiers de typage TypeScript (`tp_button.ts`, `tp_buttonGroup.ts`) pour sécuriser les props. |
| `src/App.jsx` & `main.jsx` | Point d'entrée principal et composant racine de l'application React. |
| `docker-compose.dev.yml` | Fichier d'orchestration pour lancer les conteneurs de l'environnement de développement. |
| `dockerfile.dev` | Recette de création de l'image Docker spécifique au développement. |
| `eslint.config.js` | Fichier de configuration des règles de linting pour maintenir la qualité du code. |
| `vite.config.js` | Configuration du bundler Vite (serveur local, plugins, alias). |
| `package.json` | Manifeste du projet listant les dépendances, la version et les scripts d'exécution. |

<br>
<br>

# 🏗 Présentation des Composants
1. `App`: Contient l'ensemble des boutons de démonstration.

2. `Button`: Le composant bouton est l'atome central. Il gère de nombreux états et variantes visuelles.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `variant` | `string` | `primary`, `secondary`, `destructive`, `alpha_light`. |
| `size` | `string` | `M`, `S`, `XS`. |
| `iconLeft` | `ReactNode` | Affiche une icône avant le texte. |
| `iconRight` | `ReactNode` | Affiche une icône après le texte. |
| `badge` | `number` | Affiche un compteur numérique à l'intérieur du bouton. |
| `children` | `ReactNode` | Affiche le contenu. |
| `disabled` | `boolean` | Désactive les interactions et applique une opacité. |

3. `ButtonGroup`: Permet de grouper plusieurs boutons pour créer des actions liées.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `children` | `ReactNode` | Affiche le contenu. |
| `disabled` | `boolean` | Désactive les interactions et applique une opacité. |