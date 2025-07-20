export const blogPosts = [
  {
    title: "Why AI is the Future of Interviews",
    slug: "ai-interview-future",
    description: "Explore how AI is transforming the way interviews are conducted.",
    content: `<p>Artificial Intelligence is transforming how companies approach hiring. AI-driven platforms can analyze candidate behavior, assess coding skills, and even conduct real-time interviews. This reduces bias and increases efficiency, allowing companies to scale hiring processes globally while maintaining quality. With tools like IntervueIQ, you can automate screening, conduct mock interviews, and provide feedback — all using AI.</p>
              <h2>Key Benefits</h2>
              <ul>
                <li>Automated skill assessments</li>
                <li>Bias-free hiring</li>
                <li>Cost-efficient interview cycles</li>
              </ul>`
  },
  {
    title: "Top 5 Mistakes in Technical Interviews",
    slug: "top-5-interview-mistakes",
    description: "Avoid these common pitfalls when preparing for your next tech interview.",
    content: `<p>Technical interviews are nerve-wracking, but many candidates make easily avoidable mistakes. Here are the top 5:</p>
              <ol>
                <li>Not practicing on real-world problems.</li>
                <li>Ignoring system design fundamentals.</li>
                <li>Poor communication of thought process.</li>
                <li>Neglecting mock interviews.</li>
                <li>Not understanding the company’s tech stack.</li>
              </ol>
              <p>Platforms like IntervueIQ help you prep smarter with AI mock sessions and feedback loops.</p>`
  },
  {
    title: "How to Prepare for System Design Interviews",
    slug: "prepare-system-design-interviews",
    description: "Crack your next system design interview with these practical strategies.",
    content: `<p>System design interviews assess your ability to architect scalable systems. Start with basics like load balancing, caching, and database sharding. Use frameworks like <strong>Scalability, Availability, Reliability</strong> to guide your answers.</p>
              <p>Don't forget to practice mock sessions with feedback — tools like IntervueIQ can simulate real-world design scenarios.</p>`
  },
  {
    title: "AI-Powered Mock Interviews: Are They Worth It?",
    slug: "ai-mock-interviews-worth-it",
    description: "Can an AI replace human feedback in interviews? Let’s explore.",
    content: `<p>AI-powered mock interviews offer instant, unbiased, and consistent feedback. They help you practice repeatedly without the need to schedule human interviewers. AI can evaluate your tone, response quality, and even code structure.</p>
              <p>However, combining AI with occasional human feedback yields the best results. Think of AI as your 24/7 coach!</p>`
  },
  {
    title: "How to Build Confidence Before a Technical Interview",
    slug: "build-confidence-tech-interview",
    description: "Feeling anxious before your tech round? Try these confidence-boosting tips.",
    content: `<p>Confidence is key in tech interviews. Here's how to build it:</p>
              <ul>
                <li>Practice daily with mock interviews.</li>
                <li>Record and review your performance.</li>
                <li>Get constructive feedback from peers or AI tools.</li>
                <li>Simulate real environments — dress up and use a quiet room.</li>
              </ul>
              <p>IntervueIQ lets you do all this in one place, helping you feel ready.</p>`
  },
  {
    title: "How Recruiters Use AI to Shortlist Candidates",
    slug: "ai-recruiter-shortlisting",
    description: "Understand how companies use AI to filter job applicants quickly and accurately.",
    content: `<p>Recruiters use AI to sift through hundreds of resumes, checking for skill matches, keyword relevance, and even communication tone in application letters. With tools like IntervueIQ, pre-screening tests and automated assessments further reduce human workload.</p>
              <p>If you understand how the system works, you can tailor your resume and performance accordingly.</p>`
  },
  {
    title: "The Rise of AI in Remote Hiring",
    slug: "ai-remote-hiring",
    description: "AI is making remote hiring smarter and faster. Here's how.",
    content: `<p>Remote hiring has exploded, and AI plays a critical role. It enables companies to:</p>
              <ul>
                <li>Conduct asynchronous interviews</li>
                <li>Evaluate coding tasks in real time</li>
                <li>Identify soft skills through NLP analysis</li>
              </ul>
              <p>Platforms like IntervueIQ make this seamless for recruiters and fairer for candidates.</p>`
  },
  {
    title: "How to Ace Behavioral Interviews with AI Coaching",
    slug: "behavioral-ai-coaching",
    description: "AI can coach you on your tone, pauses, and answer quality. Learn how.",
    content: `<p>Behavioral interviews are often underestimated. But they play a huge role in final selection. AI coaching can analyze your facial expressions, tone, and pause duration to give actionable feedback.</p>
              <p>Using tools like IntervueIQ, you can practice STAR-format answers and polish delivery before the real thing.</p>`
  },
  {
    title: "The Future of Hiring: AI + Human Collaboration",
    slug: "future-hiring-ai-human",
    description: "Why AI won't replace humans but enhance hiring processes.",
    content: `<p>AI will not replace human interviewers entirely — but it will eliminate inefficiencies and bias. The future lies in AI-human collaboration: AI does the heavy lifting (screening, scoring, analyzing), and humans make final decisions based on context and culture fit.</p>
              <p>This hybrid model ensures both fairness and depth in hiring.</p>`
  },
  {
    title: "Top Tools to Prepare for Technical Interviews in 2025",
    slug: "top-interview-tools-2025",
    description: "Stay ahead with these modern tools designed to help you succeed.",
    content: `<p>Here are the top tools every software engineer should use in 2025:</p>
              <ul>
                <li><strong>IntervueIQ</strong> – AI mock interviews & feedback</li>
                <li><strong>LeetCode</strong> – Practice DSA problems</li>
                <li><strong>Excalidraw</strong> – Draw system design diagrams</li>
                <li><strong>Notion</strong> – Organize study plans</li>
              </ul>
              <p>Combine these with daily habits, and you're interview-ready.</p>`
  },
];

export const getAllBlogs = async () => blogPosts;

export const getBlogBySlug = async (slug: string) =>
  blogPosts.find((b) => b.slug === slug);
