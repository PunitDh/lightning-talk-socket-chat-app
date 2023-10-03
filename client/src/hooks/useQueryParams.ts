export default function useQueryParams(key: string): string | null {
  const location = new URL(window.location.href);
  const searchParams = new URLSearchParams(location.search);
  return searchParams.get(key);
}
