import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getServerAuthSessions } from "@/actions/auth";
import { subscriptionLimit } from "@/constants";
import UpgradeButton from "@/components/UpgradeButton";
import Script from "next/script";
import { headers } from "next/headers";

export default async function UpgradePlan() {
  const session = await getServerAuthSessions();
  const interviewsCreated = session?.user.subscription?.interviewsCreated ?? 0;
  const interviewsTaken = session?.user.subscription?.interviewsTaken ?? 0;
  const plan =
    (session?.user.subscription?.plan as "free" | "premium") ?? "free";
  const planLimit = subscriptionLimit[plan];

  // Get the referrer route (previous page)
  const headersList = headers();
  const previousRoute = (await headersList).get("referer") || "Unknown";

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6 text-light-100">
        Upgrade Your Plan
      </h2>
      <p className="text-light-400 mb-4">
        Get a better overview of your interviews and unlock premium features.
      </p>

      {/* Display Current Plan */}
      <div className="bg-card p-4 rounded-lg mb-6 text-center">
        <h3 className="text-lg font-semibold text-light-100">Current Plan</h3>
        <p className="text-light-400 mt-1 capitalize">{plan} Plan</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-card p-6">
          <CardContent>
            <h3 className="text-xl font-semibold text-light-100">
              Interviews Created
            </h3>
            <p className="text-light-400 mt-2">
              {interviewsCreated} / {planLimit.interviewCreated}
            </p>
            <Progress
              value={(interviewsCreated / planLimit.interviewCreated) * 100}
              className="mt-2"
            />
          </CardContent>
        </Card>

        <Card className="bg-card p-6">
          <CardContent>
            <h3 className="text-xl font-semibold text-light-100">
              Interviews Taken
            </h3>
            <p className="text-light-400 mt-2">
              {interviewsTaken} / {planLimit.interviewTaken}
            </p>
            <Progress
              value={(interviewsTaken / planLimit.interviewTaken) * 100}
              className="mt-2"
            />
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mt-6">
        <UpgradeButton session={session} previousRoute={previousRoute} />
      </div>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
      />
    </div>
  );
}
