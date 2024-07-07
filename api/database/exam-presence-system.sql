-- Création de la table Eleve
CREATE TABLE Eleve (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nom VARCHAR(50) NOT NULL,
    Prenom VARCHAR(50) NOT NULL,
    Date_Naissance DATE NOT NULL,
    CIN VARCHAR(20) UNIQUE NOT NULL,
    CNE VARCHAR(20) UNIQUE NOT NULL,
    Filiere_Bac VARCHAR(50) NOT NULL,
    Mention_Bac VARCHAR(20) NOT NULL,
    Annee_Bac YEAR NOT NULL,
    Filiere VARCHAR(50) NOT NULL
);

-- Création de la table Examen
CREATE TABLE Examen (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Matiere VARCHAR(50) NOT NULL,
    Lieu VARCHAR(100) NOT NULL,
    Date DATE NOT NULL,
    Heure_Deb TIME NOT NULL,
    Heure_Fin TIME NOT NULL
);

-- Création de la table ExamenPresence
CREATE TABLE ExamenPresence (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Exam INT NOT NULL,
    ID_Eleve INT NOT NULL,
    Heure_Presence TIME NOT NULL,
    FOREIGN KEY (ID_Exam) REFERENCES Examen(ID),
    FOREIGN KEY (ID_Eleve) REFERENCES Eleve(ID)
);
