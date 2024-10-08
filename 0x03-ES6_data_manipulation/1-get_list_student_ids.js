export default function getListStudentIds(students) {
  // Check if the input is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use reduce to create an array of student IDs
  return students.reduce((acc, student) => {
    // Push the student's id into the accumulator array
    acc.push(student.id);

	  return students.map(student => student.id);
  }, []);
}
