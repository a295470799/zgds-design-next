export const formatPrice = (price?: number | string, country = "eu") => {
  const newPrice = typeof price === "string" ? Number(price) : price;
  if (country === "us") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(newPrice ?? 0);
  } else if (country === "uk") {
    return new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(newPrice ?? 0);
  }
  return new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(newPrice ?? 0);
};

export function toBase64(str: string): string {
  if (typeof window === "undefined") {
    // Running on server
    const buffer = Buffer.from(str, "utf-8");
    return buffer.toString("base64");
  } else {
    // Running in browser
    return window.btoa(str);
  }
}
