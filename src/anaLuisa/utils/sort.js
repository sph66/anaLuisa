export const lowToHigh = (a, b) => {
  return a.likes - b.likes;
};

export const highToLow = (a, b) => {
  return b.likes - a.likes;
};

export const earliest = (a, b) => {
  if (a.publishDate < b.publishDate) {
    return -1;
  }
  if (a.publishDate > b.publishDate) {
    return 1;
  }

  return 0;
};

export const latest = (a, b) => {
  if (a.publishDate > b.publishDate) {
    return -1;
  }
  if (a.publishDate < b.publishDate) {
    return 1;
  }

  return 0;
};
