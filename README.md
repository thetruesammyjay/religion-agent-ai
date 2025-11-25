# Interfaith Emotional Guidance AI

**Interfaith Emotional Guidance** is a modern React application that uses Artificial Intelligence to analyze human emotions and provide compassionate, spiritual guidance. By integrating with an AI agent backend, the application analyzes user input and returns relevant verses from the Bible and the Quran, fostering a supportive environment for users of Christian, Islamic, or dual faiths.

## 🌟 Key Features

* **Emotional Analysis:** Detects the primary emotion (e.g., Anxiety, Joy, Sadness) and its intensity level from user input.
* **Multi-Faith Support:** Users can select to receive guidance from:
    * ✝️ The Bible (Christian)
    * ☪️ The Quran (Islamic)
    * 🤝 Both simultaneously
* **Contextual Compassion:** Generates a personalized compassion message tailored to the user's specific situation.
* **Modern UI/UX:** Built with Tailwind CSS for a responsive, clean, and calming interface.
* **Real-time Interaction:** Features smooth loading states, progress bars, and request cancellation support.

## 🛠️ Tech Stack

* **Framework:** [React 18](https://react.dev/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [clsx](https://www.npmjs.com/package/clsx)
* **Icons:** [Lucide React](https://lucide.dev/)
* **HTTP Client:** [Axios](https://axios-http.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/thetruesammyjay/religion-agent-ai.git
   cd religion-agent-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 📂 Project Structure

```text
src/
├── components/          # Reusable UI components
│   ├── EmotionInput.tsx # Text area and faith selector
│   ├── LoadingSpinner.tsx # Animated progress UI with cancel button
│   └── ResponseCard.tsx # Displays the analysis and verses
├── types/
│   └── types.ts         # TypeScript interfaces for API responses
├── App.tsx              # Main application logic and state management
├── main.tsx             # Entry point
└── index.css            # Tailwind directives and global styles
```

## 🔌 API Integration

The frontend is configured to communicate with an external AI Agent API.

**Base URL:** `https://religion-ai-agents.vercel.app`

### Endpoint: `/analyze-emotion/`

* **Method:** `POST`

* **Payload:**

  ```json
  {
    "text": "I am feeling very anxious about my upcoming exam.",
    "faith": "Both" // Options: "Christian", "Islamic", "Both"
  }
  ```

* **Response Format (Combined):**

  ```json
  {
    "detect_emotion": {
      "primary_emotion": "Anxiety",
      "intensity": 8,
      "context": "Academic pressure"
    },
    "bible_verse": {
      "verse_text": "Do not be anxious about anything...",
      "verse_ref": "Philippians 4:6-7",
      "relevance_explanation": "Encouragement to pray..."
    },
    "quran_verse": {
      "verse_text": "Verily, with hardship comes ease.",
      "verse_ref": "Surah Ash-Sharh 94:5-6",
      "relevance_explanation": "Reminder of ease after difficulty..."
    },
    "compassion_message": "It is natural to feel pressure..."
  }
  ```

## ⚙️ Configuration

If you wish to point the application to a different backend (e.g., a local Python/FastAPI server), you can modify the `API_URL` constant in `src/App.tsx`:

```typescript
// src/App.tsx
const API_URL = "http://localhost:8000"; // Change this to your backend URL
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

* Original concept inspired by AI Religion Agents.
* Icons provided by the [Lucide](https://lucide.dev/) library.
* UI Design system built with Tailwind CSS.

---

**Repository:** [https://github.com/thetruesammyjay/religion-agent-ai](https://github.com/thetruesammyjay/religion-agent-ai)