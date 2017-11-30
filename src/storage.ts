const defaults = {
  user: {},
  connected: [],
  groups: [],
};

export const storage = {
  get(key: string) {
    const value = localStorage[key];
    if (value === null || value === undefined)
      return defaults[key] || null;
    else
      return JSON.parse(value);
  },

  set(key: string, value: any) {
    localStorage[key] = JSON.stringify(value);
  },
};
