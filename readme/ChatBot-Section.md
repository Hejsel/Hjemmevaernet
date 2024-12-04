
# Chatbot Funktionalitet – Forklaring af Kode

Denne `README.md` forklarer grundigt, hvordan koden fungerer, så du nemt kan forstå strukturen og formålet med hver del.

---

## Indhold

1. [Introduktion](#introduktion)  
2. [Kodegennemgang](#kodegennemgang)  
   - [DOMContentLoaded EventListener](#domcontentloaded-eventlistener)  
   - [Hovedfunktionalitet](#hovedfunktionalitet)  
     - [Eventlistener til Send-knappen](#eventlistener-til-send-knappen)  
     - [addMessageToChat](#addmessagetochat)  
     - [generateBotReply](#generatebotreply)  
3. [Forbedringer](#forbedringer)  

---

## Introduktion

Denne kode skaber en simpel chatbot, som gør det muligt for en bruger at sende en besked og modtage et simuleret svar.  
**Kernefunktioner**:
- Bruger kan skrive beskeder i et inputfelt.
- Chatbotten returnerer en foruddefineret respons.
- Chatvinduet opdateres dynamisk med både brugerens og chatbotens beskeder.

---

## Kodegennemgang

### DOMContentLoaded EventListener
```javascript
document.addEventListener("DOMContentLoaded", () => {
```
- **Formål**: Sikrer, at DOM'en er fuldt indlæst, før scriptet kører.  
  Dette betyder, at alle HTML-elementer (som chatvinduet, inputfeltet og knappen) er tilgængelige i JavaScript, når koden eksekveres.

---

### Hovedfunktionalitet

#### 1. Initialisering af Variabler
```javascript
const chatWindow = document.querySelector(".chat-window");
const userMessageInput = document.querySelector("#userMessage");
const sendMessageButton = document.querySelector("#sendMessage");
```
- **`chatWindow`**: Refererer til det område, hvor chatbeskeder vises.  
- **`userMessageInput`**: Refererer til tekstfeltet, hvor brugeren skriver deres besked.  
- **`sendMessageButton`**: Refererer til knappen, som sender brugerens besked.

---

#### 2. Eventlistener til Send-knappen
```javascript
sendMessageButton.addEventListener("click", () => {
  const userMessage = userMessageInput.value.trim();

  if (userMessage) {
    addMessageToChat("Bruger", userMessage);
    userMessageInput.value = "";

    setTimeout(() => {
      const botReply = generateBotReply(userMessage);
      addMessageToChat("Chatbot", botReply);
    }, 500);
  }
});
```

- **`sendMessageButton.addEventListener`**: 
  - Lytter efter, at brugeren klikker på knappen.
- **`userMessageInput.value.trim()`**: 
  - Fjerner mellemrum i starten og slutningen af beskeden.
  - Dette forhindrer, at tomme beskeder sendes.
- **`if (userMessage)`**: 
  - Tjekker, om beskeden ikke er tom, før den tilføjes til chatten.

- **Funktionalitet i `if`-blokken**:
  1. **`addMessageToChat("Bruger", userMessage)`**: Tilføjer brugerens besked til chatvinduet.
  2. **`userMessageInput.value = "";`**: Rydder inputfeltet.
  3. **`setTimeout`**:
     - Forsinker chatbotens svar med 500 ms for at simulere en tænketid.
     - **`generateBotReply(userMessage)`**: Genererer chatbotens svar baseret på brugerens besked.
     - **`addMessageToChat("Chatbot", botReply)`**: Tilføjer chatbotens svar til chatvinduet.

---

#### 3. `addMessageToChat`
```javascript
const addMessageToChat = (sender, message) => {
  const messageDiv = document.createElement("div");
  messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
  chatWindow.appendChild(messageDiv);
  chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll til nyeste besked
};
```

- **Formål**: Tilføjer en besked til chatvinduet og sikrer, at den nyeste besked altid er synlig.  
- **`document.createElement("div")`**: Opretter et nyt `<div>`-element, hvor beskeden indsættes.
- **`messageDiv.innerHTML`**: Tilføjer beskeden med afsenderens navn i fed skrift.
- **`chatWindow.appendChild(messageDiv)`**: Føjer beskeden til chatvinduet.
- **`chatWindow.scrollTop = chatWindow.scrollHeight`**: Ruller automatisk ned til den nyeste besked.

---

#### 4. `generateBotReply`
```javascript
const generateBotReply = (userMessage) => {
  if (userMessage.toLowerCase().includes("hej")) {
    return "Hej! Hvordan kan jeg hjælpe dig?";
  }
  return "Jeg er ikke sikker på, hvordan jeg skal svare på det.";
};
```

- **Formål**: Genererer et simpelt svar baseret på brugerens besked.  
- **`userMessage.toLowerCase()`**: Konverterer beskeden til små bogstaver for at gøre tjekket case-insensitive.
- **`includes("hej")`**: Kontrollerer, om beskeden indeholder ordet "hej".
- Hvis "hej" findes, returneres en hilsen.  
- Ellers returneres en generisk besked.

---

## Forbedringer

1. **API-integration**:
   - Udskift `generateBotReply` med et rigtigt chatbot-API som OpenAI GPT-3 eller GPT-4 for mere avancerede svar.

2. **UI-forbedringer**:
   - Tilføj forskellige farver for brugerens og chatbotens beskeder for bedre visuel adskillelse.

3. **Fejlhåndtering**:
   - Tilføj validering for at forhindre specialtegn eller for lange beskeder.

4. **Mobiloptimering**:
   - Sørg for, at chatområdet fungerer godt på mindre skærme.

---

Tak for at bruge denne guide! 🚀 Hvis du har spørgsmål, så spørg endelig igen. 😊
