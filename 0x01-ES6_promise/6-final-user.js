import signUpUser from './4-user-promise.js'; // Adjust the path as necessary
import uploadPhoto from './5-photo-reject.js'; // Adjust the path as necessary

export default async function handleProfileSignup(firstName, lastName, fileName) {
  // Use Promise.allSettled to wait for both promises to settle
  const results = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]);

  // Map the results to the desired format
  return results.map(result => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : result.reason,
  }));
}
