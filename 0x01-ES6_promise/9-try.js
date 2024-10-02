export default function guardrail(mathFunction) {
  const queue = []; // Create an empty array named queue

  try {
    // Execute the mathFunction and store the result
    const result = mathFunction();
    queue.push(result); // Append the result to the queue if successful
  } catch (error) {
    // If an error occurs, push the error message to the queue
    queue.push(error.toString());
  } finally {
    // Append the guardrail processed message regardless of success or failure
    queue.push('Guardrail was processed');
  }

  return queue; // Return the queue
}
