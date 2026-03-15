import * as admin from 'firebase-admin';

function getFirebaseAdmin() {
  if (!admin.apps.length) {
    try {
      // Only initialize if we have the credentials (prevents build-time crashes if env vars are missing)
      if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL) {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
          }),
        });
      } else {
        console.warn("Firebase environment variables are missing. Database features will not work.");
        return null; // Return null so build doesn't crash
      }
    } catch (error) {
      console.error('Firebase admin initialization error', error);
      return null;
    }
  }
  return admin;
}

// Helper to safely get db
export const getDb = () => {
  const fbAdmin = getFirebaseAdmin();
  if (fbAdmin) {
    return fbAdmin.firestore();
  }
  return null;
};
