
import { Network, FileJson, Database, ShieldCheck, BrainCircuit, Cloud, ArrowRight, Laptop } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';

const CodeBlock = ({ code }: { code: string }) => (
  <pre className="bg-muted text-muted-foreground rounded-lg p-4 text-sm overflow-x-auto">
    <code>{code}</code>
  </pre>
);

export default function BertIntegrationGuidePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12" id="main-content">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl lg:text-5xl font-bold text-primary mb-6">
            Integrating a BERT-based NLP Model with Firebase
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            A practical guide for AI engineers on securely connecting a BERT API on Google Cloud Run with a Firebase frontend, using Cloud Functions as a scalable intermediary.
          </p>

          <section id="architecture" className="mb-16">
            <h2 className="text-3xl font-bold font-headline mb-8 flex items-center gap-3">
              <Network className="w-8 h-8 text-primary" />
              Architecture Flow
            </h2>
            <p className="text-muted-foreground mb-8">
              The architecture is designed to be secure, scalable, and cost-effective by using a Firebase Cloud Function as a proxy between the user's browser and the backend BERT model. This prevents direct exposure of your AI service.
            </p>
            <div className="space-y-6">
              {[
                { icon: Laptop, title: "1. Frontend Interaction", description: "The user enters Bangla or English text into the Firebase Studio web app and triggers an action (e.g., clicks a button)." },
                { icon: Cloud, title: "2. Secure Cloud Function Call", description: "The frontend makes a secure call to a Firebase Callable Cloud Function, passing the user's text and authentication token." },
                { icon: ShieldCheck, title: "3. Authenticated API Request", description: "The Cloud Function verifies the user's authentication status and then makes a server-to-server POST request to the FastAPI endpoint on Google Cloud Run, which hosts the BERT model." },
                { icon: BrainCircuit, title: "4. NLP Prediction", description: "The FastAPI application receives the text, processes it with the BERT model to get predictions (e.g., classification, intent)."},
                { icon: ArrowRight, title: "5. Response to Cloud Function", description: "The BERT API sends the prediction results back to the Cloud Function." },
                { icon: Database, title: "6. Store Results in Firestore", description: "The Cloud Function receives the prediction and stores it in a Firestore collection for logging, analytics, or future use." },
                { icon: FileJson, title: "7. Return to UI", description: "Finally, the Cloud Function returns a structured JSON response to the frontend, which updates the UI to display the result to the user." },
              ].map(step => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="data-structure" className="mb-16">
            <h2 className="text-3xl font-bold font-headline mb-8 flex items-center gap-3">
              <FileJson className="w-8 h-8 text-primary" />
              Request/Response Structure
            </h2>
            
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-semibold mb-2">Cloud Function Request (from UI)</h3>
                    <p className="text-muted-foreground mb-4">The frontend sends a simple JSON object to the callable function.</p>
                    <CodeBlock code={`{\n  "text": "আমার সোনার বাংলা, আমি তোমায় ভালোবাসি।"\n}`} />
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-2">BERT API Request (from Cloud Function)</h3>
                    <p className="text-muted-foreground mb-4">The Cloud Function forwards this to the BERT API.</p>
                     <CodeBlock code={`{\n  "text": "আমার সোনার বাংলা, আমি তোমায় ভালোবাসি。"\n}`} />
                </div>
                
                <div>
                    <h3 className="text-xl font-semibold mb-2">BERT API Response (to Cloud Function)</h3>
                     <p className="text-muted-foreground mb-4">The API returns predictions. This example shows intent classification.</p>
                    <CodeBlock code={`{\n  "predictions": [\n    {\n      "label": "Patriotic Sentiment",\n      "score": 0.98\n    },\n    {\n      "label": "General Inquiry",\n      "score": 0.02\n    }\n  ]\n}`} />
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-2">Final JSON Response (to UI)</h3>
                     <p className="text-muted-foreground mb-4">The Cloud Function formats and returns the final result to the UI, including the ID of the newly created Firestore document.</p>
                    <CodeBlock code={`{\n  "success": true,\n  "firestoreDocId": "aBcDeFgHiJkLmNoPqRsT",\n  "intent": "Patriotic Sentiment",\n  "confidence": 0.98\n}`} />
                </div>
            </div>
          </section>

          <section id="cloud-function-logic" className="mb-16">
            <h2 className="text-3xl font-bold font-headline mb-8 flex items-center gap-3">
              <Cloud className="w-8 h-8 text-primary" />
              Firebase Cloud Function Logic
            </h2>
             <p className="text-muted-foreground mb-6">
              The Cloud Function (written in Node.js or Python) acts as the secure core of this architecture. Here is the conceptual logic:
            </p>
            <CodeBlock code={
`// 1. Import dependencies (firebase-functions, firebase-admin, node-fetch)
// 2. Initialize Firebase Admin SDK

exports.processTextWithBERT = functions.https.onCall(async (data, context) => {
  // 3. Security Check: Ensure the user is authenticated.
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  const userText = data.text;
  const userId = context.auth.uid;
  const BERT_API_URL = process.env.BERT_API_URL; // Stored as environment variable

  // 4. Validate Input
  if (!userText || typeof userText !== 'string' || userText.trim().length === 0) {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with a valid "text" argument.');
  }
  
  try {
    // 5. Call the BERT API
    const apiResponse = await fetch(BERT_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: userText })
    });
    const predictions = await apiResponse.json();

    // 6. Process the prediction
    const topPrediction = predictions.predictions[0];

    // 7. Store results in Firestore
    const firestoreRef = await admin.firestore().collection('textAnalysis').add({
      userId: userId,
      inputText: userText,
      predictionLabel: topPrediction.label,
      predictionScore: topPrediction.score,
      createdAt: admin.firestore.FieldValue.serverTimestamp()
    });

    // 8. Return structured response to the client
    return {
      success: true,
      firestoreDocId: firestoreRef.id,
      intent: topPrediction.label,
      confidence: topPrediction.score
    };

  } catch (error) {
    console.error("Error processing text with BERT API:", error);
    throw new functions.https.HttpsError('internal', 'Failed to process text.', error);
  }
});`
            } />
          </section>
          
          <section id="deployment-considerations">
            <h2 className="text-3xl font-bold font-headline mb-8">Performance & Deployment</h2>
            <ul className="space-y-4 text-muted-foreground list-disc list-inside">
                <li><strong className="text-foreground">Security:</strong> Use Firebase App Check to protect your Cloud Function from abuse and configure the Cloud Run service to only accept requests from your Cloud Function.</li>
                <li><strong className="text-foreground">Scalability:</strong> Both Cloud Functions and Cloud Run scale automatically. For the BERT API, configure the minimum number of instances on Cloud Run to handle baseline traffic and avoid cold starts.</li>
                <li><strong className="text-foreground">Cost Control:</strong> Set budgets and alerts in Google Cloud. For the BERT API on Cloud Run, set the maximum number of instances to prevent unexpected costs during traffic spikes.</li>
                 <li><strong className="text-foreground">Mixed Language Support:</strong> Ensure your BERT model (like `bert-base-multilingual-cased`) is trained or fine-tuned on a corpus that includes both Bangla and English to handle mixed-language text effectively.</li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
