export default function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return [];
  }

  // Use the map function to return an array of ids
  return students.map(student => student.id);
}
