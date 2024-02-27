import e from'react';function t(t,n){const[r,o]=e.useState(t);return e.useEffect((()=>{let e=setTimeout((()=>{o(t)}),n);return()=>{clearTimeout(e)}}),[t,n]),r}function n(t){const[n,r]=e.useState(null),[o,u]=e.useState(!0),[s,c]=e.useState(null);return e.useEffect((()=>((async()=>{try{u(!0);const e=await fetch(t);if(!e.ok)throw new Error('Network response was not ok');const n=await e.json();r(n)}catch(e){c(e)}finally{u(!1)}})(),()=>{})),[t]),{data:n,loading:o,error:s}}function r(t){const[n,r]=e.useState(!1),o=e.useCallback((e=>{e.key===t&&r(!0)}),[t]),u=e.useCallback((e=>{e.key===t&&r(!1)}),[t]);return e.useEffect((()=>(window.addEventListener('keydown',o),window.addEventListener('keyup',u),()=>{window.removeEventListener('keydown',o),window.removeEventListener('keyup',u)})),[o,u]),n}function o(t,n){const[r,o]=e.useState((()=>{try{const e=window.localStorage.getItem(t);return e?JSON.parse(e):n}catch(e){return console.error('Error retrieving data from localStorage:',e),n}}));return e.useEffect((()=>{try{window.localStorage.setItem(t,JSON.stringify(r))}catch(e){console.error('Error storing data in localStorage:',e)}}),[t,r]),[r,o]}function u(t){const n=e.useRef(t),r=e.useRef();return n.current!==t&&(r.current=n.current,n.current=t),r.current}function s(t=!1){const[n,r]=e.useState(t);return[n,()=>{r((e=>!e))}]}function c(){const[t,n]=e.useState({width:window.innerWidth,height:window.innerHeight});return e.useEffect((()=>{const e=()=>{n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener('resize',e),()=>{window.removeEventListener('resize',e)}}),[]),t}function i(t=15e4){const[n,r]=e.useState(!1);return e.useEffect((()=>{let e;const n=()=>{clearTimeout(e),e=setTimeout((()=>r(!0)),t)},o=()=>{r(!1),n()};return window.addEventListener('mousemove',o),window.addEventListener('keydown',o),n(),()=>{window.removeEventListener('mousemove',o),window.removeEventListener('keydown',o),clearTimeout(e)}}),[t]),n}function a(t,n){const r=e.useRef(null),o=e.useRef(0);return(...e)=>{const u=Date.now(),s=u-o.current;r.current||(s>=n?(t(...e),o.current=u):r.current=setTimeout((()=>{t(...e),o.current=Date.now(),r.current=null}),n-s))}}function f(t,n=1e3,r=0){const o=e.useRef();return e.useEffect((()=>{o.current=t}),[t]),e.useEffect((()=>{const e=((e,t,n)=>'function'!=typeof e?(console.error('useTimeout: Callback must be a function.'),!1):'number'!=typeof t||t<0?(console.error('useTimeout: Delay must be a positive number.'),!1):!('number'!=typeof n||n<0)||(console.error('useTimeout: Render count must be a positive number, by default its 0.'),!1))(t,n,r);if(e&&r>0){const e=setTimeout((()=>{o.current()}),n);return()=>clearTimeout(e)}}),[t,n,r]),e.useEffect((()=>{r++})),r}function w(){const[t,n]=e.useState(!1);e.useEffect((()=>{const e=window.matchMedia('(prefers-color-scheme: dark)').matches;n(e)}),[]);e.useEffect((()=>{var e;e=t,document.body.style.backgroundColor=e?'#1a1a1a':'#FEFFEC',document.body.style.color=e?'#ffffff':'#000000'}),[t]);return[t,()=>{n((e=>!e))}]}function d(t,n='log'){const r=e.useRef(t);e.useEffect((()=>{if(r.current!==t){switch(n){case'error':console.error(t);break;case'warn':console.warn(t);break;default:console.log(t)}r.current=t}}),[t,n])}export{d as useConsole,t as useDebounce,n as useFetch,w as useIsDarkMode,i as useIsIdle,r as useKeyPress,o as useLocalStorage,u as usePrevious,a as useThrottle,f as useTimeout,s as useToggle,c as useWindowResize};
