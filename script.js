
// Récupérer les éléments nécessaires du DOM
const inputSection = document.getElementById("input-section");
const dataSection = document.getElementById("data-section");
const resultSection = document.getElementById("result-section");
const numStudentsInput = document.getElementById("num-students");
const numSubjectsInput = document.getElementById("num-subjects");
const submitBtn = document.getElementById("submit-btn");
const calculateBtn = document.getElementById("calculate-btn");
const subjectInputsContainer = document.getElementById("subject-inputs");
const studentInputsContainer = document.getElementById("student-inputs");
const rankingsContainer = document.getElementById("rankings-container");

let numStudents = 0;
let numSubjects = 0;
let subjectInputs = [];
let studentInputs = [];

// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", function() {

  // Au clic sur le bouton "Soumettre"
  submitBtn.addEventListener("click", function() {
    // Récupérer le nombre d'étudiants et de matières à partir des champs de saisie
    numStudents = parseInt(numStudentsInput.value);
    numSubjects = parseInt(numSubjectsInput.value);

    // Vider les conteneurs des champs de saisie des matières et des étudiants
    subjectInputsContainer.innerHTML = "";
    studentInputsContainer.innerHTML = "";

    for (let i = 0; i < numSubjects; i++) {
      // Créer un élément div pour chaque matière
      const subjectDiv = document.createElement("div");
      subjectDiv.classList.add("form-group");

      // Créer une étiquette pour le nom de la matière
      const nameLabel = document.createElement("label");
      nameLabel.textContent = `Nom de la matière ${i + 1} :`;
      subjectDiv.appendChild(nameLabel);

      // Créer un champ de saisie pour le nom de la matière
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      subjectDiv.appendChild(nameInput);

      // Créer une étiquette pour le coefficient de la matière
      const weightLabel = document.createElement("label");
      weightLabel.textContent = "Coefficient :";
      subjectDiv.appendChild(weightLabel);

      // Créer un champ de saisie pour le coefficient de la matière
      const weightInput = document.createElement("input");
      weightInput.type = "number";
      weightInput.min = 1;
      weightInput.value = 1;
      subjectDiv.appendChild(weightInput);

      // Ajouter les champs de saisie du nom et du coefficient de la matière au tableau subjectInputs
      subjectInputs.push({
        nameInput,
        weightInput
      });

      subjectInputsContainer.appendChild(subjectDiv);
    }

    for (let i = 0; i < numStudents; i++) {
      const studentDiv = document.createElement("div");
      studentDiv.classList.add("form-group");

      const nameLabel = document.createElement("label");
      nameLabel.textContent = `Student ${i + 1} Name:`;
      studentDiv.appendChild(nameLabel);

      const nameInput = document.createElement("input");
      nameInput.type = "text";
      studentDiv.appendChild(nameInput);

      const marksLabel = document.createElement("label");
      marksLabel.textContent = "Marks:";
      studentDiv.appendChild(marksLabel);

      const marksContainer = document.createElement("div");
      marksContainer.classList.add("marks-container");

      for (let j = 0; j < numSubjects; j++) {
        const marksInput = document.createElement("input");
        marksInput.type = "number";
        marksInput.min = 0;
        marksInput.max = 20;
        marksContainer.appendChild(marksInput);
      }

      studentInputs.push({
        nameInput,
        marksContainer
      });

      studentDiv.appendChild(marksContainer);

      studentInputsContainer.appendChild(studentDiv);
    }

    inputSection.style.display = "none";
    dataSection.style.display = "block";
  });

  // Au clic sur le bouton "Calculer"
  calculateBtn.addEventListener("click", function () {
    const subjects = [];
    const students = [];

    for (let i = 0; i < numSubjects; i++) {
      const subjectName = subjectInputs[i].nameInput.value.trim();
      const weight = parseInt(subjectInputs[i].weightInput.value);

      if (subjectName !== "") {
        subjects.push({
          name: subjectName,
          weight: weight
        });
      }
    }

    for (let i = 0; i < numStudents; i++) {
      const studentName = studentInputs[i].nameInput.value.trim();
      const marksInputs = studentInputs[i].marksContainer.getElementsByTagName("input");
      const marks = [];

      for (let j = 0; j < numSubjects; j++) {
        marks.push(parseInt(marksInputs[j].value));
      }

      if (studentName !== "" && marks.length === numSubjects) {
        students.push({
          name: studentName,
          marks: marks
        });
      }
    }

    const rankings = calculateRankings(subjects, students);

    displayRankings(rankings);

    dataSection.style.display = "none";
    resultSection.style.display = "block";
  });

  function calculateRankings(subjects, students) {
    let rankings = [];

    students.forEach((student) => {
      let totalMarks = 0;

      for (let i = 0; i < subjects.length; i++) {
        totalMarks += student.marks[i] * subjects[i].weight;
      }

      const grade = Math.round((totalMarks / (20 * getTotalWeight(subjects))) * 100);

      rankings.push({
        name: student.name,
        grade: grade
      });
    });

    rankings.sort((a, b) => b.grade - a.grade);

    return rankings;
  }

  function getTotalWeight(subjects) {
    let totalWeight = 0;

    subjects.forEach((subject) => {
      totalWeight += subject.weight;
    });

    return totalWeight;
  }

  // Cette fonction affiche les classements
function displayRankings(rankings) {
  // On vide le conteneur des classements
  rankingsContainer.innerHTML = "";

  // Pour chaque étudiant dans les classements
  for (let i = 0; i < rankings.length; i++) {
      const student = rankings[i];

      // On crée une carte pour l'étudiant
      const studentCard = document.createElement("div");
      studentCard.classList.add("student-card");

      // Si l'étudiant est premier, on ajoute la classe "gold" à sa carte
      if (i === 0) {
          studentCard.classList.add("gold");
      }
      // Si l'étudiant est deuxième, on ajoute la classe "silver" à sa carte
      else if (i === 1) {
          studentCard.classList.add("silver");
      }
      // Si l'étudiant est troisième, on ajoute la classe "bronze" à sa carte
      else if (i === 2) {
          studentCard.classList.add("bronze");
      }

      // On crée un titre pour le nom de l'étudiant et on l'ajoute à sa carte
      const nameHeading = document.createElement("h3");
      nameHeading.textContent = student.name;
      studentCard.appendChild(nameHeading);

      // On crée un élément pour la note de l'étudiant et on l'ajoute à sa carte
      const gradeElement = document.createElement("p");
      gradeElement.textContent = `Grade: ${student.grade}%`;
      studentCard.appendChild(gradeElement);

      // On ajoute la carte de l'étudiant au conteneur des classements
      rankingsContainer.appendChild(studentCard);
  }
}

});



