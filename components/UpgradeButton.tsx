"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Session } from "next-auth";
import { toast } from "sonner";
import { Route } from "next";
import { useRouter } from "next/navigation";
import { upgradePlan } from "@/actions/db";

const UpgradeButton = ({
  session,
  previousRoute,
}: {
  session: Session | null;
  previousRoute: Route;
}) => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const handlePayment = async () => {
    setLoading(true);

    try {
      // Call API to create order
      const response = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      const order = await response.json();

      if (!order.id) {
        alert("Failed to create Razorpay order");
        return;
      }

      // Load Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Public Key
        amount: order.amount,
        currency: order.currency,
        name: "Prep Interview",
        description: "Upgrade to premium",
        order_id: order.id, // Razorpay order ID
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        handler: async function (response: unknown) {
          await upgradePlan({ userId: session?.user.id ?? "" });
          push(previousRoute);
          toast.success("Payment Succesfull");
        },
        prefill: {
          name: session?.user.name,
          email: session?.user.email,
          phone: "9664386233",
        },
        theme: { color: "#3399cc" },
      };

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const razor = new (window as any).Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handlePayment} disabled={loading} className="btn-primary">
      {loading ? "Processing..." : "Upgrade Now"}
    </Button>
  );
};

export default UpgradeButton;
