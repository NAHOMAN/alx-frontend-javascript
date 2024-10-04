// Importing the functions
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // Use Promise.all to collectively resolve both promises
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;

      // Log the resolved values (assuming photoResult has a body and userResult has firstName and lastName)
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      // In case of an error, log this message
      console.log('Signup system offline');
    });
}
