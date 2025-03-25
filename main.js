const toggleChat = document.getElementById('toggleChat');
    const chatBox = document.getElementById('chatBox');

    toggleChat.addEventListener('click', () => {
      chatBox.style.display = chatBox.style.display === 'flex' ? 'none' : 'flex';
    });

    document.getElementById('sendMsg').addEventListener('click', () => {
      const msg = document.getElementById('userMessage').value.trim();
      if (msg !== '') {
        // Envía directo a WhatsApp con el mensaje
        const phone = '7293108476'; // <-- Coloca tu número aquí
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
        document.getElementById('userMessage').value = '';
      }
    });

    