# Projeto Site Institucional — React + Vite + bootstrap

Um site institucional simples e moderno, construído com React e Vite, O uso de rotas, componentes reutilizáveis e um design responsivo.

---

## ✅ Tecnologias Utilizadas

- **React.js**  
- **Vite** (bundler / build tool)  
- **React Router DOM** (para navegação e rotas SPA)  
- **CSS Modules** (para estilos modularizados em componentes)  
- **CSS Global / Estilos responsivos** (arquivo global para layout e responsividade)  
- **JavaScript (ES6+)**  

---

## 📂 Estrutura do Projeto
src/
├── assets/ # imagens, logos, ícones, etc.
├── components/ # componentes reutilizáveis: Header, Hero, Card, Footer...
│ ├── Header.jsx
│ ├── Hero.jsx
│ ├── CardInfo.jsx
│ ├── Footer.jsx
│ └── Footer.module.css
├── pages/ # páginas do site
│ ├── Home.jsx
│ ├── Sobre.jsx
│ ├── Cursos.jsx
│ ├── Transparencia.jsx
│ ├── Noticias.jsx
│ └── NoticiaDetalhe.jsx
├── App.jsx # configuração de rotas e layout global
├── index.css # estilos globais
└── main.jsx # ponto de entrada do React + Vite


> A imagem a seguir mostra como a estrutura de pastas pode ficar no seu editor:

<img width="398" height="703" alt="image" src="https://github.com/user-attachments/assets/fa29aea3-2ccc-4525-953c-ec745215d4ff" />


---

## 🧭 Rotas da Aplicação

| Rota                 | Descrição                            |
|----------------------|--------------------------------------|
| `/`                  | Página inicial (Home)                |
| `/sobre`             | Informações sobre a instituição      |
| `/cursos`            | Apresentação dos cursos oferecidos   |
| `/transparencia`     | Políticas, documentos, LGPD, etc.    |
| `/noticias`          | Lista de notícias ou comunicados     |
| `/noticia/:id`       | Página de detalhe de uma notícia     |

---

## ✨ Componentes Principais

- **Header.jsx** — barra de navegação fixa / responsiva, com menu para todas as páginas  
- **Hero.jsx** — banner principal (full-width) com chamada de destaque para “bem-vindo / conhecer a instituição”  
- **CardInfo.jsx** — componente de cartão usado na página inicial ou cursos, para mostrar informação de forma visual  
- **Footer.jsx** — rodapé com links úteis, redes sociais, contatos, criado com CSS Modules pra melhor modularização  
- **Página de Notícias & Detalhes** — usando rotas dinâmicas para exibir cada notícia individual  

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório  
   ```bash
   git clone https://github.com/SEU-USUARIO/seu-repo.git

   Acesse a pasta do projeto

cd seu-repo


Instale as dependências

npm install


Inicie o servidor de desenvolvimento

npm run dev


Abra no navegador: http://localhost:5173/





