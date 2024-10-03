import ClassRoom from './0-classroom.js';
// Import ClassRoom class from 0-classroom.js

// Implement the initializeRooms function
export default function initializeRooms() {
  return [
    new ClassRoom(19), // First classroom with size 19
    new ClassRoom(20), // Second classroom with size 20
    new ClassRoom(34), // Third classroom with size 34
  ];
}
