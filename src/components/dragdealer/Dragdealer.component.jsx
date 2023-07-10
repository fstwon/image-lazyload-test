import "./Dragdealer.styles.scss";
import { useCallback, useEffect, useRef } from "react";
import Dragdealer from "dragdealer";

export const DragdealerContainer = ({className, children}) => {
  const dragDealer = useRef();
  const dragDealerRef = useRef();
  const handleRef = useRef();
  
  const handleDragDealer = useCallback(() => {
    if(dragDealer.current && dragDealerRef.current && handleRef.current) {
      const dragDealerWidth = dragDealerRef.current.getBoundingClientRect().width;
      const handleWidth = handleRef.current.getBoundingClientRect().width;

      if(!dragDealer.current.disabled && dragDealerWidth >= handleWidth) {
        dragDealer.current.disable();
      } else if(dragDealer.current.disabled && dragDealerWidth < handleWidth) {
        dragDealer.current.enable();
      };
    };
  }, []);

  useEffect(() => {
    if(dragDealerRef.current != null) {
      dragDealer.current = new Dragdealer(dragDealerRef.current, {
				speed: 0.3,
				loose: true,
      });
      handleDragDealer();
    };
  }, [handleDragDealer]);

  return (
    <div className={`dragdealer-container ${className}`} ref={dragDealerRef} >
      <div className="handle" ref={handleRef} >
        {children}
      </div>
    </div>
  )
}