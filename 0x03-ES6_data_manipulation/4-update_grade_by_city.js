export default function updateStudentGradeByCity(students, city, newGrades) {
return students
  .filter((student) => student.location === city)
  .map((student) => {
    const grade = newGrades.find((g) => g.studentId === student.id)?.grade || 'N/A';
    return { ...student, grade };
  });
}
