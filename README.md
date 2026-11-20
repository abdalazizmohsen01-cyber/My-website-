# Roofing Growth Template

A responsive, white-label roofing company website and lifecycle demo built with Vite, React, TypeScript and Tailwind CSS.

## Quick start
```bash
npm install
npm run dev
```
Production build: `npm run build`

## White-label setup
Edit **`src/config/siteConfig.ts`** to change the company name, logo initials, colors, phone, license, service areas, hours, services and prices. The layout is configuration-driven; no structural edits are needed for normal rebranding.

## Demo behavior
- Estimate requests are stored in React state and `localStorage` for this browser session/device.
- Checkout, wallet buttons, BNPL disclosures, invoice creation, saved-card and payment-link actions are simulated. No real payments are processed and no card data is transmitted or persisted.
- Replace `src/lib/paymentGateway.ts` with server-side Stripe Checkout/PaymentIntents + SetupIntents (or your provider). Never collect or process raw card details in a browser-only app. Use provider-hosted Elements/Checkout, server-side webhooks, idempotency, and PCI-compliant handling.
- Replace the demo `trackEvent` console logger with your analytics provider as desired.
- The testimonials and certification references are illustrative demo content. Replace them with verifiable company credentials and real customer-approved reviews before publishing.
- The lead store is local demo state, not a production database. Connect a protected API/CRM and add consent, validation, spam controls, access controls and retention policies before launch.

## Suggested production architecture
Keep the Vite frontend, add a server/API (or Next.js server actions), persist leads/invoices in a database, and integrate a payment provider on the server. Deposit and final-balance charges should be separate, auditable transactions with customer consent and clear refund/cancellation terms.
