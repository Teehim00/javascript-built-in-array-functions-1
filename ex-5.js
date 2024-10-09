const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  //console.log(students)
  let newScore = students.reduce((acc,stu)=>acc+stu.score,1);
  let num=students.length;
  //console.log(num)
  //console.log(newScore)
  return newScore/num
}

let sum = getAverageStudentScore(students);
console.log(sum)
//getAverageStudentScore(students); // Output: 87.5
