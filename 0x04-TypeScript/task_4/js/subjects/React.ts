namespace Subjects {
  // Using declaration merging to add optional attribute experienceTeachingReact to Teacher interface
  export interface Teacher {
    experienceTeachingReact?: number; // Optional attribute
  }

  export class React extends Subject {
    // Method to get requirements for React
    getRequirements(): string {
      return 'Here is the list of requirements for React';
    }

    // Method to get available teacher
    getAvailableTeacher(): string {
      if (!this.teacher.experienceTeachingReact) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}
