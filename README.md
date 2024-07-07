
# Exam Attendance API

Ce projet est une application API développée pour enregistrer la présence des élèves aux examens en scannant leurs codes QR ou code BAR via une application mobile. Il est utilisé comme projet de fin d'études L3DEV pour l'école ISMAGI.

## Développé par
- **Mouad Sebhaoui**
- **Amine Fouad**

## Technologies utilisées
- **Node.js**
- **Express.js**
- **MySQL**
- **CORS**
- **dotenv**
- **Flutter** (pour l'application mobile)

## Structure de la base de données
La base de données MySQL contient trois tables principales :
- **Eleve**: Stocke les informations des élèves.
- **Examen**: Stocke les informations des examens.
- **ExamenPresence**: Enregistre la présence des élèves aux examens.

## Installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/sebmouad/exam-attendance.git
   cd exam-attendance
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Créez un fichier `.env` à la racine du projet et ajoutez les informations de la base de données :
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=ExamAttendanceDB
   DB_PORT=3306
   ```

4. Démarrez le serveur :
   ```bash
   node server.js
   ```

## Routes de l'API

### Racine

- **Afficher un message de bienvenue**
  ```bash
  curl https://exam-attendance.vercel.app/
  ```

### Eleve

- **Afficher la liste des élèves**
  ```bash
  curl https://exam-attendance.vercel.app/eleves
  ```

- **Ajouter un élève**
  ```bash
  curl -X POST https://exam-attendance.vercel.app/eleve -H "Content-Type: application/json" -d '{
    "Nom": "Sebhaoui",
    "Prenom": "Mouad",
    "Date_Naissance": "1990-01-01",
    "CIN": "ABC123",
    "CNE": "123456",
    "Filiere_Bac": "Scientifique",
    "Mention_Bac": "Bien",
    "Annee_Bac": "2012",
    "Filiere": "Informatique"
  }'
  ```

- **Modifier un élève**
  ```bash
  curl -X PUT https://exam-attendance.vercel.app/eleve/1 -H "Content-Type: application/json" -d '{
    "Nom": "Sebhaoui",
    "Prenom": "Mouad",
    "Date_Naissance": "1990-01-01",
    "CIN": "ABC123",
    "CNE": "123456",
    "Filiere_Bac": "Scientifique",
    "Mention_Bac": "Bien",
    "Annee_Bac": "2012",
    "Filiere": "Informatique"
  }'
  ```

- **Supprimer un élève**
  ```bash
  curl -X DELETE https://exam-attendance.vercel.app/eleve/1
  ```

- **Chercher un élève par nom ou prénom**
  ```bash
  curl https://exam-attendance.vercel.app/eleve/nom_prenom?nom=Sebhaoui&prenom=Mouad
  ```

- **Chercher un élève par CIN ou CNE**
  ```bash
  curl https://exam-attendance.vercel.app/eleve/cin_cne?cin=ABC123&cne=123456
  ```

- **Afficher les informations d'un élève par son CNE**
  ```bash
  curl https://exam-attendance.vercel.app/eleve/cne/123456
  ```

### Examen

- **Afficher la liste des examens**
  ```bash
  curl https://exam-attendance.vercel.app/examens
  ```

- **Ajouter un examen**
  ```bash
  curl -X POST https://exam-attendance.vercel.app/examen -H "Content-Type: application/json" -d '{
    "Matiere": "Mathématiques",
    "Lieu": "Salle 101",
    "Date": "2024-07-10",
    "Heure_Deb": "09:00",
    "Heure_Fin": "12:00"
  }'
  ```

- **Modifier un examen**
  ```bash
  curl -X PUT https://exam-attendance.vercel.app/examen/1 -H "Content-Type: application/json" -d '{
    "Matiere": "Mathématiques",
    "Lieu": "Salle 101",
    "Date": "2024-07-10",
    "Heure_Deb": "09:00",
    "Heure_Fin": "12:00"
  }'
  ```

- **Supprimer un examen**
  ```bash
  curl -X DELETE https://exam-attendance.vercel.app/examen/1
  ```

- **Chercher un examen par matière**
  ```bash
  curl https://exam-attendance.vercel.app/examen/matiere?matiere=Mathématiques
  ```

- **Chercher un examen par lieu**
  ```bash
  curl https://exam-attendance.vercel.app/examen/lieu?lieu=Salle 101
  ```

- **Chercher un examen par date**
  ```bash
  curl https://exam-attendance.vercel.app/examen/date?date=2024-07-10
  ```

### Présence

- **Afficher la liste des enregistrements de présence**
  ```bash
  curl https://exam-attendance.vercel.app/exampresence
  ```

- **Enregistrer la présence d'un élève à un examen**
  ```bash
  curl -X POST https://exam-attendance.vercel.app/presence -H "Content-Type: application/json" -d '{
    "ID_Exam": 1,
    "ID_Eleve": 1,
    "Heure_Presence": "09:05"
  }'
  ```

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
