import { useRef, useEffect } from 'react';

function AccessingElement() {
  const elementRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    const divElement = elementRef.current;
    console.log(divElement); // logs <div>I'm an element</div>
  }, []);

  return (
    <div ref={elementRef}>
      I'm an element
    </div>
  );
}

export default AccessingElement