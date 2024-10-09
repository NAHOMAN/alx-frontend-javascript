/// <reference path="./js/crud.d.ts" />

// Import RowID and RowElement types from interface.ts
import { RowID, RowElement } from './interface';
// Import everything from the crud.js module as CRUD
import * as CRUD from './js/crud';

// Create an object row with type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Call insertRow to insert the row and assign the returned RowID to newRowID
const newRowID: RowID = CRUD.insertRow(row);

// Create updatedRow with the age field added
const updatedRow: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
  age: 23,
};

// Call updateRow to update the row
CRUD.updateRow(newRowID, updatedRow);

// Call deleteRow to delete the row
CRUD.deleteRow(newRowID);

