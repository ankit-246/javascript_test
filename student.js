const students = [
    { name: "Raja", scores: [100, 100, 100] },
    { name: "Sampath", scores: [90, 85, 77] },
    { name: "Vikas", scores: [99, 92, 77] },
    { name: "Suma", scores: [77, 65, 44] },
    { name: "Arjun", scores: [35, 36, 37] },
  ];
  
  const filteredStudents = students
    .map(student => ({
      name: student.name,
      average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
    }))
    .filter(student => student.average > 85);
  
  console.log(filteredStudents);
  