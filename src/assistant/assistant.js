// src/assistant/assistant.js
import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa'; // ícone de robô do React Icons
import './assistant.css'; // Importando o CSS para a bolinha flutuante

const Assistant = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar a visibilidade do chat
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* A bolinha flutuante */}
      <div className={`chat-icon ${isOpen ? 'active' : ''}`} onClick={toggleChat}>
        <FaRobot size={30} color="white" />
      </div>

      {/* Se o chat estiver aberto, mostrar a janela */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>Assistente Virtual</h4>
            <button onClick={toggleChat}>Fechar</button>
          </div>
          <div className="chat-body">
            <p>Olá! Como posso te ajudar hoje?</p>
            {/* Aqui você pode adicionar um campo para o usuário digitar suas perguntas */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Assistant;
