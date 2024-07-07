
# Exam Attendance

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

### Eleve

- **Ajouter un élève**
  ```bash
  curl -X POST http://localhost:3000/eleve -H "Content-Type: application/json" -d '{
    "Nom": "Doe",
    "Prenom": "John",
    "Date_Naissance": "2000-01-01",
    "CIN": "ABC123",
    "CNE": "123456",
    "Filiere_Bac": "Scientifique",
    "Mention_Bac": "Bien",
    "Annee_Bac": "2018",
    "Filiere": "Informatique"
  }'
  ```

- **Modifier un élève**
  ```bash
  curl -X PUT http://localhost:3000/eleve/1 -H "Content-Type: application/json" -d '{
    "Nom": "Doe",
    "Prenom": "John",
    "Date_Naissance": "2000-01-01",
    "CIN": "ABC123",
    "CNE": "123456",
    "Filiere_Bac": "Scientifique",
    "Mention_Bac": "Bien",
    "Annee_Bac": "2018",
    "Filiere": "Informatique"
  }'
  ```

- **Supprimer un élève**
  ```bash
  curl -X DELETE http://localhost:3000/eleve/1
  ```

- **Chercher un élève par nom ou prénom**
  ```bash
  curl http://localhost:3000/eleve/nom_prenom?nom=Doe&prenom=John
  ```

- **Chercher un élève par CIN ou CNE**
  ```bash
  curl http://localhost:3000/eleve/cin_cne?cin=ABC123&cne=123456
  ```

- **Afficher les informations d'un élève par son CNE**
  ```bash
  curl http://localhost:3000/eleve/cne/123456
  ```

### Examen

- **Ajouter un examen**
  ```bash
  curl -X POST http://localhost:3000/examen -H "Content-Type: application/json" -d '{
    "Matiere": "Mathématiques",
    "Lieu": "Salle 101",
    "Date": "2024-07-10",
    "Heure_Deb": "09:00",
    "Heure_Fin": "12:00"
  }'
  ```

- **Modifier un examen**
  ```bash
  curl -X PUT http://localhost:3000/examen/1 -H "Content-Type: application/json" -d '{
    "Matiere": "Mathématiques",
    "Lieu": "Salle 101",
    "Date": "2024-07-10",
    "Heure_Deb": "09:00",
    "Heure_Fin": "12:00"
  }'
  ```

- **Supprimer un examen**
  ```bash
  curl -X DELETE http://localhost:3000/examen/1
  ```

- **Chercher un examen par matière**
  ```bash
  curl http://localhost:3000/examen/matiere?matiere=Mathématiques
  ```

- **Chercher un examen par lieu**
  ```bash
  curl http://localhost:3000/examen/lieu?lieu=Salle 101
  ```

- **Chercher un examen par date**
  ```bash
  curl http://localhost:3000/examen/date?date=2024-07-10
  ```

### Présence

- **Enregistrer la présence d'un élève à un examen**
  ```bash
  curl -X POST http://localhost:3000/presence -H "Content-Type: application/json" -d '{
    "ID_Exam": 1,
    "ID_Eleve": 1,
    "Heure_Presence": "09:05"
  }'
  ```

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
