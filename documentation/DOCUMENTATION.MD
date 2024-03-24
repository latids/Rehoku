# Documentation

* Missing/New hooks will be updated soon.

- [useDebounce](#usedebounce)
- [useFetch](#usefetch)
- [useKeyPress](#usekeypress)
- [useLocalStorage](#uselocalstorage)
- [usePrevious](#useprevious)
- [useToggle](#usetoggle)
- [useWindowResize](#usewindowresize)
- [useIsIdle](#useIsIdle)
- [useThrottle](#usethrottle)
- [useTimeout](#usetimeout)
- [useIsDarkMode](#useisdarkmode)
- [useConsole](#useconsole)
- [useHover](#usehover)
- [useValidation](#usevalidation)
- [useQueue](#usequeue)
- [useCache](#usecache)
- [useArray](#usearray)
- [useCookie](#usecookie)
- [useDeepCopy](#usedeepcopy)
- [useDidMount](#usedidmount)
- [useFocus](#usefocus)
- [useFullscreen](#usefullscreen)
- [usePrint](#useprint)
- [useMediaQuery](#usemediaquery)
- [useScrollLock](#usescrolllock)
- [useMetaTag](#usemetatag)

## `useDebounce`

- The `useDebounce` hook debounces a value with a specified delay, typically used for optimization by preventing unnecessary api requests and renders.

```
const Component = () => {
  const [inputValue, setInputValue] = useState("");
  const debouncedValue = useDebounce(inputValue, 500);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder=""
      />
      <p>Debounced Value: {debouncedValue}</p>
    </div>
  );
};
```

---

## `useFetch`

- The `useFetch` hook fetches data from a specified URL using ES6 fetch syntax. While suitable for simple data fetching, for larger projects, axios and other alternatives would be a better fit.

```
const Component = () => {
  const { data, loading, error } = useFetch("write your api url here");
    if (loading) {
    return <div>Loading...</div>;
    }
    if (error) {
    return <div>Error: {error.message}</div>;
    }
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
```

---

## `useKeyPress`

- The `useKeyPress` hook detects when a specific key is pressed, useful for creating keyboard shortcuts or handling specific key actions.

```
const Component = () => {

  const enterKeyPressed = useKeyPress("Enter");
  const escapeKeyPressed = useKeyPress("Escape");

  return (
    <div>
      <p>Press Enter key: {enterKeyPressed ? "Pressed" : "Not pressed"}</p>
      <p>Press Escape key: {escapeKeyPressed ? "Pressed" : "Not pressed"}</p>
    </div>
  );
};
```

---

## `useLocalStorage`

- The `useLocalStorage` hook provides a simple way to synchronize state with the browser's localStorage, first parameter is "key" and the second parameter is "value".

```
const Component = () => {
  const [name, setName] = useLocalStorage("name", "John");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>Hello, {name}</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
    </div>
  );
};
```

---

## `usePrevious`

- The `usePrevious` hook returns the previous value of a state or prop.

```
const Component = () => {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Previous Count: {previousCount}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
```

---

## `useToggle`

- The `useToggle` hook provides a simple way to toggle between two states.

```
const Component = () => {
  const [isToggled, toggle] = useToggle(false);

  return (
    <div>
      <p>Toggle State: {isToggled ? "On" : "Off"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};
```

---

## `useWindowResize`

- The `useWindowResize` hook provides a way to track the dimensions of the browser window, useful for creating or handling real-time layout changes based on the window dimensions.

```
const Component = () => {
  const windowSize = useWindowResize();

  return (
    <div>
      <p>Window Width: {windowSize.width}</p>
      <p>Window Height: {windowSize.height}</p>
    </div>
  );
};
```

---

## `useThrottle`

- The `useThrottle` hook throttles the execution of a function, ensuring it's called at most once within a specified time interval.

```
const Component = () => {
  const [count, setCount] = useState(0);

  const throttleIncrement = useThrottle(() => {
    setCount((prevCount) => prevCount + 1);
  }, 1000);

  return (
    <div>
      <h2>Throttle Example</h2>
      <p>Count: {count}</p>
      <button onClick={throttleIncrement}>Increment Count</button>
    </div>
  );
};
```

---

## `useIsIdle`

- The `useIsIdle` hook checks if the user is idle after a specified duration, typically used for implementing idle state-based functionalities such as showing a notification or logging out the user.

```
const Component = () => {
  const isIdle = useIsIdle() // default 150 seconds

  return (
    <div>
      <p>{isIdle ? "User is idle." : "User is active."}</p>
    </div>
  );
};

export default Component;
```

---

# `useTimeout`

- The `useTimeout` hook executes a function after a specified delay, similar to setTimeout but integrated with React's lifecycle.

```
const Component = () => {
  const callback = () => {
    console.log("callback executed");
  };

  useTimeout(callback, 2000, 3);

  return (
    <div>
      <p>The callback will be executed after 2 seconds for 3 times.</p>
    </div>
  );
};

```

---

# `useIsDarkMode`

- The `useIsDarkMode` hook checks if the user prefers dark mode and applies corresponding styles to the body tag accordingly. By default, it changes the background color and text color. If you want to customize these colors, you can use `useToggle` to create a theme changer button as your liking.

```
const Component = () => {
  const [isDarkMode, toggleDarkMode] = useIsDarkMode();

  return (
    <div>
      <p>Dark Mode: {isDarkMode ? "On" : "Off"}</p>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
      </button>
    </div>
  );
};
```

---

# `useConsole`

- The `useConsole` hook consoles specified data every time it changes. The console type is "log" by default, but you can specify "warn" or "error" for different console outputs.

```
const Component = () => {
  const [inputValue, setInputValue] = useState("");
  useConsole(inputValue, "warn");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder=""
      />
    </div>
  );
};
```

---

# `...`

- ...

```
