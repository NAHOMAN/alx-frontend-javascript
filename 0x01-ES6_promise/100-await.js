import uploadPhoto from './utils.js'; // Adjust the import path as needed
import createUser from './utils.js';   // Adjust the import path as needed

export default async function asyncUploadUser(firstName, lastName, fileName) {
  try {
    // Await the responses from uploadPhoto and createUser functions
    const photoResponse = await uploadPhoto(fileName);
    const userResponse = await createUser(firstName, lastName);

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
