import React, { useRef, useEffect, useState } from 'react';

const HorizontalScrollComponent = () => {
  const scrollContainerRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const handleMouseDown = (event) => {
      isDragging.current = true;
      startX.current = event.pageX - scrollContainer.offsetLeft;
      scrollLeft.current = scrollContainer.scrollLeft;
      setDragging(true);
    };

    const handleMouseLeaveOrUp = () => {
      isDragging.current = false;
      setDragging(false);
    };

    const handleMouseMove = (event) => {
      if (!isDragging.current) return;
      event.preventDefault();
      const x = event.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX.current) * 2; // Ajusta el factor de escala para suavizar el scroll
      scrollContainer.scrollLeft = scrollLeft.current - walk;
    };

    scrollContainer.addEventListener('mousedown', handleMouseDown);
    scrollContainer.addEventListener('mouseleave', handleMouseLeaveOrUp);
    scrollContainer.addEventListener('mouseup', handleMouseLeaveOrUp);
    scrollContainer.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeaveOrUp);
      scrollContainer.removeEventListener('mouseup', handleMouseLeaveOrUp);
      scrollContainer.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div
        ref={scrollContainerRef}
        className={`scroll-container ${dragging ? 'dragging' : ''}`}
        style={{
          display: 'flex',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          width: '300px',
          border: '1px solid black',
          marginTop: '10px',
          cursor: dragging ? 'grabbing' : 'grab'
        }}
      >
        <div style={{ flex: '0 0 auto', width: '200px', height: '100px', backgroundColor: 'lightcoral', margin: '5px' }}>Item 1</div>
        <div style={{ flex: '0 0 auto', width: '200px', height: '100px', backgroundColor: 'lightblue', margin: '5px' }}>Item 2</div>
        <div style={{ flex: '0 0 auto', width: '200px', height: '100px', backgroundColor: 'lightgreen', margin: '5px' }}>Item 3</div>
        <div style={{ flex: '0 0 auto', width: '200px', height: '100px', backgroundColor: 'lightyellow', margin: '5px' }}>Item 4</div>
      </div>
    </div>
  );
};

export default HorizontalScrollComponent;