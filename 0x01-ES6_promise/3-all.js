import uploadPhoto from './utils.js'; // Adjust the import path if necessary
import createUser from './utils.js';   // Adjust the import path if necessary

export default async function handleProfileSignup() {
  try {
    // Wait for both promises to resolve
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto('photo-profile-1.jpg'), // Example filename
      createUser('Guillaume', 'Salva'),   // Example user details
    ]);

    // Log the desired output to the console
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    // Log error message if any of the promises are rejected
    console.log('Signup system offline');
  }
}
