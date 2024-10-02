import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName).then(
    (value) => ({
      status: 'fulfilled',
      value: value,
    })
  ).catch(
    (error) => ({
      status: 'rejected',
      value: error.toString(),
    })
  );

  const uploadPromise = uploadPhoto(fileName).then(
    (value) => ({
      status: 'fulfilled',
      value: value,
    })
  ).catch(
    (error) => ({
      status: 'rejected',
      value: error.toString(),
    })
  );

  return Promise.allSettled([signUpPromise, uploadPromise]);
}
