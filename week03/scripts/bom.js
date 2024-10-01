// DOM Elements
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Initialize chaptersArray from localStorage or set as an empty array if it's the user's first visit
let chaptersArray = getChapterList() || [];

// Display each chapter from the array when the page loads
chaptersArray.forEach((chapter) => {
  displayList(chapter);
});

// Event listener for the button to add a chapter
button.addEventListener("click", () => {
  if (input.value != "") {
    // Ensure the input is not empty
    displayList(input.value); // Display the input value as a new chapter
    chaptersArray.push(input.value); // Add the chapter to the array
    setChapterList(); // Update the localStorage with the new array
    input.value = ""; // Clear the input field
    input.focus(); // Set the focus back to the input field
  }
});

// Function to display a single chapter and append it to the list
function displayList(item) {
  let li = document.createElement("li"); // Create list item
  let deletebutton = document.createElement("button"); // Create delete button

  li.textContent = item; // Set the text content of the list item
  deletebutton.textContent = "❌"; // Set the text content of the delete button
  deletebutton.classList.add("delete"); // Add the delete class for styling

  li.append(deletebutton); // Append the delete button to the list item
  list.append(li); // Append the list item to the unordered list

  // Add an event listener for deleting the chapter
  deletebutton.addEventListener("click", function () {
    list.removeChild(li); // Remove the list item from the DOM
    deleteChapter(li.textContent); // Call deleteChapter to remove from array and localStorage
    input.focus(); // Set focus back to input field after deletion
  });
}

// Function to update the chaptersArray in localStorage
function setChapterList() {
  localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray)); // Store array in localStorage as a string
}

// Function to retrieve the chaptersArray from localStorage
function getChapterList() {
  return JSON.parse(localStorage.getItem("myFavBOMList")); // Parse the stored string back to an array
}

// Function to delete a chapter from the array and update localStorage
function deleteChapter(chapter) {
  // Remove the ❌ character from the chapter string
  chapter = chapter.slice(0, chapter.length - 1);

  // Update chaptersArray to remove the chapter
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  // Update localStorage with the modified array
  setChapterList();
}
