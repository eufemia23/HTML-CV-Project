# Cookie Consent Popup
<a href="https://roadmap.sh/projects/cookie-consent">Link to the Project</a>

## Overview 
The task was to use HTML, CSS, and JavaScript to create a cookie consent popup with a message and a button to accept the cookies. The popup would disappear upon clicking the button. It was also recommended to save the user's consent in local storage. The task tests one's knowledge of DOM manipulation and event handling. I first did this task using the innerHTML property that would change the popup's HTML to an empty string if it had discovered the user has previously consented, but every time you would reload the page you could still see the popup for a fraction of a second. I thus learned the createElement() method and used it to only create the HTML if the cookies have not been consented to. This solved the problem mentioned above. It was also a good opportunity for me to learn the syntax and other methods related to the createElement() method.

## Bonus Points Checklist
- [x] Use local storage to prevent the popup from appearing on subsequent visits.

## How to run the project
1. Clone or download the files in 05-cookie-consent.
2. Open the index.html file in your web browser.
