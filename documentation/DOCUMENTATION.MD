# Documentation

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

# `useHover`

- The `useHover` hook tracks whether an element is being hovered over by the mouse pointer.

```
const Component = () => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div>
      <div ref={hoverRef}>
        Hover here
      </div>
      <p>{isHovered ? "Hovered" : "Not hovered"}</p>
    </div>
  );
};
```

---

# `useValidation`

- The useValidation hook provides functionality to validate email and password. It returns an error message if the input data does not meet the specified criteria.

```
const Component = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, validate } = useValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate(email, password)) {
      console.log("Validation passed");
    } else {
      console.error("Validation failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};
```

---

# `useQueue`

- The useQueue hook enables the creation and management of a queue data structure. Operating on a first-in, first-out (FIFO) basis, provides functions to add, remove, and inspect elements within.

```
const Component = () => {
  const { enqueue, dequeue, peek, size, clear, queue } = useQueue();

  enqueue("Apple");
  enqueue("Banana");
  enqueue("Orange");

  const removedItem = dequeue();

  return (
    <div>
      <p>Current Queue: {JSON.stringify(queue)}</p>
      <p>Peek: {peek()}</p>
      <p>Size: {size()}</p>
      <p>Removed Item: {removedItem}</p>
      <button onClick={() => clear()}>Clear Queue</button>
    </div>
  );
};
```

---

# `useCache`

- The useCache hook provides a simple caching mechanism for fetched data. It fetches data from a remote source and stores it in memory, allowing subsequent requests for the same data to be served from the cache instead of making additional network requests.

```
const Component = () => {
const cachedTodos = useCache("todos", fetchTodos);

const clearCache = (key) => {
  delete cache[key];
};

const fetchTodos = async () => {
const response = await fetch("https://jsonplaceholder.typicode.com/todos");
if (!response.ok) throw new Error("Failed to fetch todos");
const data = await response.json();
return data;
};

return (
  <div>
    {cachedTodos ? (
      <div>
      <ul>
      {cachedTodos.map(todo => (
      <li key={todo.id}>
      {todo.title}
      </li>
      ))}
      </ul>
      <button onClick={() => clearCache("todos")}>Clear Cache</button>
      </div>
    ) : ( <p>Loading...</p> )}
  </div>
  );
};
```

---

# `useArray`

- The useArray hook provides functionality to manage an array, allowing operations such as adding, removing, updating, and sorting elements within.

```
const Component = () => {
const { array, addItem, removeItem, updateItem, clearArray, getItem, findItem, sortArray, swapItems, filterArray } = useArray([]);

addItem("Apple");
addItem("Banana");
addItem("Orange");

const removedItem = removeItem(1);
const updatedItem = updateItem(0, "Pear");

return (
  <div>
    <p>Current Array: {JSON.stringify(array)}</p>
    <p>Item at index 0: {getItem(0)}</p>
    <p>Find 'Orange': {findItem(item => item === 'Orange')}</p>
    <button onClick={() => clearArray()}>Clear Array</button>
  </div>
  );
};
```

---

# `useCookie`

- The useCookie hook provides functionality to manage a cookie value within a React application. It utilizes the browser's local storage to store and retrieve the cookie value.

```
function Component() {
const { cookie, updateCookie, deleteCookie } = useCookie("myCookie");

return (
  <div>
    <p>Current Cookie: {cookie}</p>
    <button onClick={() => updateCookie("newCookieValue")}>Update Cookie</button>
    <button onClick={() => deleteCookie()}>Delete Cookie</button>
  </div>
  );
}
```

---

# `useDeepCopy`

- The useDeepCopy hook provides functionality to create a deep copy of an object and manage its state within a React component. It utilizes JSON parsing to ensure that nested objects are also deeply copied.

```
function Component({ initialObject }) {
const { copiedObject, copyObject } = useDeepCopy(initialObject);

return (
  <div>
    <button onClick={() => copyObject()}>Copy Object</button>
    <pre>{JSON.stringify(copiedObject, null, 2)}</pre>
  </div>
  );
}
```

---

# `useDidMount`

- The useDidMount hook executes a callback function once when the component mounts. It is useful for performing initialization tasks or any actions that should only occur once when the component is mounted.

```
function Component() {
  useDidMount(() => {
    // This function will be called when the component mounts
    console.log("Component mounted!");
    document.title = "mounted";
  });
}
```

---

# `useFocus`

- The useFocus hook provides functionality to automatically focus an HTML element when a component mounts. It utilizes React's useRef and useEffect hooks to manage the focus behavior.

```
function Component() {
  const inputRef = useFocus();

  return (
    <div>
      <input ref={inputRef} type="text" /> //this will be focused on `Component` mounts/loads.
    </div>
  );
}
```

---

# `useFullScreen`

- The useFullScreen hook provides functionality to manage the full-screen mode of an element within a React component. It allows you to enter, exit, and toggle full-screen mode, and provides the current full-screen state.

```
function Component() {
  const { isFullScreen, toggleFullScreen } = useFullScreen();

  return (
    <div>
      <button onClick={toggleFullScreen}>
        {isFullScreen ? "Exit Full Screen" : "Enter Full Screen"}
      </button>
    </div>
  );
}
```

---

# `usePrint`

- The usePrint hook provides functionality to trigger the browser's print dialog when called. It utilizes React's useCallback hook to memoize the print handler function.

```
function Component() {
  const handlePrint = usePrint();

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
}
```

---

# `useMediaQuery`

- The useMediaQuery hook enables tracking of a CSS media query in a React component. It utilizes React's useState and useEffect hooks to manage the state of whether the media query matches the current viewport size.

```
function Component() {
  const isSmallScreen = useMediaQuery("(max-width: 768px)"); // Check if the screen width is smaller than 768px

  return (
    <div>
      {isSmallScreen ? <p>Small screen</p> : <p>Large screen</p>}
      {/* Render different content based on screen size */}
    </div>
  );
}
```

---

# `useScrollLock`

- The useScrollLock hook allows locking or unlocking scrolling behavior on the page based on a boolean value. It utilizes React's useEffect hook to add or remove event listeners for scroll events and manage the overflow property of the body element.

```
function Component() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Call hook to lock scrolling when the modal is open
  useScrollLock(isModalOpen);

  return (
    <div>
      <button onClick={toggleModal}>Open Modal</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={toggleModal}>
              &times;
            </span>
            <p>This is a modal. Scrolling is locked.</p>
          </div>
        </div>
      )}
    </div>
  );
}
```

---

# `useMetaTag`

- The useMetaTag hook allows dynamically updating the title, description, and keywords meta tags of the document's head based on provided values. It utilizes React's useEffect hook to update the meta tags whenever the provided values change.

```
function Component() {
  useMetaTag("PageTitle", "added Description", "keywords, react, hooks"); 
  // Set the title, description, and keywords for the page
}
```

---


