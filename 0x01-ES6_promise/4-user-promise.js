function signUpUser(firstName, lastName) {
  // Return a resolved promise with the user object
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}
