export default function getListStudentIds(students) {
  // Check if the argument is an array
  if (!Array.isArray(students)) {
    return []; // Return an empty array if not an array
  }

  // Use map to extract ids from the array of student objects
  return students.map(student => student.id);
}
