const numStudents = new DevExpress.ui.dxNumberBox("#num-students", {
  min: 1,
  onValueChanged: function (e) {
    createStudentInputs(e.value, numSubjects.option("value"));
  }
});

const numSubjects = new DevExpress.ui.dxNumberBox("#num-subjects", {
  min: 1,
  onValueChanged: function (e) {
    createSubjectInput(e.value);
    createStudentInputs(numStudents.option("value"), e.value);
  }
});

const submitBtn = new DevExpress.ui.dxButton("#submit-btn", {
  text: "Submit",
  onClick: function () {
    const inputSection = document.getElementById('input-section');
    const dataSection = document.getElementById('data-section');

    inputSection.style.display = 'none';
    dataSection.style.display = 'block';
  }
});

const calculateBtn = new DevExpress.ui.dxButton("#calculate-btn", {
  text: "Calculate",
  onClick: function () {
    const students = getStudentData();
    displayStudentMarks(students);

    const dataSection = document.getElementById('data-section');
    const resultSection = document.getElementById('result-section');

    dataSection.style.display = 'none';
    resultSection.style.display = 'block';
  }
});

function createSubjectInput(numSubjects) {
  const subjectNamesDiv = document.getElementById('subject-names');
  subjectNamesDiv.innerHTML = '';

  for (let i = 0; i < numSubjects; i++) {
    const subjectNameTextbox = new DevExpress.ui.dxTextBox(document.createElement('div'), {
      placeholder: `Enter Subject ${i + 1} Name`,
      elementAttr: { 'class': 'dx-field-value' }
    }).element();

    subjectNamesDiv.appendChild(subjectNameTextbox);
  }
}

function createStudentInputs(numStudents, numSubjects) {
  const studentsDiv = document.getElementById('students');
  studentsDiv.innerHTML = '';

  for (let i = 0; i < numStudents; i++) {
    const studentDiv = document.createElement('div');
    studentDiv.setAttribute('class', 'dx-field student');

    const nameTextbox = new DevExpress.ui.dxTextBox(document.createElement('div'), {
      placeholder: `Enter Student ${i + 1} Name (max 20 characters)`,
      elementAttr: { 'class': 'dx-field-value' }
    }).element();

    studentDiv.appendChild(nameTextbox);
  }
}






















// // JS

// // Listener pour charger la page
// document.addEventListener('DOMContentLoaded', function() {

//   // Obtenir les boutons de soumission et de calcul
//   const submitBtn = document.getElementById('submit-btn');
//   const calculateBtn = document.getElementById('calculate-btn');

//   // Listener pour le bouton de soumission
//   submitBtn.addEventListener('click', function() {

//     // Obtenir le nombre d'étudiants et de matières
//     const numStudents = parseInt(document.getElementById('num-students').value);
//     const numSubjects = parseInt(document.getElementById('num-subjects').value);

//     // Créer les champs d'entrée pour les matières
//     createSubjectInput(numSubjects);

//     // Créer les champs d'entrée pour les étudiants
//     createStudentInputs(numStudents, numSubjects);

//     // Cacher la section d'entrée et afficher la section de données
//     const inputSection = document.getElementById('input-section');
//     const dataSection = document.getElementById('data-section');
//     inputSection.style.display = 'none';
//     dataSection.style.display = 'flex';
//   });

//   // Listener pour le bouton de calcul
//   calculateBtn.addEventListener('click', function() {

//     // Obtenir les données des étudiants
//     const students = getStudentData();

//     // Afficher les notes des étudiants
//     displayStudentMarks(students);

//     // Cacher la section de données et afficher la section de résultats
//     const dataSection = document.getElementById('data-section');
//     const resultSection = document.getElementById('result-section');
//     dataSection.style.display = 'none';
//     resultSection.style.display = 'flex';
//   });
// });

// // Fonction pour créer les champs d'entrée pour les matières
// function createSubjectInput(numSubjects) {
//   const subjectNamesDiv = document.getElementById('subject-names');
//   subjectNamesDiv.innerHTML = '';

//   for (let i = 0; i < numSubjects; i++) {
//     const label = document.createElement('label');
//     label.setAttribute('for', `subject-${i+1}`);
//     label.textContent = `Entrer le nom de la matière ${i+1} :`;

