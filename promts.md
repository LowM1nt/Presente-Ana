AI Prompts for Hello Kitty Birthday Web App
This document contains specific prompts to be used with an AI coding assistant to generate the code for each phase of the project. These prompts are designed to ensure high code quality, responsiveness, and minimal bugs.

General Context Prompt
Use this at the start of the session:

"I am building a Hello Kitty themed birthday website for my girlfriend. The stack is React (Vite), Tailwind CSS, Framer Motion. The design must be 'Mobile-First', responsive, and use the color palette: Pink #FFC0CB (bg), Hot Pink #FF69B4 (primary), White #FFFFFF (cards). Fonts: 'Fredoka One' for headings, 'Quicksand' for body. Please ensure all code is bug-free, fully typed (if using TS), and aesthetically pleasing (Kawaii style)."

Phase 1: Setup & Foundation
Prompt 1: Project Initialization

"Initialize a new React project using Vite. Install tailwindcss, postcss, autoprefixer and initialize tailwind. Then, install framer-motion, canvas-confetti, react-icons, and react-use. Configure tailwind.config.js to include the custom colors (#FFC0CB, #FF69B4) and fonts ('Fredoka One', 'Quicksand'). Create a basic index.css that imports these fonts from Google Fonts and sets the default body background."

Phase 2: Core Components
Prompt 2: Layout & Audio Player

"Create a Layout component that acts as the main wrapper. It should be fully responsive, centered max-width for desktop but full-width for mobile. Then, create an AudioPlayer component. It should be a floating button (bottom-right or top-right) that toggles music. Note: Autoplay is blocked by browsers, so the music should only start after the user interacts with the page (e.g., clicks a 'Start' button). Use a placeholder URL for the audio file."

Prompt 3: Landing Screen

"Create a LandingScreen component. It needs to covers the full viewport (h-screen). It should feature:

An animated Hello Kitty image (bounce effect using Framer Motion).
A title 'Happy Birthday [Name]!'.
A 'Start' button. When clicked, it should call a function to start the music and scroll/transition to the main content. Ensure the design is cute, using rounded corners and the defined color palette."
Phase 3: Content Sections
Prompt 4: Letter & Gallery

"Create a Letter component that looks like a piece of paper (white bg, shadow, rounded). It should display a heartfelt message. Add a 'fade-in-up' animation using Framer Motion when it comes into view. Next, create a PolaroidGallery component. It should display a grid of photos. Each photo should look like a Polaroid (white border, bottom caption) and have a slight random tilt rotation to look like they were scattered. It must be responsive (1 column mobile, 2-3 columns desktop)."

Prompt 5: Timeline

"Create a Timeline component to show relationship milestones. Use a vertical line design. Each item should have a date, an icon, and a description. Alternate sides on desktop, but keep it single-column on mobile for better readability. Use Framer Motion to animate items appearing as the user scrolls down."

Phase 4: Interactive Features
Prompt 6: Quiz Component

"Implement a Quiz component. It should cycle through an array of questions about the couple.

Display one question at a time.
Show immediate feedback (visual shake for wrong, checkmark for right).
Count the score.
Upon completing correctly, trigger a confetti explosion using canvas-confetti. Ensure the state is managed cleanly (no bugs in resetting or progressing)."
Prompt 7: Love Coupons

"Create a LoveCoupons component. It should display a grid of cards.

Initial state: 'Closed' (shows a cute pattern/icon).
Interaction: extensive click/tap.
Animation: Flip 180 degrees to reveal a 'prize' (e.g., 'Free Massage').
Ensure the flip animation is smooth and works on touch devices."
Phase 5: Verification & Polish
Prompt 8: Final Polish

"Review the entire application code.

Check for any hardcoded dimensions that might break responsiveness. Use Tailwind's utility classes (md:, lg:) to ensure fluidity.
Ensure all interactive elements have hover states (for desktop) and active states (for mobile).
Verify that the file structure is clean and components are modular.
Add a footer: 'Made with ❤️ by [Name]'."