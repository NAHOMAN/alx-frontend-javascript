export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Simulate an API call

    if (success) {
      resolve("Success!");
    } else {
      reject("Error");
    }
  });
}
