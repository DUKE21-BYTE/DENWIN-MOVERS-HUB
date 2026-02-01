export function whatsappLink(phone: string, message: string) {
  const normalized = phone.replace(/\s+/g, "");
  const text = encodeURIComponent(message);
  // wa.me works best with international format, but we keep your stored number as-is.
  return `https://wa.me/${normalized}?text=${text}`;
}
