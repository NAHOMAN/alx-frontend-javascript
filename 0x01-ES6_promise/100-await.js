import uploadPhoto from './5-photo-reject'; // Adjust the import paths as necessary
import createUser from './4-user-promise'; // Adjust the import paths as necessary

export default async function asyncUploadUser() {
  try {
    // Call uploadPhoto and createUser, awaiting their responses
    const photo = await uploadPhoto('file.jpg'); // Replace with the actual filename
    const user = await createUser('first name', 'last name'); // Replace with actual user details

    // Return the object with both responses
    return {
      photo,
      user,
    };
  } catch (error) {
    // If any of the async functions fail, return an object with null values
    return {
      photo: null,
      user: null,
    };
  }
}