//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('id', `subject-${i+1}`);
//     input.required = true;

//     subjectNamesDiv.appendChild(label);
//     subjectNamesDiv.appendChild(input);
//     subjectNamesDiv.appendChild(document.createElement('br'));
//   }
// }

// // Fonction pour créer les champs d'entrée pour les étudiants
// function createStudentInputs(numStudents, numSubjects) {
//   const studentsDiv = document.getElementById('students');
//   studentsDiv.innerHTML = '';

//   for (let i = 0; i < numStudents; i++) {
//     const studentDiv = document.createElement('div');
//     studentDiv.classList.add('student');

//     const nameLabel = document.createElement('label');
//     nameLabel.setAttribute('for', `name-${i+1}`);
//     nameLabel.textContent = `Entrer le nom de l'étudiant ${i+1} (max 20 caractères) :`;

//     const nameInput = document.createElement('input');
//     nameInput.setAttribute('type', 'text');
//     nameInput.setAttribute('id', `name-${i+1}`);
//     nameInput.setAttribute('maxlength', '20');
//     nameInput.required = true;

//     studentDiv.appendChild(nameLabel);
//     studentDiv.appendChild(nameInput);

//     const subjectMarks = document.createElement('div');
//     subjectMarks.classList.add('subject-marks');

//     for (let j = 0; j < numSubjects; j++) {
//       const subLabel = document.createElement('label');
//       subLabel.setAttribute('for', `marks-${i+1}-${j+1}`);
//       subLabel.textContent = `Entrer les notes de ${document.getElementById(`subject-${j+1}`).value} :`;

//       const marksInput = document.createElement('input');
//       marksInput.setAttribute('type', 'number');
//       marksInput.setAttribute('id', `marks-${i+1}-${j+1}`);
//       marksInput.required = true;

//       subjectMarks.appendChild(subLabel);
//       subjectMarks.appendChild(marksInput);
//     }

//     studentDiv.appendChild(subjectMarks);

//     studentsDiv.appendChild(studentDiv);
//   }
// }

// // Fonction pour obtenir les données des étudiants
// function getStudentData() {
//   const students = [];

//   // Obtenir le nombre d'étudiants et de matières
//   const numStudents = parseInt(document.getElementById('num-students').value);
//   const numSubjects = parseInt(document.getElementById('num-subjects').value);

//   for (let i = 0; i < numStudents; i++) {
//     const student = {
//       name: document.getElementById(`name-${i+1}`).value,
//       total: 0,
//       sub: {
//         subjectName: [],
//         subjectMarks: []
//       }
//     };

//     for (let j = 0; j < numSubjects; j++) {
//       const subjectName = document.getElementById(`subject-${j+1}`).value;
//       const marks = parseInt(document.getElementById(`marks-${i+1}-${j+1}`).value);

//       student.sub.subjectName.push(subjectName);
//       student.sub.subjectMarks.push(marks);
//       student.total += marks;
//     }

//     students.push(student);
//   }

//   return students;
// }

// // Fonction pour afficher les notes des étudiants
// function displayStudentMarks(students) {
//   const studentMarksDiv = document.getElementById('student-marks');
//   studentMarksDiv.innerHTML = '';

//   students.forEach(function(student) {
//     const studentDiv = document.createElement('div');
//     studentDiv.classList.add('student');

//     const nameHeading = document.createElement('h3');
//     nameHeading.textContent = `Notes totales de ${student.name} : ${student.total}`;

//     student.sub.subjectName.forEach(function(subjectName, index) {
//       const subjectMark = document.createElement('p');
//       subjectMark.textContent = `${subjectName} : ${student.sub.subjectMarks[index]}`;
//       studentDiv.appendChild(subjectMark);
//     });

//     studentDiv.appendChild(nameHeading);
//     studentMarksDiv.appendChild(studentDiv);
//   });
// }





































// // Attendre que le DOM soit chargé
// document.addEventListener('DOMContentLoaded', function() {
//   // Obtenir les boutons soumettre et calculer
//   const submitBtn = document.getElementById('submit-btn');
//   const calculateBtn = document.getElementById('calculate-btn');

