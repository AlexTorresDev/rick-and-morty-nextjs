export const fetcher = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url}`);
  }

  const data = await response.json();

  return data;
};