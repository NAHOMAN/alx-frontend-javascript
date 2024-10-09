namespace Subjects {
  // Using declaration merging to add optional attribute experienceTeachingJava to Teacher interface
  export interface Teacher {
    experienceTeachingJava?: number; // Optional attribute
  }

  export class Java extends Subject {
    // Method to get requirements for Java
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    // Method to get available teacher
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingJava) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