//   // Ajouter un écouteur d'événements au bouton soumettre
//   submitBtn.addEventListener('click', function() {
//     // Obtenir le nombre d'étudiants et de matières
//     const numStudents = parseInt(document.getElementById('num-students').value);
//     const numSubjects = parseInt(document.getElementById('num-subjects').value);

//     // Créer les champs de saisie des matières
//     createSubjectInput(numSubjects);

//     // Créer les champs de saisie des étudiants
//     createStudentInputs(numStudents, numSubjects);

//     // Masquer la section de saisie et afficher la section des données
//     const inputSection = document.getElementById('input-section');
//     const dataSection = document.getElementById('data-section');
//     inputSection.style.display = 'none';
//     dataSection.style.display = 'block';
//   });

//   // Ajouter un écouteur d'événements au bouton calculer
//   calculateBtn.addEventListener('click', function() {
//     // Obtenir les données des étudiants
//     const students = getStudentData();

//     // Afficher les notes des étudiants
//     displayStudentMarks(students);

//     // Masquer la section des données et afficher la section des résultats
//     const dataSection = document.getElementById('data-section');
//     const resultSection = document.getElementById('result-section');
//     dataSection.style.display = 'none';
//     resultSection.style.display = 'block';
//   });
// });

// // Fonction pour créer les champs de saisie des matières
// function createSubjectInput(numSubjects) {
//   const subjectNamesDiv = document.getElementById('subject-names');
//   subjectNamesDiv.innerHTML = '';

//   for (let i = 0; i < numSubjects; i++) {
//     // Créer une étiquette pour le champ de saisie de la matière
//     const label = document.createElement('label');
//     console.log(label.setAttribute('for', `subject-${i+1}`));
//     // console.log(label.textContent = `Entrer le nom de la matière ${i+1} :`);
//     label.textContent = `Entrer le nom de la matière ${i+1} :`

//     // Créer le champ de saisie de la matière
//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('id', `subject-${i+1}`);
//     input.required = true;

//     // Ajouter l'étiquette, le champ de saisie et un saut de ligne à subjectNamesDiv
//     subjectNamesDiv.appendChild(label);
//     subjectNamesDiv.appendChild(input);
//     subjectNamesDiv.appendChild(document.createElement('br'));
//   }
// }

// // Fonction pour créer les champs de saisie des étudiants
// function createStudentInputs(numStudents, numSubjects) {
//   const studentsDiv = document.getElementById('students');
//   studentsDiv.innerHTML = '';

//   for (let i = 0; i < numStudents; i++) {
//     // Créer une div pour chaque étudiant
//     const studentDiv = document.createElement('div');

//     // Créer une étiquette pour le champ de saisie du nom de l'étudiant
//     const nameLabel = document.createElement('label');
//     nameLabel.setAttribute('for', `name-${i+1}`);
//     nameLabel.textContent = `Entrer le nom de l'étudiant ${i+1} (max 20 caractères) :`;

//     // Créer le champ de saisie du nom de l'étudiant
//     const nameInput = document.createElement('input');
//     nameInput.setAttribute('type', 'text');
//     nameInput.setAttribute('id', `name-${i+1}`);
//     nameInput.setAttribute('maxlength', '20');
//     nameInput.required = true;

//     // Ajouter l'étiquette et le champ de saisie à studentDiv
//     studentDiv.appendChild(nameLabel);
//     studentDiv.appendChild(nameInput);

//     // Créer une div pour les notes des matières
//     const subjectMarks = document.createElement('div');
//     subjectMarks.classList.add('subject-marks');

//     // Créer une étiquette et un champ de saisie pour chaque matière
//     for (let j = 0; j < numSubjects; j++) {
//       const subLabel = document.createElement('label');
//       subLabel.setAttribute('for', `marks-${i+1}-${j+1}`);
//       subLabel.textContent = `Entrer les notes de ${document.getElementById(`subject-${j+1}`).value} :`;

//       const marksInput = document.createElement('input');
//       marksInput.setAttribute('type', 'number');
//       marksInput.setAttribute('id', `marks-${i+1}-${j+1}`);
//       marksInput.required = true;

//       // Ajouter l'étiquette et le champ de saisie à la div subjectMarks
//       subjectMarks.appendChild(subLabel);
//       subjectMarks.appendChild(marksInput);
//     }

//     // Ajouter la div subjectMarks à la div studentDiv
//     studentDiv.appendChild(subjectMarks);

