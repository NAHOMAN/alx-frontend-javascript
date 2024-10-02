import uploadPhoto from './utils.js'; // Adjust the path to your utils.js
import createUser from './utils.js';   // Adjust the path to your utils.js

export default async function asyncUploadUser(fileName, firstName, lastName) {
  try {
    // Call the functions and await their results
    const photoResponse = await uploadPhoto(fileName);
    const userResponse = await createUser(firstName, lastName);

    // Return an object containing both responses
    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the calls fail, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}

