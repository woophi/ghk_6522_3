export const enum LSKeys {
  ShowThx = 'ab_show_thx_ghk_6522_3',
  UserId = 'ab_UserId_ghk_6522_3',
  SelectedStockTicker = 'ab_SelectedStockTicker_ghk_6522_3',
}

export interface LSData {
  [LSKeys.ShowThx]: boolean | null;
  [LSKeys.UserId]: number | null;
  [LSKeys.SelectedStockTicker]: string | null;
}

const getItem = <K extends LSKeys>(key: K, defaultValue: LSData[K]): LSData[K] => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : defaultValue;
  } catch {
    return defaultValue;
  }
};
const setItem = <K extends LSKeys>(key: K, value: LSData[K]) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};
const deleteItem = <K extends LSKeys>(key: K) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const LS = {
  getItem,
  setItem,
  deleteItem,
};
