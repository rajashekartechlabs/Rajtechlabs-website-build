# Rajashekar Tech Labs Portfolio & Booking System

A professional portfolio website featuring a custom-built 1-on-1 strategy call booking system with Razorpay integration and automated email confirmations.

## 🚀 Features

-   **Professional Portfolio UI**: Modern, responsive design showcasing projects and expertise.
-   **Booking System**: Dedicated `/book` page with a multi-step booking process.
    -   **Dynamic Time Slots**: Interactive selection from 10:00 AM to 5:00 PM (30-min intervals).
    -   **Date Restrictions**: Prevents last-minute bookings (minimum 48 hours notice).
-   **Coupon System**: Backend-verified coupon codes (e.g., `TEST1RUP`) with strict usage limits stored in Firestore.
-   **Razorpay Integration**: Secure payment processing for call bookings.
-   **Firebase Backend**: Uses Firestore to securely store booking details, track coupon usage, and manage payment statuses.
-   **Automated Emails**: Integrated with Nodemailer (Gmail) to send instant confirmations to both the admin and the customer.
-   **Standalone Email API**: Accessible via `/api/send-email` for general programmatic messaging.

## 🛠 Tech Stack

-   **Frontend**: Next.js 14, Tailwind CSS 4, Lucide React, Shadcn/UI.
-   **Backend**: Next.js API Routes (Serverless).
-   **Database**: Firebase Firestore.
-   **Payments**: Razorpay.
-   **Email**: Nodemailer with Gmail SMTP.

## 💻 Local Development

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/rajashekartechlabs/Rajtechlabs-website-build.git
    cd Rajtechlabs-website-build
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Setup Environment Variables**:
    Create a `.env.local` file in the root directory and fill in the values based on `.env.example`.

4.  **Run the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file:

```env
# Razorpay Credentials
RAZORPAY_KEY_ID=rzp_test_...
RAZORPAY_KEY_SECRET=your_secret_here

# Email Configuration (Nodemailer)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here

# Firebase Admin SDK Credentials
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Public Keys (Optional if passed via backend)
NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_...
```

## 🌍 Deployment

The project is optimized for deployment on **Vercel**. 

1. Push your code to GitHub.
2. Link your repository to Vercel.
3. **Crucial**: Manually add all variables from the "Environment Variables" section above to the **Vercel Project Settings > Environment Variables** tab.
4. Redeploy the project.

## 📝 License

© 2026 Rajashekar Tech Labs. All Rights Reserved.
