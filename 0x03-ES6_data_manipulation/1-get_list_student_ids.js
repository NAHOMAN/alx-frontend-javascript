export default function getListStudentIds(students) {
  // Return an empty array if the input is not an array
  if (!Array.isArray(students)) return [];

  // Use reduce to collect ids into an array
  return students.reduce((accumulator, student) => {
    // Check if student has an id and add it to the accumulator
    if (student.id !== undefined) {
      accumulator.push(student.id);
    }
    return accumulator; // Return the accumulator for the next iteration
  }, []);
}
