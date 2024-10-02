import uploadPhoto from './utils.js'; // Adjust the path if necessary
import createUser from './utils.js';   // Adjust the path if necessary

export default async function handleProfileSignup() {
  try {
    // Call the functions and wait for their promises to resolve
    const photoResponse = await uploadPhoto('photo-profile-1.jpg'); // Example filename
    const userResponse = await createUser('Guillaume', 'Salva'); // Example user details

    // Log the required information to the console
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    // If there's an error, log the error message
    console.log('Signup system offline');
  }
}

