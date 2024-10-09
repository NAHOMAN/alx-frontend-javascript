// main.ts

// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  brand: 'major';
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  brand: 'minor';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'major', // Maintain the brand to identify the interface
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'minor', // Maintain the brand to identify the interface
  };
}

// Example usage
const major1: MajorCredits = { credits: 30, brand: 'major' };
const major2: MajorCredits = { credits: 20, brand: 'major' };
const totalMajor = sumMajorCredits(major1, major2);
console.log(`Total Major Credits: ${totalMajor.credits}`); // Output: Total Major Credits: 50

const minor1: MinorCredits = { credits: 10, brand: 'minor' };
const minor2: MinorCredits = { credits: 15, brand: 'minor' };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log(`Total Minor Credits: ${totalMinor.credits}`); // Output: Total Minor Credits: 25
