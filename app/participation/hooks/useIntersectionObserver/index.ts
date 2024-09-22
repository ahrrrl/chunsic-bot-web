import { useCallback, useRef } from 'react';

export function useIntersectionObserver(callback: () => void) {
  const observer = useRef<IntersectionObserver | null>(null);
  const ref = useCallback(
    (node: Element | null) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) callback();
      });
      if (node) observer.current.observe(node);
    },
    [callback]
  );
  return ref;
}
