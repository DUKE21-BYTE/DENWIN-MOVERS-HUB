export function normalizeCounty(input: string) {
  return input.trim().toLowerCase();
}

export function formatKsh(n: number) {
  return `KSh ${n.toLocaleString("en-KE")}`;
}
