import { useState, useEffect } from "react";

function useFullScreen() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const enterFullScreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      /* Safari */ document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      /* IE11 */ document.documentElement.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */ document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */ document.msExitFullscreen();
    }
  };

  const toggleFullScreen = () => {
    if (isFullScreen) {
      exitFullScreen();
    } else {
      enterFullScreen();
    }
  };

  useEffect(() => {
    const fullScreenChangeHandler = () => {
      setIsFullScreen(
        !!document.fullscreenElement ||
          !!document.webkitFullscreenElement ||
          !!document.msFullscreenElement
      );
    };

    document.addEventListener("fullscreenchange", fullScreenChangeHandler);
    document.addEventListener(
      "webkitfullscreenchange",
      fullScreenChangeHandler
    );
    document.addEventListener("msfullscreenchange", fullScreenChangeHandler);

    return () => {
      document.removeEventListener("fullscreenchange", fullScreenChangeHandler);
      document.removeEventListener(
        "webkitfullscreenchange",
        fullScreenChangeHandler
      );
      document.removeEventListener(
        "msfullscreenchange",
        fullScreenChangeHandler
      );
    };
  }, []);

  return {
    isFullScreen,
    toggleFullScreen,
  };
}

export default useFullScreen;
