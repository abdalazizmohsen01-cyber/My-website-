export type EventName = 'estimate_requested' | 'service_viewed' | 'deposit_started' | 'checkout_completed'
export type TrackingEvent = { name: EventName; at: string; details?: Record<string, unknown> }

/** Central event hook: console output plus optional in-app debug listener. */
export function trackEvent(name: EventName, details?: Record<string, unknown>) {
  const event: TrackingEvent = { name, at: new Date().toISOString(), details }
  console.info('[conversion]', event)
  window.dispatchEvent(new CustomEvent<TrackingEvent>('roofing:track', { detail: event }))
  return event
}