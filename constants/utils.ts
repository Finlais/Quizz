export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const get4RandomInt: (max: number) => number[] = (max: number) => {
  const res = [];
  for (let i = 0; i <= 4; i++) {
    res.push(Math.floor(Math.random() * max));
  }
  return res;
};

export const objectKeyValue = (obj: { [key: string]: any }) => {
  const res = []
  res.push(Object.keys(obj)[0])
  res.push(obj[res[0]])
  return res;
}
