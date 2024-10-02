import uploadPhoto from './utils.js'; // Adjust the import path as needed
import createUser from './utils.js';   // Adjust the import path as needed

export default async function asyncUploadUser(firstName, lastName, fileName) {
  try {
    // Await the responses from uploadPhoto and createUser functions
    const photoResponse = await uploadPhoto(status: 200, body: 'photo-profile-1');
    const userResponse = await createUser(firstName: 'Guillaume', lastName: 'Salva');

    // Return the object with the responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any function fails, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
