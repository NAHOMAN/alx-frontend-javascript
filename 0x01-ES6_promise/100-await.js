import uploadPhoto from './5-photo-reject'; // Adjust the import paths as necessary
import createUser from './4-user-promise'; // Adjust the import paths as necessary

export default async function asyncUploadUser(fileName = 'file.jpg', firstName = 'John', lastName = 'Doe') {
  const result = {
    photo: null,
    user: null,
  };

  try {
    // Attempt to upload the photo
    const photoResponse = await uploadPhoto(fileName);
    result.photo = photoResponse; // Assign the response to the result object

    // Attempt to create the user
    const userResponse = await createUser(firstName, lastName);
    result.user = userResponse; // Assign the response to the result object

  } catch (error) {
    // Optional: Log the error for debugging purposes
    console.error('Error during photo upload or user creation:', error);
  }

  return result; // Return the result object, will contain nulls if any operation failed
}