//     // Ajouter la div studentDiv à la div studentsDiv
//     studentsDiv.appendChild(studentDiv);
//   }
// }

// // Fonction pour obtenir les données des étudiants
// function getStudentData() {
//   const students = [];

//   // Obtenir le nombre d'étudiants et de matières
//   const numStudents = parseInt(document.getElementById('num-students').value);
//   const numSubjects = parseInt(document.getElementById('num-subjects').value);

//   // Parcourir chaque étudiant et obtenir ses données
//   for (let i = 0; i < numStudents; i++) {
//     const student = {
//       name: document.getElementById(`name-${i+1}`).value,
//       total: 0,
//       sub: {
//         subjectName: [],
//         subjectMarks: []
//       }
//     };

//     // Parcourir chaque matière et obtenir les notes de l'étudiant actuel
//     for (let j = 0; j < numSubjects; j++) {
//       const subjectName = document.getElementById(`subject-${j+1}`).value;
//       const marks = parseInt(document.getElementById(`marks-${i+1}-${j+1}`).value);

//       // Ajouter le nom de la matière et les notes à l'objet student et mettre à jour les notes totales de l'étudiant actuel
//       student.sub.subjectName.push(subjectName);
//       student.sub.subjectMarks.push(marks);
//       student.total += marks;
//     }

//     // Ajouter l'objet student actuel au tableau students
//     students.push(student);
//   }

//   return students;
// }

// // Fonction pour afficher les notes des étudiants
// function displayStudentMarks(students) {
//   const studentMarksDiv = document.getElementById('student-marks');
//   studentMarksDiv.innerHTML = '';

//   // Parcourir chaque étudiant et afficher ses notes totales
//   students.forEach(function(student) {
//     const studentDiv = document.createElement('div');

//     const nameHeading = document.createElement('h3');
//     nameHeading.textContent = `Notes totales de ${student.name} : ${student.total}`;

//     // Ajouter nameHeading à studentDiv et ajouter studentDiv à studentMarksDiv
//     studentDiv.appendChild(nameHeading);
//     studentMarksDiv.appendChild(studentDiv);
//   });
// }


























// // Wait for DOM to load
// document.addEventListener('DOMContentLoaded', function() {
//   // Get submit and calculate buttons
//   const submitBtn = document.getElementById('submit-btn');
//   const calculateBtn = document.getElementById('calculate-btn');

//   // Add event listener to submit button
//   submitBtn.addEventListener('click', function() {
//     // Get number of students and subjects
//     const numStudents = parseInt(document.getElementById('num-students').value);
//     const numSubjects = parseInt(document.getElementById('num-subjects').value);

//     // Create subject input fields
//     createSubjectInput(numSubjects);

//     // Create student input fields
//     createStudentInputs(numStudents, numSubjects);

//     // Hide input section and show data section
//     const inputSection = document.getElementById('input-section');
//     const dataSection = document.getElementById('data-section');
//     inputSection.style.display = 'none';
//     dataSection.style.display = 'block';
//   });

//   // Add event listener to calculate button
//   calculateBtn.addEventListener('click', function() {
//     // Get student data
//     const students = getStudentData();

//     // Display student marks
//     displayStudentMarks(students);

//     // Hide data section and show result section
//     const dataSection = document.getElementById('data-section');
//     const resultSection = document.getElementById('result-section');
//     dataSection.style.display = 'none';
//     resultSection.style.display = 'block';
//   });
// });

// // Function to create subject input fields
// function createSubjectInput(numSubjects) {
//   const subjectNamesDiv = document.getElementById('subject-names');
//   subjectNamesDiv.innerHTML = '';

//   for (let i = 0; i < numSubjects; i++) {
//     // Create label for subject input field
//     const label = document.createElement('label');
//     label.setAttribute('for', `subject-${i+1}`);
//     label.textContent = `Enter Subject ${i+1} Name:`;

//     // Create subject input field
//     const input = document.createElement('input');
//     input.setAttribute('type', 'text');
//     input.setAttribute('id', `subject-${i+1}`);
//     input.required = true;

//     // Append label, input field, and line break to subjectNamesDiv
//     subjectNamesDiv.appendChild(label);
//     subjectNamesDiv.appendChild(input);
//     subjectNamesDiv.appendChild(document.createElement('br'));
//   }
// }

