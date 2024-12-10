export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeEntry = newGrades.find((g) => g.studentId === student.id);
      const grade = gradeEntry ? gradeEntry.grade : 'N/A';
      return { ...student, grade };
    });
}