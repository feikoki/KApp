export const storage = {
  get(key: string) {
    const value = localStorage[key];
    if (value === undefined)
      return null;
    else
      return JSON.parse(value);
  },

  set(key: string, value: any) {
    localStorage[key] = JSON.stringify(value);
  },
};
