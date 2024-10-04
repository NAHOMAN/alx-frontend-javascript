function signUpUser(firstName, lastName) {
  // Return a resolved promise with the user object
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

// Example usage
signUpUser('bob', 'Dylan').then(user => {
  console.log(user); // { firstName: 'bob', lastName: 'Dylan' }
});
