import * as admin from 'firebase-admin';
import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
import type { ServiceAccount } from 'firebase-admin';

const serviceAccount: ServiceAccount = {
  type: 'service_account',
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
} as ServiceAccount;

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

const LOCALES: string[] = ['en', 'hi', 'es'];
const MESSAGES_DIR: string = path.join(process.cwd(), 'messages');

async function syncTranslations(): Promise<void> {
  console.log('🔄 Starting translation sync from Firestore...');
  
  if (!fs.existsSync(MESSAGES_DIR)) {
    fs.mkdirSync(MESSAGES_DIR, { recursive: true });
    console.log('📁 Created messages directory');
  }

  let successCount = 0;
  let warningCount = 0;

  for (const locale of LOCALES) {
    try {
      console.log(`📥 Fetching ${locale} from Firestore...`);
      const doc = await db.collection('translations').doc(locale).get();
      
      if (doc.exists) {
        const data: Record<string, any> = doc.data() || {};
        const filePath = path.join(MESSAGES_DIR, `${locale}.json`);
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`✅ Downloaded/Updated messages/${locale}.json (${Object.keys(data).length} namespaces)`);
        successCount++;
      } else {
        console.warn(`⚠️ No data for locale: ${locale} in Firestore`);
        fs.writeFileSync(path.join(MESSAGES_DIR, `${locale}.json`), '{}');
        warningCount++;
      }
    } catch (error: unknown) {
      console.error(`❌ Error syncing ${locale}:`, error);
      warningCount++;
    }
  }
  
  console.log(`🎉 Sync complete! ${successCount} successful, ${warningCount} warnings.`);
  console.log(`📂 Files saved to: ${MESSAGES_DIR}/`);
}

syncTranslations()
  .then(() => {
    console.log('🚀 All done! Check your messages/ folder.');
    process.exit(0);
  })
  .catch((err: unknown) => {
    console.error('💥 Sync failed:', err);
    process.exit(1);
  });