// // Function to create student input fields
// function createStudentInputs(numStudents, numSubjects) {
//   const studentsDiv = document.getElementById('students');
//   studentsDiv.innerHTML = '';

//   for (let i = 0; i < numStudents; i++) {
//     // Create div for each student
//     const studentDiv = document.createElement('div');

//     // Create label for student name input field
//     const nameLabel = document.createElement('label');
//     nameLabel.setAttribute('for', `name-${i+1}`);
//     nameLabel.textContent = `Enter Student ${i+1} Name (max 20 characters):`;

//     // Create student name input field
//     const nameInput = document.createElement('input');
//     nameInput.setAttribute('type', 'text');
//     nameInput.setAttribute('id', `name-${i+1}`);
//     nameInput.setAttribute('maxlength', '20');
//     nameInput.required = true;

//     // Append label and input field to studentDiv
//     studentDiv.appendChild(nameLabel);
//     studentDiv.appendChild(nameInput);

//     // Create div for subject marks
//     const subjectMarks = document.createElement('div');
//     subjectMarks.classList.add('subject-marks');

//     // Create label and input fields for each subject
//     for (let j = 0; j < numSubjects; j++) {
//       const subLabel = document.createElement('label');
//       subLabel.setAttribute('for', `marks-${i+1}-${j+1}`);
//       subLabel.textContent = `Enter ${document.getElementById(`subject-${j+1}`).value} Marks:`;

//       const marksInput = document.createElement('input');
//       marksInput.setAttribute('type', 'number');
//       marksInput.setAttribute('id', `marks-${i+1}-${j+1}`);
//       marksInput.required = true;

//       // Append label and input field to subjectMarks div
//       subjectMarks.appendChild(subLabel);
//       subjectMarks.appendChild(marksInput);
//     }

//     // Append subjectMarks div to studentDiv
//     studentDiv.appendChild(subjectMarks);

//     // Append studentDiv to studentsDiv
//     studentsDiv.appendChild(studentDiv);
//   }
// }

// // Function to get student data
// function getStudentData() {
//   const students = [];

//   // Get number of students and subjects
//   const numStudents = parseInt(document.getElementById('num-students').value);
//   const numSubjects = parseInt(document.getElementById('num-subjects').value);

//   // Loop through each student and get their data
//   for (let i = 0; i < numStudents; i++) {
//     const student = {
//       name: document.getElementById(`name-${i+1}`).value,
//       total: 0,
//       sub: {
//         subjectName: [],
//         subjectMarks: []
//       }
//     };

//     // Loop through each subject and get the marks of the current student
//     for (let j = 0; j < numSubjects; j++) {
//       const subjectName = document.getElementById(`subject-${j+1}`).value;
//       const marks = parseInt(document.getElementById(`marks-${i+1}-${j+1}`).value);

//       // Add subject name and marks to student object and update total marks of the current student
//       student.sub.subjectName.push(subjectName);
//       student.sub.subjectMarks.push(marks);
//       student.total += marks;
//     }

//     // Add current student object to students array
//     students.push(student);
//   }

//   return students;
// }

// // Function to display student marks
// function displayStudentMarks(students) {
//   const studentMarksDiv = document.getElementById('student-marks');
//   studentMarksDiv.innerHTML = '';

//   // Loop through each student and display their total marks
//   students.forEach(function(student) {
//     const studentDiv = document.createElement('div');

//     const nameHeading = document.createElement('h3');
//     nameHeading.textContent = `Total Marks of ${student.name} = ${student.total}`;

//     // Append nameHeading to studentDiv and append studentDiv to studentMarksDiv
//     studentDiv.appendChild(nameHeading);
//     studentMarksDiv.appendChild(studentDiv);
//   });
// }


































// document.addEventListener('DOMContentLoaded', function() {
//     const submitBtn = document.getElementById('submit-btn');
//     const calculateBtn = document.getElementById('calculate-btn');

//     submitBtn.addEventListener('click', function() {
//       const numStudents = parseInt(document.getElementById('num-students').value);
//       const numSubjects = parseInt(document.getElementById('num-subjects').value);

//       createSubjectInput(numSubjects);
//       createStudentInputs(numStudents, numSubjects);

