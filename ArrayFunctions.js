// Every Function Arr, It returns the boolean value

// If every item in the array satisifies the condition, then it returns the true or it returns the false

const grades = [18, 20, 21, 13, 10];

const isHighGrade = grades.every((grade) => grade >= 20);

// console.log(isHighGrade);

// Find Function Arr, It returns value

// If anyItem in the arr matchs the given condition then it returns the item, or it returns the undefined value

const persons = [
  {
    name: "Anjan",
    profile: "Material Engineer",
  },
  {
    name: "Prasanna",
    profile: "Software Engineer",
  },
  {
    name: "Vinay",
    profile: "Material Engineer",
  },
  {
    name: "Vishwam",
    profile: "Mechanical Engineer",
  },
];

const result = persons.find((person) => {
  return person.profile === "Material Engineer";
});

console.log(result);
