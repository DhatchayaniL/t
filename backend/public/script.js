document.getElementById('studentForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const studentData = {};
  formData.forEach((value, key) => {
    studentData[key] = value;
  });

  try {
    const response = await fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    if (response.ok) {
      const students = await response.json();
      updateTable(students);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});

function updateTable(students) {
  const tableBody = document.querySelector('#studentsTable tbody');
  tableBody.innerHTML = '';

  students.forEach((student) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.dob}</td>
      <td>${student.course}</td>
      <td>${student.year}</td>
      <td>${student.age}</td>
    `;
    tableBody.appendChild(row);
  });
}

async function fetchStudents() {
  try {
    const response = await fetch('/api/students');
    if (response.ok) {
      const students = await response.json();
      updateTable(students);
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchStudents();
