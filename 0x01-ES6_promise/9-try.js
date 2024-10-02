export default function guardrail(mathFunction) {
  const queue = []; // Create an array named queue

  try {
    // Execute the mathFunction and append the result to the queue
    const result = mathFunction();
    queue.push(result); // Append the returned value to the queue
  } catch (error) {
    // If an error occurs, append the error message to the queue
    queue.push(error.message); // Append the error message to the queue
  } finally {
    // Always append the guardrail message
    queue.push('Guardrail was processed'); // Append the guardrail message
  }

  return queue; // Return the queue
}
