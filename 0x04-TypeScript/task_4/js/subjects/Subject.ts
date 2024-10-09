namespace Subjects {
  export class Subject {
    private teacher!: Teacher; // Attribute of type Teacher

    // Setter method to set the teacher
    setTeacher(teacher: Teacher) {
      this.teacher = teacher;
    }
  }
}
