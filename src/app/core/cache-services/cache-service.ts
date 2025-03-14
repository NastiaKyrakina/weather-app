import { of, tap } from 'rxjs';

export const DEFAULT_CACHE_EXPIRATION = 60 * 1000;
const cacheMap = new Map();
export function CacheResult(timeOfExpiration: number = DEFAULT_CACHE_EXPIRATION): (target: Object, propertyKey: (string | symbol), descriptor: PropertyDescriptor) => void {
  return function (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
  ) {

    const originalFn = descriptor.value;
    descriptor.value = function (...args: any[]){
      const cacheKey = `${propertyKey.toString()}:${JSON.stringify(args)}`;
      if (localStorage.getItem(cacheKey)) {
        const result = JSON.parse(localStorage.getItem(cacheKey) as string);
        if (result.timeOfExpiration >= new Date().getTime()) {
          return of(result.data);
        } else {
          cacheMap.delete(cacheKey);
        }
      }
      return originalFn.apply(this, args)
        .pipe(
          tap(res => {
            localStorage.setItem(cacheKey, JSON.stringify({
              timeOfExpiration: new Date().getTime() + timeOfExpiration,
              data: res
            }));
          }),
        );
    }
  }
}
