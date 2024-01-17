import './styles.scss';

import threeRooms from '../../assets/images/threeRooms.png';
import twoRooms from '../../assets/images/twoRooms.png';
import roof from '../../assets/images/roof.png';

import yellowFrame from '../../assets/images/yellowFrame.png';
import yellowLine from '../../assets/images/yellow line.png'
import plantsFrame from '../../assets/images/plantsFrame.png';
import { useEffect, useRef, useState } from 'react';

export function Plaints() {
    const [plaintImage, setPlaintImage] = useState(threeRooms);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [scale, setScale] = useState(1);

    const imgRef = useRef(null);

    function handleZoomIn() {
        setScale((scale) => scale + 0.1);
    }

    function handleZoomOut() {
        setScale((scale) => scale - 0.1);
    }

    useEffect(() => {
        const image:any = imgRef.current;
        let isDragging = false;
        let prevPosition = { x: 0, y: 0 };
    
        const handleMouseDown = (e:MouseEvent) => {
          isDragging = true;
          prevPosition = { x: e.clientX, y: e.clientY };
        };
    
        const handleMouseMove = (e:MouseEvent) => {
          if (!isDragging) return;
          const deltaX = e.clientX - prevPosition.x;
          const deltaY = e.clientY - prevPosition.y;
          prevPosition = { x: e.clientX, y: e.clientY };
          setPosition((position) => ({
            x: position.x + deltaX,
            y: position.y + deltaY,
          }));
        };
    
        const handleMouseUp = () => {
          isDragging = false;
        };
    
        image?.addEventListener("mousedown", handleMouseDown);
        image?.addEventListener("mousemove", handleMouseMove);
        image?.addEventListener("mouseup", handleMouseUp);
    
        return () => {
          image?.removeEventListener("mousedown", handleMouseDown);
          image?.removeEventListener("mousemove", handleMouseMove);
          image?.removeEventListener("mouseup", handleMouseUp);
        };
      }, [imgRef, scale]);

    return (
        <div className='plaints' id='plaints'>
            <div className='imgContainer'>
                <div className='zoomButtons'>
                    <button onClick={handleZoomIn}>+</button>
                    <button onClick={handleZoomOut}>-</button>
                </div>
                <div className='roomImage'>
                    <img 
                        ref={imgRef} 
                        src={plaintImage}
                        alt="imagem da planta de três quartos"
                        style={{transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`}}
                        draggable={false} 
                    />
                </div>
            </div>
            <div className='plaintsSubtitles'>
                <h2>PLANTAS</h2>
                <div className='lineBox'>
                    <div className='yellowLineImage'>
                        <img src={yellowLine} alt="flecha de subtitulo" />
                    </div>
                    <div className='yellowFrameImage'>
                        <img src={yellowFrame} alt="frame amarelo" />
                    </div>
                </div>

                <div className='roomsContainer'>
                    <div onClick={() => setPlaintImage(threeRooms)} className={`roomBox ${plaintImage === threeRooms ? 'active' : 'disabled'}`}>
                        <h3>3 QUARTOS</h3>
                    </div>
                    <div onClick={() => setPlaintImage(twoRooms)} className={`roomBox ${plaintImage === twoRooms ? 'active' : 'disabled'}`}>
                        <h3>2 QUARTOS</h3>
                    </div>
                    <div onClick={() => setPlaintImage(roof)} className={`roomBox ${plaintImage === roof ? 'active' : 'disabled'}`}>
                        <h3>COBERTURA</h3>
                    </div>
                </div>
            </div>
            <div className='plantsFrame'>
                <img src={plantsFrame} alt="frame das plantas" />
            </div>
        </div>
    )
}