//       const inputSection = document.getElementById('input-section');
//       const dataSection = document.getElementById('data-section');

//       inputSection.style.display = 'none';
//       dataSection.style.display = 'block';
//     });

//     calculateBtn.addEventListener('click', function() {
//       const students = getStudentData();
//       displayStudentMarks(students);

//       const dataSection = document.getElementById('data-section');
//       const resultSection = document.getElementById('result-section');

//       dataSection.style.display = 'none';
//       resultSection.style.display = 'block';
//     });
//   });

//   function createSubjectInput(numSubjects) {
//     const subjectNamesDiv = document.getElementById('subject-names');
//     subjectNamesDiv.innerHTML = '';

//     for (let i = 0; i < numSubjects; i++) {
//       const label = document.createElement('label');
//       label.setAttribute('for', `subject-${i+1}`);
//       label.textContent = `Enter Subject ${i+1} Name:`;

//       const input = document.createElement('input');
//       input.setAttribute('type', 'text');
//       input.setAttribute('id', `subject-${i+1}`);
//       input.required = true;

//       subjectNamesDiv.appendChild(label);
//       subjectNamesDiv.appendChild(input);
//       subjectNamesDiv.appendChild(document.createElement('br'));
//     }
//   }

//   function createStudentInputs(numStudents, numSubjects) {
//     const studentsDiv = document.getElementById('students');
//     studentsDiv.innerHTML = '';

//     for (let i = 0; i < numStudents; i++) {
//       const studentDiv = document.createElement('div');

//       const nameLabel = document.createElement('label');
//       nameLabel.setAttribute('for', `name-${i+1}`);
//       nameLabel.textContent = `Enter Student ${i+1} Name (max 20 characters):`;

//       const nameInput = document.createElement('input');
//       nameInput.setAttribute('type', 'text');
//       nameInput.setAttribute('id', `name-${i+1}`);
//       nameInput.setAttribute('maxlength', '20');
//       nameInput.required = true;

//       studentDiv.appendChild(nameLabel);
//       studentDiv.appendChild(nameInput);

//       const subjectMarks = document.createElement('div');
//       subjectMarks.classList.add('subject-marks');

//       for (let j = 0; j < numSubjects; j++) {
//         const subLabel = document.createElement('label');
//         subLabel.setAttribute('for', `marks-${i+1}-${j+1}`);
//         subLabel.textContent = `Enter ${document.getElementById(`subject-${j+1}`).value} Marks:`;

//         const marksInput = document.createElement('input');
//         marksInput.setAttribute('type', 'number');
//         marksInput.setAttribute('id', `marks-${i+1}-${j+1}`);
//         marksInput.required = true;

//         subjectMarks.appendChild(subLabel);
//         subjectMarks.appendChild(marksInput);
//       }

//       studentDiv.appendChild(subjectMarks);
//       studentsDiv.appendChild(studentDiv);
//     }
//   }

//   function getStudentData() {
//     const students = [];

//     const numStudents = parseInt(document.getElementById('num-students').value);
//     const numSubjects = parseInt(document.getElementById('num-subjects').value);

//     for (let i = 0; i < numStudents; i++) {
//       const student = {
//         name: document.getElementById(`name-${i+1}`).value,
//         total: 0,
//         sub: {
//           subjectName: [],
//           subjectMarks: []
//         }
//       };

//       for (let j = 0; j < numSubjects; j++) {
//         const subjectName = document.getElementById(`subject-${j+1}`).value;
//         const marks = parseInt(document.getElementById(`marks-${i+1}-${j+1}`).value);

//         student.sub.subjectName.push(subjectName);
//         student.sub.subjectMarks.push(marks);
//         student.total += marks;
//       }

//       students.push(student);
//     }

//     return students;
//   }

//   function displayStudentMarks(students) {
//     const studentMarksDiv = document.getElementById('student-marks');
//     studentMarksDiv.innerHTML = '';

//     students.forEach(function(student) {
//       const studentDiv = document.createElement('div');

//       const nameHeading = document.createElement('h3');
//       nameHeading.textContent = `Total Marks of ${student.name} = ${student.total}`;

//       studentDiv.appendChild(nameHeading);
//       studentMarksDiv.appendChild(studentDiv);
//     }); }

