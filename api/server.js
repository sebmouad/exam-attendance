// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Activer CORS pour accepter toutes les origines
app.use(express.json()); // Pour parser les requêtes avec JSON

// Route pour ajouter un élève
app.post('/eleve', async (req, res) => {
  const { Nom, Prenom, Date_Naissance, CIN, CNE, Filiere_Bac, Mention_Bac, Annee_Bac, Filiere } = req.body;
  try {
    const [result] = await db.query('INSERT INTO Eleve (Nom, Prenom, Date_Naissance, CIN, CNE, Filiere_Bac, Mention_Bac, Annee_Bac, Filiere) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
      [Nom, Prenom, Date_Naissance, CIN, CNE, Filiere_Bac, Mention_Bac, Annee_Bac, Filiere]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour modifier un élève
app.put('/eleve/:id', async (req, res) => {
  const { id } = req.params;
  const { Nom, Prenom, Date_Naissance, CIN, CNE, Filiere_Bac, Mention_Bac, Annee_Bac, Filiere } = req.body;
  try {
    await db.query('UPDATE Eleve SET Nom = ?, Prenom = ?, Date_Naissance = ?, CIN = ?, CNE = ?, Filiere_Bac = ?, Mention_Bac = ?, Annee_Bac = ?, Filiere = ? WHERE ID = ?', 
      [Nom, Prenom, Date_Naissance, CIN, CNE, Filiere_Bac, Mention_Bac, Annee_Bac, Filiere, id]);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour supprimer un élève
app.delete('/eleve/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM Eleve WHERE ID = ?', [id]);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour chercher un élève par nom ou prénom
app.get('/eleve/nom_prenom', async (req, res) => {
  const { nom, prenom } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM Eleve WHERE Nom LIKE ? OR Prenom LIKE ?', [`%${nom}%`, `%${prenom}%`]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour chercher un élève par CIN ou CNE
app.get('/eleve/cin_cne', async (req, res) => {
  const { cin, cne } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM Eleve WHERE CIN = ? OR CNE = ?', [cin, cne]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour afficher les informations d'un élève par son CNE
app.get('/eleve/cne/:cne', async (req, res) => {
  const { cne } = req.params;
  try {
    const [rows] = await db.query('SELECT * FROM Eleve WHERE CNE = ?', [cne]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour ajouter un examen
app.post('/examen', async (req, res) => {
  const { Matiere, Lieu, Date, Heure_Deb, Heure_Fin } = req.body;
  try {
    const [result] = await db.query('INSERT INTO Examen (Matiere, Lieu, Date, Heure_Deb, Heure_Fin) VALUES (?, ?, ?, ?, ?)', 
      [Matiere, Lieu, Date, Heure_Deb, Heure_Fin]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour modifier un examen
app.put('/examen/:id', async (req, res) => {
  const { id } = req.params;
  const { Matiere, Lieu, Date, Heure_Deb, Heure_Fin } = req.body;
  try {
    await db.query('UPDATE Examen SET Matiere = ?, Lieu = ?, Date = ?, Heure_Deb = ?, Heure_Fin = ? WHERE ID = ?', 
      [Matiere, Lieu, Date, Heure_Deb, Heure_Fin, id]);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour supprimer un examen
app.delete('/examen/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM Examen WHERE ID = ?', [id]);
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour chercher un examen par matière
app.get('/examen/matiere', async (req, res) => {
  const { matiere } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM Examen WHERE Matiere LIKE ?', [`%${matiere}%`]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour chercher un examen par lieu
app.get('/examen/lieu', async (req, res) => {
  const { lieu } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM Examen WHERE Lieu LIKE ?', [`%${lieu}%`]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour chercher un examen par date
app.get('/examen/date', async (req, res) => {
  const { date } = req.query;
  try {
    const [rows] = await db.query('SELECT * FROM Examen WHERE Date = ?', [date]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Route pour enregistrer la présence d'un élève à un examen
app.post('/presence', async (req, res) => {
  const { ID_Exam, ID_Eleve, Heure_Presence } = req.body;
  try {
    const [result] = await db.query('INSERT INTO ExamenPresence (ID_Exam, ID_Eleve, Heure_Presence) VALUES (?, ?, ?)', 
      [ID_Exam, ID_Eleve, Heure_Presence]);
    res.status(201).json({ id: result.insertId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
