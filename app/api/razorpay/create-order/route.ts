import Razorpay from "razorpay";

export async function POST() {
  try {
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: 12900, // Amount in paisa (50000 = ₹500)
      currency: "INR",
      receipt: `order_rcptid_${Date.now()}`,
      payment_capture: 1, // Auto capture payment   
    };

    const order = await razorpay.orders.create(options);
    return Response.json(order, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Server Error" }, { status: 500 });
  }
}
