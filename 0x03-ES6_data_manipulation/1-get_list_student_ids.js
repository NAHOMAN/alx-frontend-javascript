export default function getListStudentIds(students) {
  // Initialize an empty array to hold the IDs
  const ids = [];

  // Check if the input is an array
  if (Array.isArray(students)) {
    // Loop through each student object in the array
    students.forEach(student => {
      // Push the student's id into the ids array
      ids.push(student.id);
    });
  }

  // Return the array of ids (empty if the input was not an array)
  return ids;
}
