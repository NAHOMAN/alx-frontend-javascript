// Importing the necessary functions from utils.js
import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  // Using Promise.all to resolve both promises
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photoResult, userResult] = results;

      // Log the required values (photoResult.body, userResult.firstName, userResult.lastName)
      console.log(`${photoResult.body} ${userResult.firstName} ${userResult.lastName}`);
    })
    .catch(() => {
      // In case of an error, log "Signup system offline"
      console.log('Signup system offline');
    });
}
