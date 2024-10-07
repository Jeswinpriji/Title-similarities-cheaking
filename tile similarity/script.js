
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('titleForm');
    const resultDiv = document.getElementById('result');
    const progressContainer = document.querySelector('.progress-container');
    const progressCircle = document.getElementById('progress-circle');
    const progressValue = document.getElementById('progress-value');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('titleInput').value;

        resultDiv.textContent = 'Validating...';
        progressContainer.style.display = 'none';

        try {
            const response = await fetch('/validate_title', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: title }),
            });

            const data = await response.json();

            if (data.usable) {
                resultDiv.textContent = `"${title}" is usable.`;
                progressContainer.style.display = 'none';
            } else if (data.blacklisted) {
                resultDiv.textContent = `"${title}" cannot be used as it has been blacklisted"`;
                progressContainer.style.display = 'none';
            } else {
                resultDiv.textContent = `"${title}" is not usable due to similarity with "${data.similar_word}".`;
                progressContainer.style.display = 'block';
                const similarity = data.similarity;
                progressValue.textContent =`${similarity.toFixed(2)}%`;
                progressCircle.style.background = `conic-gradient(#4caf50 ${similarity * 3.6}deg, #ddd 0deg)`;
            }
        } catch (error) {
            resultDiv.textContent = 'An error occurred. Please try again.';
            progressContainer.style.display = 'none';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll to About section
    document.getElementById('About').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.about').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Other navigation logic
    document.getElementById('Home').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
    
    document.getElementById('Services').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.services').scrollIntoView({
            behavior: 'smooth'
        });
    });

    document.getElementById('Contacts').addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.services').scrollIntoView({
            behavior: 'smooth'
        });
        // Scroll to contact section or implement navigation
    });

    document.getElementById('BrokePioneers').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });
});