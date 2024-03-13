interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "dexter",
  lastName: "morgan",
  age: 23,
  location: "Miami"
};

const student2: Student = {
  firstName: "jesse",
  lastName: "pinkman",
  age: 21,
  location: "New York"
};

const studentsList: Student[] = [student1, student2];

// function renderTable(data) {
//   const table = document.createElement("table");
//   const thead = document.createElement("thead"); 
// }

studentsList.forEach(student => {
  let row = document.createElement("tr");
})