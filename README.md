# Title-similarities-cheaking
An online system to automatically verify new title submissions by checking for similarities with existing titles
Got it! Here's an updated version of the README that includes the **CSS** file:

# Title Validation System 

## Project Overview
The **Title Validation System** automatically verifies new title submissions against an existing database of titles, ensuring that new titles are unique and compliant with specific guidelines. The system detects similarities, checks for disallowed words, and prevents the creation of titles that combine existing ones. It provides real-time feedback to users and displays a probability score for the likelihood of a title being approved.

## Features
1. **Title Validation**: Users can submit a title for verification, and the system checks it for similarity against a large dataset of pre-existing titles.
2. **Phonetic and Semantic Analysis**: The system uses advanced algorithms to compare titles based on sound and meaning.
3. **Disallowed Words**: The system rejects titles that contain blacklisted words or phrases.
4. **User Feedback**: Provides feedback on the usability of the submitted title, including why a title might be rejected (e.g., similarity to an existing title or inclusion of a disallowed word).
5. **Probability Score**: If the title is similar to an existing one, a probability score is calculated and displayed to the user.
6. **Real-Time Progress Indicator**: Shows a visual progress bar representing the similarity percentage when comparing titles.

## System Components

### 1. **Frontend (HTML + CSS + JavaScript)**
   - **index.html**:
     - Provides the user interface for submitting titles and displaying results.
     - Contains a form where users can input a title and a button to trigger the validation process.
     - The page includes navigation links (Home, About, Services, and Contacts).
     - A hidden progress circle shows the similarity score as a percentage when applicable.
     
   - **script.js**:
     - Handles form submission and interacts with the server via an API (`/validate_title`).
     - Displays validation results to the user, including:
       - Whether the title is usable.
       - Whether the title is blacklisted.
       - Whether the title is too similar to an existing one (with a similarity score).
     - Implements smooth scrolling for navigation and provides user feedback through DOM manipulation.
     
   - **style.css**:
     - Contains styles for all sections of the webpage.
     - Styles navigation, form input, buttons, and result displays to provide a clean, user-friendly interface.
     - Defines styling for the progress circle to indicate similarity visually during title validation.

### 2. **Backend (API Endpoint for Title Validation)**
   - The frontend sends requests to an API endpoint (`/validate_title`) with the submitted title.
   - The backend checks the title against a dataset of existing titles (`dataset.csv`), applying:
     - Phonetic similarity algorithms.
     - Semantic checks for meaning-based similarity.
     - Blacklist checks for disallowed words.
   - The backend returns a JSON response indicating whether the title is usable or provides details on why it was rejected.

## Dataset
- **dataset.csv**: This file contains the pre-existing titles against which new submissions are checked for similarity. The backend script processes this dataset to identify potential duplicates or similar-sounding titles.

## Installation & Setup

### Prerequisites
- A web server (e.g., Node.js, Python Flask) to handle API requests.
- The dataset file (`dataset.csv`) for title validation.

### Steps
1. **Clone the repository**: Download or clone the project files into your working directory.
   
2. **Backend Setup**: Set up a backend server that:
   - Hosts the dataset.
   - Provides an API endpoint (`/validate_title`) to handle POST requests from the frontend.

3. **Frontend Setup**:
   - Open `index.html` in a browser to view the title validation system interface.
   - Ensure `style.css` is correctly linked for styling.
   - Make sure the `script.js` file is correctly linked to handle form submission and display results.

4. **Run the Application**:
   - Start the web server.
   - Submit titles via the frontend form and get feedback on their usability.

## Usage
1. **Enter a Title**: Navigate to the title submission form on the webpage and input the title you want to validate.
2. **Submit for Validation**: Click the "Validate Title" button to initiate the validation process.
3. **View Results**:
   - If the title is usable, a success message will appear.
   - If the title is blacklisted or too similar to an existing one, appropriate feedback will be displayed along with a similarity score (if applicable).

## Key Files
- **index.html**: The HTML page that serves as the user interface for title validation.
- **script.js**: The JavaScript file that manages form submission, interacts with the backend, and handles user feedback.
- **style.css**: The CSS file that styles the entire webpage, including the form, buttons, navigation, and progress circle.
- **dataset.csv**: The dataset containing the existing titles used for similarity checks.

## Example Workflow
1. **User Input**: A user enters the title "The Daily Chronicle" into the form.
2. **Title Validation**: The system checks the title against the dataset for similar titles, disallowed words, and other rules.
3. **Result**:
   - If the title is unique and compliant with all guidelines, the system displays a message like: `"The Daily Chronicle" is usable.`
   - If the title is blacklisted or too similar to an existing one, the system shows a message such as: `"The Daily Chronicle" cannot be used due to similarity with "The Chronicle."`

## Future Enhancements
- **Batch Validation**: Allow users to validate multiple titles at once.
- **Advanced Similarity Metrics**: Incorporate machine learning techniques to detect more nuanced similarities between titles.
- **Admin Dashboard**: Provide an interface for administrators to manage the blacklist and view submission statistics.

## License
This project is licensed under the MIT License - see the LICENSE file for details.



---

This README now includes all necessary files (HTML, CSS, JavaScript, and the dataset) and explains how the **Title Validation System** ensures the uniqueness of submitted titles while providing a user-friendly interface with real-time feedback.
