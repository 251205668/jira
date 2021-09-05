import { useEffect, useState } from "react";

/**
 * 使用方式:
 *   1. const debounceValue = useDebounce(param,delay)
 *   2. ex: fetch(`url?+qs.stringify(debounceValue)`,{method: 'GET'}).then(response => {})
 * @param value 需要进行防抖的state
 * @param delay 延时
 * @returns
 */
export function useDebounceParam(value: any, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // debounceValue 每次在value变化，delay毫秒之后才会设置一个定时器
    const Timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // return 每次在useEffect执行完之后运行，这里是指每次都会清理上一次的Timer，直到value不再变化，也就是直到最后一个Timer
    return () => {
      clearTimeout(Timer);
    };
  }, [value, delay]);
  return debounceValue;
}
