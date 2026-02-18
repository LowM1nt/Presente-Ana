# 🎀 PRD: Hello Kitty Birthday Experience

| **Projeto** | Hello Kitty Birthday Web |
| --- | --- |
| **Versão** | 1.0 (MVP) |
| **Status** | Em Planejamento |
| **Desenvolvedor** | Você |
| **Público-Alvo** | Sua Namorada |
| **Data de Entrega** | *[Inserir Data do Aniversário]* |

---

## 1. Visão Geral e Objetivos

**Objetivo Principal:** Criar um presente digital único, interativo e emocionante que celebre o aniversário e o relacionamento, utilizando a estética favorita dela (Hello Kitty).

**Objetivo Emocional:** Fazer com que ela se sinta amada, valorizada e surpresa com o esforço técnico e criativo dedicado.

---

## 2. Identidade Visual e UI/UX

A experiência deve ser **"Mobile-First"** (provavelmente ela abrirá o link pelo celular via WhatsApp).

* **Tema:** Kawaii / Hello Kitty / Sanrio.
* **Paleta de Cores:**
* `#FFC0CB` (Rosa Pastel - Fundo)
* `#FF69B4` (Rosa Choque - Botões e Títulos)
* `#FFFFFF` (Branco - Cards e Containers)
* `#FF0000` (Vermelho - Detalhes do laço)


* **Tipografia:**
* Títulos: *Fredoka One* ou *Varela Round* (Arredondada, divertida).
* Corpo de Texto: *Quicksand* ou *Nunito* (Legível, mas suave).


* **Elementos Gráficos:** Bordas arredondadas (`rounded-xl` ou `2xl`), sombras suaves (`box-shadow`), ícones de laços, corações e estrelas.

---

## 3. Requisitos Funcionais (Escopo)

### 3.1. Tela de Boas-Vindas (Landing)

* **Descrição:** A primeira impressão. Deve ser misteriosa e fofa.
* **Elementos:**
* Imagem central da Hello Kitty animada (bouncing ou acenando).
* Título: "Olá, [Nome dela]!"
* Botão de Ação (CTA): "Clique para começar 🎀".
* **Ação:** Ao clicar, deve iniciar a música de fundo e liberar o acesso ao conteúdo principal (efeito de scroll ou transição de página).



### 3.2. Player de Música (Background Audio)

* **Descrição:** Música ambiente para criar clima.
* **Comportamento:** Autoplay bloqueado por navegadores, então deve iniciar no primeiro clique do usuário.
* **Controles:** Botão discreto de Mute/Unmute flutuante no canto da tela.

### 3.3. Carta de Amor (Core Feature)

* **Descrição:** Onde você expressa seus sentimentos.
* **Design:** Estilo "Papel de Carta" virtual.
* **Funcionalidade:** Texto com suporte a emojis e formatação básica. Animação de entrada suave (`fadeInUp`).

### 3.4. Galeria "Nossos Momentos" (Polaroid)

* **Descrição:** Exibição de fotos do casal.
* **Estilo:** Cards estilo Polaroid (borda branca grossa, foto quadrada, legenda escrita à mão embaixo).
* **Interação:**
* Layout em Grid ou Carrossel (Swiper.js).
* Efeito de *tilt* (inclinação) aleatória para parecer fotos espalhadas numa mesa.



### 3.5. Timeline do Relacionamento

* **Descrição:** Linha do tempo vertical com 3 a 5 marcos importantes.
* **Conteúdo:** Data + Ícone (personagem Sanrio) + Título (ex: "Onde tudo começou").

### 3.6. Cupons do Amor (Gamification)

* **Descrição:** 3 a 6 cartões interativos.
* **Estado Inicial:** Cartão "fechado" com estampa da Hello Kitty.
* **Ação:** Clique (tap).
* **Estado Final:** Cartão vira (flip animation) revelando o prêmio (ex: "Jantar pago", "Massagem").

### 3.7. Quiz do Casal (Gamification)

* **Descrição:** Jogo de perguntas e respostas sobre o casal.
* **Mecânica:**
* Apresentar 1 pergunta por vez.
* Feedback imediato (Certo/Errado).
* **Vitória:** Ao acertar a última, disparar chuva de confetes (`canvas-confetti`).
* **Derrota:** Mensagem fofa de "Tente de novo".



---

## 4. Requisitos Não-Funcionais (Técnicos)

* **Performance:** O site deve carregar em menos de 3 segundos em 4G. Imagens devem estar otimizadas (formato WebP).
* **Responsividade:** O layout deve se adaptar perfeitamente a telas de celular (iPhone/Android) e Desktop.
* **Stack Tecnológico:**
* **Frontend:** React (Vite).
* **Estilização:** Tailwind CSS (pela velocidade) + Styled Components (para componentes complexos).
* **Animações:** Framer Motion (para transições de página e micro-interações).
* **Hospedagem:** Vercel (gratuito e rápido).


* **Assets:** As imagens da Hello Kitty devem ter fundo transparente (.png).

---

## 5. Estrutura de Navegação (Sitemap)

Sugiro uma **Single Page Application (SPA)** com rolagem vertical ("Scrollytelling"), pois é mais imersivo em celulares.

1. **Header Fixo:** Apenas um ícone pequeno da Hello Kitty e o controle de som.
2. **Seção 1 (Hero):** Boas-vindas.
3. **Seção 2:** A Carta.
4. **Seção 3:** Timeline & Galeria (misturados para fluidez).
5. **Seção 4:** Área Interativa (Quiz e depois os Cupons como recompensa).
6. **Footer:** "Feito com ❤️ e React por [Seu Nome]".

---

## 6. Lista de Tarefas (Checklist de Dev)

### Fase 1: Setup & Assets

* [ ] Criar projeto Vite (`npm create vite@latest`).
* [ ] Configurar Tailwind CSS.
* [ ] Instalar dependências: `framer-motion`, `canvas-confetti`, `react-icons`.
* [ ] Coletar fotos do casal.
* [ ] Baixar assets da Hello Kitty (stickers, gifs).
* [ ] Escolher a música (MP3).

### Fase 2: Estrutura Base

* [ ] Criar componente `Layout` (fundo rosa).
* [ ] Criar componente `AudioPlayer`.
* [ ] Desenvolver a `LandingScreen`.

### Fase 3: Conteúdo Estático

* [ ] Desenvolver componente `Letter` (Carta).
* [ ] Desenvolver componente `PolaroidGallery`.
* [ ] Desenvolver componente `Timeline`.

### Fase 4: Interatividade

* [ ] Implementar `Quiz` (lógica de estados e confete).
* [ ] Implementar `LoveCoupons` (animação de flip).

### Fase 5: Polimento & Deploy

* [ ] Adicionar transições de entrada (scroll reveal).
* [ ] Testar no celular.
* [ ] Deploy na Vercel.
* [ ] Enviar link para ela!

