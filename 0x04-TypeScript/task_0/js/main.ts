// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 21,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 23,
  location: "Mombasa",
};

// Store students in an array
const studentsList: Student[] = [student1, student2];

// Create a table element
const table = document.createElement("table");
table.border = "1";

// Table header
const headerRow = document.createElement("tr");
const headerName = document.createElement("th");
headerName.textContent = "First Name";
const headerLocation = document.createElement("th");
headerLocation.textContent = "Location";

headerRow.appendChild(headerName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Add rows for each student
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Append table to the body
document.body.appendChild(table);
