function signUpUser(firstName, lastName) {
  // Return a resolved promise with the user object
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

// Example Usage
signUpUser('John', 'Doe').then(user => {
  console.log(user); // { firstName: 'John', lastName: 'Doe' }
});
