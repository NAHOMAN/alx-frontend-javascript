export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList }, // Spread syntax to copy employeesList
    getNumberOfDepartments() {
      return Object.keys(employeesList).length; // Returns the number of departments
    },
  };
}
