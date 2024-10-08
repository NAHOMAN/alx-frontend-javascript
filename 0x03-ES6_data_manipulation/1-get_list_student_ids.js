export default function getListStudentIds(students) {
  // Return an empty array if the input is not an array
  if (!Array.isArray(students)) return [];

  // Initialize an empty array to hold the ids
  const ids = [];

  // Loop through each student and push their id to the ids array
  students.forEach(student => {
    if (student.id !== undefined) {
      ids.push(student.id);
    }
  });

  return ids;
}
