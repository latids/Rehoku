import { useState } from "react";

function useQueue(initialQueue = []) {
  const [queue, setQueue] = useState(initialQueue);

  const enqueue = (item) => {
    setQueue((prevQueue) => [...prevQueue, item]);
  };

  const dequeue = () => {
    if (queue.length === 0) {
      throw new Error("Queue is empty");
    }
    const [firstItem, ...rest] = queue;
    setQueue(rest);
    return firstItem;
  };

  const peek = () => {
    if (queue.length === 0) {
      throw new Error("Queue is empty");
    }
    return queue[0];
  };

  const size = () => {
    return queue.length;
  };

  const clear = () => {
    setQueue([]);
  };

  return { enqueue, dequeue, peek, size, clear, queue };
}

export default useQueue;
