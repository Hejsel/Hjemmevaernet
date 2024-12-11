// Funktion til at tilføje besked i chatten
function addMessage(sender, message, isUser) {
  const chatMessages = document.getElementById("chat-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `flex mb-3 ${isUser ? "justify-end" : "justify-start"}`;

  messageDiv.innerHTML = `
    <div class="max-w-sm px-4 py-2 rounded shadow ${
      isUser ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
    }">
      <strong>${sender}:</strong> ${message}
    </div>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll til bunden
}

// Event til at håndtere brugerens beskeder
document.getElementById("send-button").addEventListener("click", handleUserInput);
document.getElementById("chat-input").addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleUserInput();
});

// Håndterer brugerens input
function handleUserInput() {
  const chatInput = document.getElementById("chat-input");
  const userInput = chatInput.value.trim();
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
