import uploadPhoto from './5-photo-reject'; // Adjust the import path based on your project structure
import createUser from './4-user-promise';   // Adjust the import path based on your project structure

export default async function handleProfileSignup() {
  try {
    // Call the functions and wait for the promises to resolve
    const photoResponse = await uploadPhoto('my-photo.jpg'); // Pass a sample filename
    const userResponse = await createUser('Guillaume', 'Salva'); // Pass user details

    // Log the results in the required format
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    // Log error message in case of failure
    console.error('Signup system offline');
  }
}
