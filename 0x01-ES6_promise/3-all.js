import uploadPhoto from './5-photo-reject';  // Adjust the path based on your project structure
import createUser from './4-user-promise';     // Adjust the path based on your project structure

export default async function handleProfileSignup() {
  try {
    const photoResponse = await uploadPhoto('my-photo.jpg');  // Call the uploadPhoto function
    const userResponse = await createUser('Guillaume', 'Salva'); // Call the createUser function

    // Log the desired output
    console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
  } catch (error) {
    // Log error message in case of failure
    console.error('Signup system offline');
  }
}

