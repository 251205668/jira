export const isFalsely = (value: any) => (value === 0 ? false : !value);

// 这里就是删除值为空的键
export function cleanObject(param: any) {
  const cloneParam = { ...param };
  Object.keys(cloneParam).forEach((key) => {
    const value = cloneParam[key];
    // value = 0 也认为是正常数据
    if (isFalsely(value)) {
      delete cloneParam[key];
    }
  });
  return cloneParam;
}
