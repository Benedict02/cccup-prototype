// Function to update demo card based on form values.
function updateDemo() {
    // Retrieve values from input fields
    const stage = document.getElementById('input-stage').value;
    const status = document.getElementById('input-status').value;
    const team1 = document.getElementById('input-team1').value;
    const team2 = document.getElementById('input-team2').value;
    const team1Score = document.getElementById('input-team1-score').value;
    const team2Score = document.getElementById('input-team2-score').value;
    const time = document.getElementById('input-time').value;

    // Update the demo elements
    document.getElementById('demo-stage').innerText = stage || 'Stage';
    document.getElementById('demo-status').innerText = status || 'Status';
    document.getElementById('demo-team1').innerText = team1 || 'Team 1';
    document.getElementById('demo-team2').innerText = team2 || 'Team 2';
    document.getElementById('demo-team1-score').innerText = team1Score || '0';
    document.getElementById('demo-team2-score').innerText = team2Score || '0';
    document.getElementById('demo-time').innerText = time || 'YYYY-MM-DD HH:MM';
}

// Attach event listeners to all inputs to update demo on change
const inputs = document.querySelectorAll('#match-form input.form-control');
inputs.forEach(input => {
    input.addEventListener('input', updateDemo);
});

// Also attach to select fields if you have any (for status, stage, etc.)
const selects = document.querySelectorAll('#match-form select.form-control');
selects.forEach(select => {
    select.addEventListener('change', updateDemo);
});

// Initial call to update demo on page load
updateDemo();