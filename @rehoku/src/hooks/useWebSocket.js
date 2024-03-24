import { useState, useEffect, useRef } from "react";

function useWebSocket(url) {
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const socketRef = useRef(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    socketRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      setMessage(event.data);
    };

    ws.onclose = () => {
      setIsConnected(false);
    };

    return () => {
      ws.close();
    };
  }, [url]);

  const sendWebSocketMessage = (message) => {
    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(message);
    } else {
      console.error("An Error Occurred While Connecting to WebSocket.");
    }
  };

  return { socket, message, isConnected, sendWebSocketMessage };
}

export default useWebSocket;
