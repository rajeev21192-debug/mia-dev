export function pushDL(e: Record<string, any>) {
  if (typeof window !== "undefined") {
    (window as any).dataLayer = (window as any).dataLayer || [];
    if (!("page_path" in e)) {
      try { e.page_path = window.location.pathname } catch {}
    }
    ;(window as any).dataLayer.push(e);
  }
}
