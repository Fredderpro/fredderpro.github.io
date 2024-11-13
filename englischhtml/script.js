// Initialize score in sessionStorage if not already set
if (sessionStorage.getItem('score') === null) {
    sessionStorage.setItem('score', '0');
}

function checkAnswer(userAnswer, buttonElement) {
    // Clear previous selections by removing 'answered' class and enabling both buttons
    document.querySelectorAll('.buttons .btn').forEach(btn => {
        btn.classList.remove('answered');
        btn.disabled = false;
    });

    // Retrieve the correct answer from the hidden input
    const correctAnswer = document.getElementById("correctAnswer").value === 'true';

    // If the user's answer matches the correct answer, increment the score
    if (userAnswer === correctAnswer) {
        let score = parseInt(sessionStorage.getItem('score'), 10);
        sessionStorage.setItem('score', (score + 1).toString());
    }

    // Add feedback by highlighting the selected button
    buttonElement.classList.add("answered");

    // Disable the selected button to prevent selecting it again
    buttonElement.disabled = true;

    // Enable the "Next" button after an answer is selected
    document.getElementById("nextButton").disabled = false;
}
// Function to navigate to the previous page
function goToPreviousPage(pageNumber) {
    window.location.href = `page${pageNumber}.html`;
}



// Function to navigate to the next page
function goToNextPage(pageNumber) {
    window.location.href = `page${pageNumber}.html`;
}

// On the last page, display the final score
function showScore() {
    const score = sessionStorage.getItem('score');
    document.getElementById("finalScore").innerText = `Your final score is: ${score} out of 20`;
    // Reset score after showing it
    sessionStorage.removeItem('score');
}

// Reset quiz function to start over
function resetQuiz() {
    sessionStorage.removeItem('score');
    window.location.href = 'page1.html';
}
