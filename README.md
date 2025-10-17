# Validador de Formulário em Tempo Real (Vanilla JS + Tailwind CSS)

Este é o código-fonte do tutorial em vídeo da **Cervo Digital** que ensina a construir um sistema de validação de formulário moderno e não invasivo, utilizando apenas JavaScript puro (Vanilla JS) e o framework CSS utilitário Tailwind CSS.

O objetivo deste projeto é demonstrar como criar feedbacks de usuário imediatos (em tempo real) para campos de entrada, substituindo os `alerts()` nativos do navegador por notificações *Toast* estilizadas e amigáveis.

## 🚀 Funcionalidades Principais

* **Validação em Tempo Real:** Verifica campos (`input`) a cada tecla digitada (usando o evento `input` do JS).
* **JavaScript Puro:** Não utiliza bibliotecas ou frameworks complexos, apenas Vanilla JS.
* **Estilização Moderna:** Design responsivo e limpo com **Tailwind CSS (via CDN)**.
* **Feedback Visual:** Altera a borda do campo para vermelho em caso de erro.
* **Toast Notifications:** Sistema de notificação moderno (toast) para mensagens de sucesso ou erro (substituindo o `alert()`).
* **Validação de E-mail com Regex:** Utiliza Expressões Regulares para checar o formato do e-mail.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura básica do formulário.
* **Tailwind CSS:** Para estilização rápida e utilitária (via CDN).
* **JavaScript (ES6+):** Lógica de validação e manipulação do DOM.

## 📁 Estrutura do Projeto

O projeto é muito simples e contém apenas os arquivos essenciais:

## ▶️ Como Rodar o Projeto

Como o projeto utiliza apenas tecnologias *front-end* (HTML, JS, CSS), você não precisa de um servidor local complexo.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/Nickolasbini/formChecker.git
    ```
2.  **Abra o arquivo:**
    Simplesmente abra o arquivo `index.html` em seu navegador.
    
    *Você pode usar extensões como "Live Server" no VS Code para uma melhor experiência de desenvolvimento.*

## 💡 Como Usar a Lógica de Validação

A lógica principal de validação reside no arquivo `script.js`. Para adicionar um novo campo:

1.  **HTML:** Adicione um `<input>` e um `<span>` com classes e IDs únicos para o erro.
2.  **JavaScript (`script.js`):**
    * Selecione o novo `input` e o `span` de erro.
    * Crie uma função de validação específica (ex: `validateCpf()`).
    * Use o `addEventListener('input', validateCpf)` para a validação em tempo real.
    * Utilize a função auxiliar `setError(inputElement, errorElement, message)` para controlar a exibição do erro.

## 🎥 Acompanhe o Tutorial

Este código foi criado como parte de um tutorial completo no canal da Cervo Digital. Assista ao vídeo para uma explicação detalhada passo a passo:

[![Assista ao Tutorial no YouTube]([https://img.youtube.com/vi/[ID_DO_SEU_VIDEO]/0.jpg)]([LINK_COMPLETO_DO_VIDEO]](https://youtu.be/75iZUTo5M8E))

## 🤝 Contribuições

Contribuições são sempre bem-vindas! Se você tiver sugestões para melhorar o código, adicione uma `issue` ou envie um `pull request`.

---
**Desenvolvido por Cervo Digital**
