const dictionaries = {
  en: () => import("./messages/en.json").then((r) => r.default),
  ar: () => import("./messages/ar.json").then((r) => r.default),
};

export const getDictionary = (lang) => {
  return dictionaries[lang]();
};
