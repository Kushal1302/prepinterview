import React from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import FeatureCard from "../FeatureCard";

const PublicHomePage = () => {
  return (
    <main className="public-landing flex flex-col gap-16 py-12 px-4">
      {/* Hero Section */}
      <section className="card-cta bg-gradient-to-br  text-white rounded-2xl px-8 py-12 flex flex-col md:flex-row items-center justify-between shadow-lg">
        <div className="max-w-xl flex flex-col gap-5">
          <h1 className="text-4xl font-bold leading-snug">
            Ace Your Interviews with AI-Powered Precision
          </h1>
          <p className="text-lg text-slate-300">
            Get personalized mock interviews, smart feedback, and real-world
            analytics to improve your performance. Whether {"you're"} a fresher
            or a pro — we’ve got your back.
          </p>
          <div className="flex gap-4 mt-4">
            <Button asChild className="btn-primary">
              <Link href="/sign-in">Start Practicing</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="#features">View All Features</Link>
            </Button>
          </div>
        </div>
        <Image
          src="/robot.png"
          alt="AI Interview Assistant"
          height={350}
          width={350}
          className="mt-8 md:mt-0"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="flex flex-col gap-10">
        <h2 className="text-3xl font-semibold text-center">What You’ll Get</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <FeatureCard
            title="AI-Conducted Interviews"
            description="Our AI plays the interviewer — asking questions, tracking your responses, and adapting in real-time."
            icon="🤖"
          />
          <FeatureCard
            title="Custom Interview Generation"
            description="Select your role (e.g., Backend Engineer), number of questions, and we’ll generate a complete mock interview."
            icon="🎯"
          />
          <FeatureCard
            title="Instant AI Feedback"
            description="Get detailed suggestions and analysis as soon as you finish an interview."
            icon="⚡"
          />
          <FeatureCard
            title="Performance Reports"
            description="Analyze your communication, content clarity, and technical strength across sessions."
            icon="📊"
          />
          <FeatureCard
            title="Real Company Questions"
            description="Practice questions sourced from real interviews at top tech companies."
            icon="🏢"
          />
          <FeatureCard
            title="24/7 Chatbot Assistant"
            description="Need help or career advice? Ask our AI chatbot anytime during your journey."
            icon="💬"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="flex flex-col gap-6 mt-6">
        <h2 className="text-3xl font-semibold text-center">How It Works</h2>
        <ol className="grid md:grid-cols-4 gap-6 text-center text-muted-foreground">
          <li className="p-4 border rounded-xl">
            <div className="text-xl font-bold mb-2">1. Sign Up</div>
            <p>Create your free account and set your career goal.</p>
          </li>
          <li className="p-4 border rounded-xl">
            <div className="text-xl font-bold mb-2">2. Customize Interview</div>
            <p>
              Choose your domain and number of questions — we’ll build it
              instantly.
            </p>
          </li>
          <li className="p-4 border rounded-xl">
            <div className="text-xl font-bold mb-2">3. Get Feedback</div>
            <p>Receive actionable AI-powered feedback on each answer.</p>
          </li>
          <li className="p-4 border rounded-xl">
            <div className="text-xl font-bold mb-2">4. Improve & Repeat</div>
            <p>Track performance, improve weak areas, and try again.</p>
          </li>
        </ol>
      </section>

      {/* Testimonials */}
      <section className="mt-10">
        <h2 className="text-center text-2xl font-semibold mb-6">
          What Our Users Say
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <blockquote className="bg-muted p-6 rounded-xl">
            <p>
              “I landed a job at Amazon thanks to IntervueIQ. Their AI
              feedback helped me improve fast.”
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              – Priya, SDE2
            </footer>
          </blockquote>
          <blockquote className="bg-muted p-6 rounded-xl">
            <p>
              “It felt like a real interview — the pressure, the structure, the
              insights. 10/10.”
            </p>
            <footer className="mt-4 text-sm text-muted-foreground">
              – Rahul, Product Manager
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mt-16">
        <h2 className="text-center text-2xl font-semibold mb-4">
          Why Choose Us?
        </h2>
        <div className="overflow-auto">
          <table className="w-full text-left border border-muted text-sm">
            <thead>
              <tr className="bg-muted">
                <th className="p-3">Feature</th>
                <th className="p-3">IntervueIQ</th>
                <th className="p-3">YouTube</th>
                <th className="p-3">Books</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3">Custom AI Interviews</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td className="p-3">Instant Feedback</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td className="p-3">Real Company Questions</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td className="p-3">Progress Tracking</td>
                <td>✅</td>
                <td>❌</td>
                <td>❌</td>
              </tr>
              <tr>
                <td className="p-3">Practice Anytime</td>
                <td>✅</td>
                <td>✅</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Why AI Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center">
          Why Use AI for IntervueIQ?
        </h2>
        <ul className="mt-6 grid md:grid-cols-2 gap-6 list-disc px-6 text-muted-foreground">
          <li>
            AI adapts to your responses, difficulty level, and time preference
          </li>
          <li>Simulates real interview pressure and timing</li>
          <li>Delivers objective, data-driven feedback</li>
          <li>Eliminates scheduling and coordination headaches</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center mt-16">
        <h3 className="text-2xl font-medium">Start your journey today</h3>
        <p className="text-muted-foreground mb-4">
          Join thousands of learners preparing smarter with IntervueIQ.
        </p>
        <Button asChild className="btn-primary">
          <Link href="/sign-in">Create Your Free Account</Link>
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
          🔒 Your data is safe & private. No spam, ever.
        </p>
      </section>
    </main>
  );
};

export default PublicHomePage;
