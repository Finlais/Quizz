export const getRandomInt = (max: number) => {
  return Math.floor(Math.random() * max);
};

export const get4RandomInt: (max: number) => number[] = (max: number) => {
  const res = [];
  for (let i = 0; i <= 3; i++) {
    res.push(Math.floor(Math.random() * max));
  }
  return res;
};

export const get4KeysValues = (datas: { [key: string]: string }, randoms: number[] ) => {
  const res: string[][] = []
  randoms.map((index: number)=>{
    const key = Object.keys(datas)[index]
    const array: string[] = []
    array.push(key)
    array.push(datas[key])
    res.push(array)
  })
  return res;
}
