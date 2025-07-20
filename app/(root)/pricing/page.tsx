import { Metadata } from "next";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Pricing Plans – AI Mock Interviews | IntervueIQ",
  description:
    "Affordable pricing plans for AI-powered mock interviews. Practice coding, system design & behavioral rounds with feedback. Cancel anytime.",
  openGraph: {
    title: "Pricing Plans – AI Mock Interviews | IntervueIQ",
    description:
      "Choose from Free, Pro or Enterprise plans. Practice AI-driven mock interviews with deep feedback & analytics.",
    url: "https://prepinterview-c86r.vercel.app/pricing",
    siteName: "IntervueIQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans – AI Mock Interviews | IntervueIQ",
    description:
      "Choose from Free, Pro or Enterprise plans. Practice AI-driven mock interviews with deep feedback & analytics.",
  },
};

const plans = [
  {
    name: "Free",
    price: "₹0",
    description: "Great for beginners who want to try AI mock interviews.",
    features: ["3 AI interviews/month", "Basic feedback", "Limited domains"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "₹499/month",
    description: "For serious job seekers preparing daily.",
    features: [
      "Unlimited AI interviews",
      "Advanced feedback & analytics",
      "All job domains",
      "Priority support",
    ],
    cta: "Upgrade to Pro",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Contact Us",
    description: "Tailored for companies or coaching centers.",
    features: [
      "Team/Student access",
      "Custom feedback modules",
      "Admin dashboard",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mt-8">
        <h2 className="text-3xl font-bold mb-4">
          Find a Plan That Fits Your Career Goals
        </h2>
        <p className="text-muted-foreground">
          Whether {"you're"} just starting your job hunt or actively
          interviewing, IntervueIQ offers a flexible plan for every stage.
          Practice with AI-driven mock interviews, receive instant feedback, and
          prepare for your next role with confidence.
        </p>
      </div>

      <div className="container pb-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight">Simple Pricing</h1>
          <p className="text-muted-foreground mt-2">
            No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl border ${
                plan.highlight ? "border-primary shadow-lg" : "border-muted"
              } p-6 flex flex-col`}
            >
              <h2 className="text-2xl font-semibold mb-1">{plan.name}</h2>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              <div className="text-3xl font-bold mb-4">{plan.price}</div>

              <ul className="flex-1 space-y-2 mb-6 text-sm text-muted-foreground">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlight ? "default" : "outline"}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Compare Plans
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-muted rounded-md">
            <thead>
              <tr className="bg-muted text-left">
                <th className="p-3 font-medium">Feature</th>
                <th className="p-3 font-medium">Free</th>
                <th className="p-3 font-medium">Pro</th>
                <th className="p-3 font-medium">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {[
                ["AI Interviews / Month", "3", "Unlimited", "Unlimited"],
                [
                  "Feedback Type",
                  "Basic",
                  "Advanced + Analytics",
                  "Custom Modules",
                ],
                ["Domains", "Limited", "All Job Domains", "All Job Domains"],
                ["Team Access", "❌", "❌", "✅"],
                ["Admin Dashboard", "❌", "❌", "✅"],
                ["Support", "Standard", "Priority", "Dedicated"],
                ["Price", "₹0", "₹499/month", "Contact Us"],
              ].map(([feature, free, pro, enterprise], i) => (
                <tr key={i}>
                  <td className="p-3 font-medium">{feature}</td>
                  <td className="p-3">{free}</td>
                  <td className="p-3">{pro}</td>
                  <td className="p-3">{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium">Can I switch plans later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade anytime directly from your
              dashboard.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              Do I need a credit card for the free plan?
            </h3>
            <p className="text-muted-foreground">
              No, our free plan requires no payment information to get started.
            </p>
          </div>
          <div>
            <h3 className="font-medium">Is my data safe?</h3>
            <p className="text-muted-foreground">
              Absolutely. We use encryption and follow industry standards to
              protect your information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
