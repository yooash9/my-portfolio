// 1. Dynamic QR Code Generation
document.addEventListener("DOMContentLoaded", () => {
    // Generates a QR code matching the exact live page window address
    new QRCode(document.getElementById("qrcode"), {
        text: window.location.href || "https://yourusername.github.io",
        width: 140,
        height: 140,
        colorDark : "#0f172a",
        colorLight : "#ffffff"
    });
});

// 2. Chatbot Window Controls
const chatBody = document.getElementById('chatBody');
const toggleIcon = document.getElementById('toggleIcon');
const chatLogs = document.getElementById('chatLogs');
const chatInput = document.getElementById('chatInput');

function toggleChat() {
    if (chatBody.style.display === 'flex') {
        chatBody.style.display = 'none';
        toggleIcon.innerText = '▲';
    } else {
        chatBody.style.display = 'flex';
        toggleIcon.innerText = '▼';
        chatLogs.scrollTop = chatLogs.scrollHeight;
    }
}

// 3. Conversational AI Rules Architecture
function handleChatInput() {
    const query = chatInput.value.trim().toLowerCase();
    if (!query) return;

    // Append User Message to UI
    appendMessage(chatInput.value, 'user');
    chatInput.value = '';

    // Processing matching patterns
    let response = "I'm sorry, I didn't quite catch that. Try searching for 'skills', 'experience', or 'projects'.";
    
    if (query.includes('skill') || query.includes('tech')) {
        response = "I specialize in standard core web architectures: HTML5, CSS3, JavaScript, Git version versioning controls, and clean responsive layouts.";
    } else if (query.includes('experience') || query.includes('job') || query.includes('work')) {
        response = "I build modular front-end templates, manage project structures inside GitHub, and handle automation tasks using native JavaScript applications.";
    } else if (query.includes('project') || query.includes('portfolio')) {
        response = "You can view my projects right here on the page! They are integrated with public source links directly hosted over GitHub.";
    } else if (query.includes('resume') || query.includes('cv')) {
        response = "You can read or download a copy of my professional resume right from the 'Resume & Access' section of this webpage.";
    }

    // Delay response slightly for a human-centric feel
    setTimeout(() => {
        appendMessage(response, 'bot');
    }, 500);
}

function appendMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('msg', sender);
    msgDiv.innerText = text;
    chatLogs.appendChild(msgDiv);
    chatLogs.scrollTop = chatLogs.scrollHeight;
}

// Global enter key listeners for smooth typing interactions
chatInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") handleChatInput();
});

// 4. Contact Form Default Preventer
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! This sample alert verifies your submit handler ran cleanly.');
});