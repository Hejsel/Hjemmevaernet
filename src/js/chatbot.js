document.addEventListener("DOMContentLoaded", () => {
  const chatWindow = document.querySelector(".chat-window");
  const userMessageInput = document.querySelector("#userMessage");
  const sendMessageButton = document.querySelector("#sendMessage");

  sendMessageButton.addEventListener("click", () => {
    const userMessage = userMessageInput.value.trim();

    if (userMessage) {
      addMessageToChat("Bruger", userMessage);
      userMessageInput.value = "";

      // Simuler chatbot-svar
      setTimeout(() => {
        const botReply = generateBotReply(userMessage);
        addMessageToChat("Chatbot", botReply);
      }, 500);
    }
  });

  const addMessageToChat = (sender, message) => {
    const messageDiv = document.createElement("div");
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll til nyeste besked
  };

  const generateBotReply = (userMessage) => {
    // Dummy chatbot svar. Udskift med API-integration for mere komplekse svar.
    if (userMessage.toLowerCase().includes("hej")) {
      return "Hej! Hvordan kan jeg hjælpe dig?";
    }
    return "Jeg er ikke sikker på, hvordan jeg skal svare på det.";
  };
});
