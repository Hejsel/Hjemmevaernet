// Funktion til at tilføje besked i chatten
const chatMessages = document.getElementById("chat-messages");
function addMessage(sender, message, isUser) {
  const messageDiv = document.createElement("div");
  const roleClass = isUser ? "user-message" : "bot-message";
  messageDiv.className = `${roleClass}`;
  messageDiv.innerHTML = `<p class="text">${message}</p>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Event til at håndtere brugerens beskeder
document.getElementById("send-button").addEventListener("click", handleUserInput);
document.getElementById("chat-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    if (e.shiftKey) return;
    e.preventDefault();
    handleUserInput();
  }
});

// Håndterer brugerens input
function handleUserInput() {
  const chatgptIntroduction = document.getElementById("chatgpt-introduction");
  const chatInput = document.getElementById("chat-input");
  const userInput = chatInput.value.trim();
  chatgptIntroduction.classList.add("hide");
  chatMessages.classList.add("show");
  if (userInput) {
    addMessage("Bruger", userInput, true); // Vis brugerens besked
    sendToServer(userInput); // Send til serveren
    chatInput.value = ""; // Ryd inputfeltet
  }
}

// Sender brugerens besked til serveren
async function sendToServer(userInput) {
  try {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: userInput }),
    });
    const data = await response.json();
    const botResponse = data.response; // Svar fra serveren
    addMessage("Chatbot", botResponse, false); // Vis chatbot-svar
  } catch (error) {
    console.error("API error:", error);
    addMessage("Chatbot", "Der opstod en fejl. Prøv igen senere.", false);
  }
}

// Sidebar visibility
const asideBtn = document.getElementById("asideBtn");
asideBtn.addEventListener("click", () => {
  const aside = document.getElementById("aside");
  aside.classList.toggle("toggle-visibility");
});
