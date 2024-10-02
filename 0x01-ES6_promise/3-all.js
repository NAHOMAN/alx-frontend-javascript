import uploadPhoto from './utils.js'; // Import uploadPhoto function
import createUser from './utils.js';    // Import createUser function

export default async function handleProfileSignup() {
  try {
    // Call the functions and wait for their promises to resolve
    const photoResponse = await uploadPhoto('profile-pic.jpg'); // Replace with your filename
    const userResponse = await createUser('John', 'Doe'); // Replace with actual user details

    // Log the required information to the console
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    // If there's an error, log the error message
    console.log('Signup system offline');
  }
}
