// DirectorInterface with the 3 expected methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with the 3 expected methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}
// Function to create either a Director or a Teacher based on salary
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

