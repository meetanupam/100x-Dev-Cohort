let count = 30;
const counterElement = document.getElementById("counter");

// Function to update the counter
function updateCounter() {
  counterElement.textContent = count;
  count--;

  // Check if the count has reached 0
  if (count < 0) {
    clearInterval(counterInterval);
  }
}

// Call updateCounter every 1000 milliseconds (1 second)
const counterInterval = setInterval(updateCounter, 1000);

// Initial call to display the starting count
updateCounter();
