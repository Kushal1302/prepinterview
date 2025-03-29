PrepInterviewPrepInterview is an AI-powered interview assistant designed to help users prepare for interviews by creating and practicing custom interviews. Users can design their own interview scenarios, share them with others, and even participate in AI-driven mock interviews. Whether you're a job seeker or a professional looking to sharpen your skills, PrepInterview has you covered!FeaturesCreate Custom Interviews: Build your own interview questions and scenarios tailored to your needs.Public Visibility: Share your interviews with the community for others to practice.AI-Powered Mock Interviews: Practice with an intelligent AI assistant that simulates real interview experiences.Modern Tech Stack: Built with cutting-edge technologies for a smooth and responsive user experience.Tech StackFrontend: Next.js (React framework), TypeScript, Tailwind CSS, Shadcn UIBackend: MongoDB with Prisma ORMAI Integration: Google Gemini for AI capabilities, VAPI AI Assistant for voice-based interactionsGetting StartedPrerequisitesNode.js (v16 or higher)MongoDB (local or cloud instance)API keys for Google Gemini and VAPI AI AssistantInstallationClone the repository:git clone https://github.com/your-username/prepinterview.git
cd prepinterviewInstall dependencies:npm installSet up environment variables: Create a .env file in the root directory and add the following:DATABASE_URL="your-mongodb-connection-string"
GOOGLE_GEMINI_API_KEY="your-google-gemini-api-key"
VAPI_API_KEY="your-vapi-ai-assistant-key"
NEXT_PUBLIC_BASE_URL="http://localhost:3000"Run the development server:npm run devOpen http://localhost:3000 in your browser to see the app in action.Building for ProductionTo create an optimized production build:npm run build
npm run startUsageCreate an Interview: Log in, navigate to the "Create Interview" section, and design your custom interview with specific questions or topics.Share Your Interview: Once created, your interview will be visible to all users on the platform.Practice with AI: Select an interview (yours or someone else’s) and start a mock session with the AI assistant powered by Google Gemini and VAPI.ContributingWe welcome contributions! To get started:Fork the repository.Create a new branch (git checkout -b feature/your-feature-name).Commit your changes (git commit -m "Add your message").Push to the branch (git push origin feature/your-feature-name).Open a pull request.LicenseThis project is licensed under the MIT License - see the LICENSE file for details.ContactFor questions or feedback, feel free to reach out:Email: your-email@example.comTwitter: @yourusername
