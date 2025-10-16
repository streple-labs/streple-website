export function estimateReadingMinutes(text: string): number {
  if (!text) return 0;
  const words = text.trim().split(/\s+/).filter(Boolean);
  const wordsPerMinute = 200;
  const minutes = words.length / wordsPerMinute;
  return Math.max(1, Math.ceil(minutes));
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
