import uploadPhoto from './utils.js';
import createUser from './utils.js';

export default async function asyncUploadUser() {
  try {
    const photoResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: photoResponse,
      user: userResponse,
    };
  } catch (error) {
    // If any of the async calls fail, return an empty object
    return {
      photo: null,
      user: null,
    };
  }
}
