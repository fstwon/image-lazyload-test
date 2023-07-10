// import { useCallback, useEffect, useRef } from "react";


// export const useIntersectionObserver = ({callback, options = IOptions}) => {
//   const io = useRef(new IntersectionObserver(callback, options));
  
//   const startObserve = useCallback(({element}) => {
//     io.current.observe(element);
//   }, [io]);

//   const stopObserve = useCallback(({element}) => {
//     io.current.unobserve(element);
//   }, [io]);

//   const disconnectIo = useCallback(() => {
//     io.current.disconnect();
//   }, [io]);

//   useEffect(() => {
//     return () => {
//       disconnectIo();
//     }
//   }, [disconnectIo]);

//   return {
//     io: io.current,
//     startObserve,
//     stopObserve,
//     removeIo: disconnectIo,
//   }
// }