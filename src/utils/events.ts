import { LS, LSKeys } from '../ls';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (e: 'event', v: string, data?: Record<string, string>) => void;
  }
}

type Payload = {
  sum: number;
  ticker: string;
  smart: 'on' | 'off';
};

export const sendDataToGA = async (payload: Payload) => {
  try {
    const now = new Date();
    const date = `${now.getFullYear()}-${
      now.getMonth() + 1
    }-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

    await fetch(
      'https://script.google.com/macros/s/AKfycbzZRZfThLlcA2oORQM9TBu_LiPseC1gfQ7i7peTmaI3UI86hCXfJkAPDxIo8XbsjfLcog/exec',
      {
        redirect: 'follow',
        method: 'POST',
        body: JSON.stringify({ date, ...payload, vari: 'var3', id: LS.getItem(LSKeys.UserId, 0) }),
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      },
    );
  } catch (error) {
    console.error('Error!', error);
  }
};
