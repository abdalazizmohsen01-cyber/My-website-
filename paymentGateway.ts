/**
 * Safe demo adapter. This intentionally does not collect card numbers or
 * claim to charge a card. Implement real payment operations on a trusted server.
 */
export type DemoPayment = { reference: string; status: 'simulated'; amount: number; method: string }
export async function createDemoPayment(amount: number, method: string): Promise<DemoPayment> {
  await new Promise(resolve => setTimeout(resolve, 450))
  return { reference: `DEMO-${Date.now().toString(36).toUpperCase()}`, status: 'simulated', amount, method }
}
export async function createDemoInvoice(amount: number) {
  await new Promise(resolve => setTimeout(resolve, 250))
  return { id: `INV-${Math.floor(10000 + Math.random() * 89999)}`, amount, status: 'draft' as const }
}