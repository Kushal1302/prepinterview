# IntervueIQ - AI Powered Interview Assistant

## 🚀 About the Project
IntervueIQ is an AI-powered interview assistant designed to help candidates prepare effectively for technical and behavioral interviews. It leverages cutting-edge AI models to generate customized interview questions based on user input and provides a seamless and interactive experience.

## 🛠 Tech Stack
- **Framework:** Next.js (React, Server Components, API Routes)
- **Programming Language:** TypeScript
- **Database:** Prisma ORM with MongoDB
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI
- **AI Models:** Vapi AI Agent, Google Gemini

## 🎨 Design Language
The UI follows a modern and minimalistic approach, ensuring a smooth and intuitive user experience. The design is optimized for:
- Dark & Light mode compatibility
- Responsive layouts for all screen sizes
- Clean typography and spacing
- Accessibility best practices

## 📂 Project Structure
```
/ IntervueIQ
├── /app             # Next.js App Router
├── /components      # Reusable UI Components
├── /styles         # Global & Component-specific styles
├── /lib            # Utility functions and AI integrations
├── /prisma         # Database schema and migrations
├── /pages          # API routes and static pages
├── /public         # Static assets
└── /env            # Environment variables
```

## 🔧 Installation & Setup
### Prerequisites
- Node.js (Latest LTS)
- MongoDB Database
- Google Gemini API Key
- Vapi AI Agent Key

### Steps to Run Locally
1. **Clone the repository**
   ```sh
   git clone https://github.com/yourusername/IntervueIQ.git
   cd IntervueIQ
   ```
2. **Install dependencies**
   ```sh
   npm install
   # or
   yarn install
   ```
3. **Set up environment variables** (Create `.env.local` and add required keys)
4. **Run the development server**
   ```sh
   npm run dev
   ```
5. **Open the project** in your browser at `http://localhost:3000`

## 🌟 Features
- **AI-Powered Question Generation** using Google Gemini
- **Real-time Interview Simulations** with Vapi AI Agent
- **Customizable Interview Topics & Difficulty Levels**
- **Save & Review Past Interviews**
- **Modern UI with ShadCN Components**

## 📜 Environment Variables
Ensure you set up the following in your `.env.local` file:
```env
# NEXT AUTH CREDENTIALS

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=""

# GOOGLE CREDENTIALS

GOOGLE_ID=""
GOOGLE_SECRET=""
GOOGLE_GENERATIVE_AI_API_KEY=""


# VAPI CREDENTIALS

NEXT_PUBLIC_VAPI_WEB_TOKEN=""
NEXT_PUBLIC_VAPI_WORKFLOW_ID=""

# DATABASE_URL

DATABASE_URL=""

# EMAIL CREDENTIALS

EMAIL_HOST=""
EMAIL_PASS=""
EMAIL_USER=""


NEXT_PUBLIC_INTERVIEW_CREATED_FREE=2
NEXT_PUBLIC_INTERVIEW_TAKEN_FREE=3
NEXT_PUBLIC_INTERVIEW_CREATED_PREMIUM=5
NEXT_PUBLIC_INTERVIEW_TAKEN_PREMIUM=7
```

## 🔗 Contributing
We welcome contributions! If you'd like to contribute, please:
1. Fork the repository
2. Create a new branch (`feature-branch-name`)
3. Commit your changes
4. Push to your fork and create a pull request

## 📜 License
This project is licensed under the MIT License.

## 📬 Contact
For any queries, feel free to reach out via:
- **GitHub Issues**: [Repo Issues](https://github.com/Kushal1302/IntervueIQ/issues)
- **Email**: kushalmalviya1302@gmail.com

