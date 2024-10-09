namespace Subjects {
  // Using declaration merging to add optional attribute experienceTeachingC to Teacher interface
  export interface Teacher {
    experienceTeachingC?: number; // Optional attribute
  }

  export class Cpp extends Subject {
    // Method to get requirements for Cpp
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    // Method to get available teacher
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
