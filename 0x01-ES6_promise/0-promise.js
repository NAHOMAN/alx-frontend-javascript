export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulating an API call with a timeout
    const success = true; // Change this to false to simulate a failure

    setTimeout(() => {
      if (success) {
        resolve({ status: 200, body: 'Success' });
      } else {
        reject(new Error('The fake API is not working currently'));
      }
    }, 1000); // Simulate a 1 second delay
  });
}
