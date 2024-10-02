import uploadPhoto from './utils.js'; // Adjust the import path as necessary
import createUser from './utils.js';   // Adjust the import path as necessary

export default async function handleProfileSignup(fileName, firstName, lastName) {
  try {
    // Collectively resolve the promises
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(fileName),
      createUser(firstName, lastName),
    ]);

    // Log the body from the uploadPhoto response and firstName, lastName from createUser response
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    // Log error message if any of the promises are rejected
    console.log('Signup system offline');
  }
}
