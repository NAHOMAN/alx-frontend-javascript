// Importing the necessary functions from utils.js
import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  try {
    // Await both promises to resolve
    const photo = await uploadPhoto();
    const user = await createUser();

    // Log the results
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  } catch (error) {
    // Log error message if any promise fails
    console.log('Signup system offline');
  }
}
