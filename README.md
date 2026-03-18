# 🌙 Salami - Festive Spin & Reveal Experience

**Salami** is a premium, luxury-themed web application designed for the festive tradition of Eid Salami. It offers an immersive and celebratory experience where users can spin a wheel to reveal their "Salami" gift, accompanied by professional 3D animations and high-fidelity soundscapes.

## ✨ Features

- **🏆 High-Stakes Spin Wheel**: A beautifully crafted, responsive spin wheel with landing highlight logic.
- **🎁 3D Gift Box Animation**: An interactive, physics-based 3D gift box that reveals the prize with a celebratory burst.
- **✨ Luxury Aesthetic**: A sophisticated "Emerald & Gold" dark mode design featuring glassmorphism, bokeh backgrounds, and glowing UI elements.
- **🎊 Immersive Celebration**: Integrated confetti bursts and high-quality sound effects (spinning, winning, and opening).
- **📊 Real-time Dashboard**: A live leaderboard showing recent winners and top Salami amounts.
- **📱 Fully Responsive**: Optimized for a premium experience on both desktop and mobile devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) (Mongoose)
- **Effects**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Icons/Components**: Custom UI components with Lucide-style aesthetics.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- MongoDB instance (Atlas or local)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/arasruislam/salami.git
   cd salami
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   Create a `.env.local` file in the root directory and add your MongoDB URI:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and API routes.
- `components/`:
    - `lottery/`: Spin wheel logic and UI.
    - `result/`: Gift box animations and celebration modals.
    - `dashboard/`: Winner leaderboard and stats.
    - `ui/`: Reusable premium UI components (GlowButton, GlowCard, etc.).
- `lib/`: Utility functions, constants, and MongoDB connection.
- `models/`: Database schemas.
- `public/`: High-quality assets (sounds and festive images).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
*Created with ❤️ for the festive season.*

