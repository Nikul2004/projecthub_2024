document.addEventListener("DOMContentLoaded", function() {
    const chatContainer = document.querySelector('.chat');
    const messageInput = document.querySelector('#message-input');
    const sendButton = document.querySelector('#send-button');

    sendButton.addEventListener("click", function() {
        const message = messageInput.value;
        if (message.trim() !== "") {
            appendSentMessage(message);
            messageInput.value = "";
        }
    });

    function appendSentMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        messageDiv.innerHTML = `<span class="message-content">${message}</span>`;
        chatContainer.appendChild(messageDiv);
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
});

