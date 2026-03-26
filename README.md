# 👻 Ghost Invasion AR: An Immersive Narrative Experience

[![Vercel Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://ghost-invasion-ar.vercel.app/)
[![HCI Project](https://img.shields.io/badge/Focus-HCI%20%26%20Interactive%20Storytelling-blue)](https://github.com/leonardo-zhu/ghost-invasion-ar)

**Ghost Invasion AR** is a marker-based augmented reality (AR) experience that bridges physical space with a digital narrative. Built as part of a deep exploration into Human-AI Interaction and Mixed Reality, the project transforms everyday objects into interactive portals for a ghost-themed story focused on digital ethics and legacy.

🚀 **Experience Live:** [ghost-invasion-ar.vercel.app](https://ghost-invasion-ar.vercel.app/) (Best viewed on mobile in **landscape mode**)

---

## 🌟 Product Vision & Design Philosophy

As a Product/Project-led experiment, this application focuses on:
- **Seamless Mixed Reality Transition:** Minimizing the "uncanny valley" of AR by using physical markers (printers, terminals) as anchors for digital content.
- **Narrative-Driven Interaction:** Moving beyond simple 3D viewing to a step-by-step narrative where user decisions affect the ghost's progression.
- **Onboarding & UX flow:** Handling camera permissions, orientation prompts, and visual feedback for stable AR tracking in a mobile web environment.

## 🧭 Interactive Flow (Product Roadmap)

The experience is structured into four distinct stages, each tied to a specific physical marker:

1.  **Stage 0: Initialization** - Onboarding and environment setup.
2.  **Stage 1: Terminal Breach** - Interaction with a 3D terminal to unlock credentials.
3.  **Stage 2: Information Retrieval** - Finding the encryption key through environmental cues.
4.  **Stage 3: Ethical Decision** - The final convergence where the user decides the fate of the "ghost's" digital legacy.

## 🛠️ Tech Stack & Implementation

- **Frontend:** React + Next.js (App Router)
- **AR Engine:** [MindAR](https://hiukim.github.io/mind-ar-js-doc/) (Web-based, marker-tracking)
- **3D Rendering:** Three.js for high-fidelity 3D model animations.
- **State Management:** Custom React hooks for multi-stage narrative tracking.
- **UI Architecture:** Ant Design for responsive overlays and mobile optimization.

## 📱 Getting Started & Usage

1.  Open the [live link](https://ghost-invasion-ar.vercel.app/) on your mobile browser (Safari/Chrome).
2.  Agree to **Camera Permissions**.
3.  Rotate your phone to **Landscape Mode** for an optimal field of view.
4.  Point your camera at the designated markers to trigger the ghost's appearance.

---

## 📂 Project Structure

- `src/app/ar/` - The core AR logic and multi-step progression components.
- `src/scenes/` - 3D scene initialization and asset management.
- `src/hooks/` - AR tracking state and narrative flow logic.

---

## 👤 Author: Leonardo Zhu

Explore more of my work in AI, HCI, and Product Management:
- [LinkedIn](https://www.linkedin.com/in/xiaolong-zhu/)
- [Portfolio/Resume](https://github.com/leonardo-zhu/Resume)


---
*This README was updated and conflict-resolved by the **Antigravity AI Assistant** via a custom GitHub App.*
