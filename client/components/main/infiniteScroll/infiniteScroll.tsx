import { useEffect, useRef, useState } from 'react';
import Item from './Item';
import Loader from './Load';
import styles from './infinite.module.css';

const InfiniteScroll = () => {
  const target = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [itemLists, setItemLists] = useState([1]);

  const getMoreItem = async () => {
    setIsLoaded(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    setItemLists((itemLists) => itemLists.concat(Items));
    setIsLoaded(false);
  };

  const onIntersect: IntersectionObserverCallback = async (
    [entry]: IntersectionObserverEntry[],
    observer: {
      unobserve: (arg0: Element) => void;
      observe: (arg0: Element) => void;
    },
  ) => {
    if (entry.isIntersecting && !isLoaded) {
      observer.unobserve(entry.target);
      await getMoreItem();
      observer.observe(entry.target);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target) {
      observer = new IntersectionObserver(onIntersect, {
        threshold: 1,
      });
      observer.observe(target.current!);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  return (
    <>
      {/* <GlobalStyle /> */}
      <div className={styles.AppWrap}>
        {itemLists.map((v, i) => {
          return <Item number={i + 1} key={i} />;
        })}
        <div ref={target} className={styles.TargetElement}>
          {isLoaded && <Loader />}
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
