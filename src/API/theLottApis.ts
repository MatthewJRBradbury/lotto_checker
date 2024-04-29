import { DrawDataRequest, DrawResults } from '@/types';

export const fetchDrawData = async (
  requestBody: DrawDataRequest
): Promise<DrawResults> => {
  try {
    const response = await fetch(
      'https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      }
    );
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      throw new Error(err.message);
    } else {
      throw new Error(String(err));
    }
  }
};
