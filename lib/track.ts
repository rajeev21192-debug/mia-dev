export function pushDL(e: Record<string, any>) {
  if (typeof window !== "undefined") {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push(e);
  }
}
