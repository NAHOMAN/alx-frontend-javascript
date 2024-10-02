import uploadPhoto from './3-all'; // Adjust the import path if necessary
import createUser from './3-all';   // Adjust the import path if necessary

export default async function handleProfileSignup(fileName, firstName, lastName) {
  try {
    // Wait for both promises to resolve
    const [photoResponse, userResponse] = await Promise.all([
      uploadPhoto(fileName),
      createUser(firstName, lastName),
    ]);

    // Log the desired output to the console
    console.log(photoResponse.body, userResponse.firstName, userResponse.lastName);
  } catch (error) {
    // Log error message if any of the promises are rejected
    console.log('Signup system offline');
  }
}
