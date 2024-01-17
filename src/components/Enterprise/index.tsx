import './styles.scss';

import { MouseEvent, useRef, useState } from 'react';

import arrow1 from '../../assets/images/arrow1.png';
import enterpriseImage1 from '../../assets/images/enterpriseImage1.png';
import enterpriseImage2 from '../../assets/images/enterpriseImage2.png';
import enterpriseImage3 from '../../assets/images/enterpriseImage3.png';
import enterpriseImage4 from '../../assets/images/enterpriseImage4.png';
import enterpriseImage5 from '../../assets/images/enterpriseImage5.png';
import enterpriseImage6 from '../../assets/images/enterpriseImage6.png';
import yellowLine from '../../assets/images/yellow line.png'
import yellowFrame from '../../assets/images/yellowFrame.png';

export function Enterprise() {
    const [enterPriseImage, setEnterPriseImage] = useState(enterpriseImage1);
    const [scrollValue, setScrollValue] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const containerRef:null | any = useRef(null);

    function handleMouseDown(e:MouseEvent) {
        setIsDragging(true);
        setStartX(e.clientX);
    }

    function handleMouseUp() {
        setIsDragging(false);
    }

    function handleMouseMove(e:MouseEvent) {
        if(isDragging) {
            const deltaX = e.clientX - startX;
            containerRef.current.scrollLeft -= deltaX * 10;
            setStartX(e.clientX);
        }
    }

    function handleInputChange (e:any) {
        const value = parseInt(e.target.value, 10);
        setScrollValue(value);
    };

    return (
        <div className='enterprise' id='enterprise'>
            <div className='enterpriseSubtitles'>
                <h2>O ENPREENDIMENTO</h2>
                <img className='arrowSubtitle' src={arrow1} alt="flecha de subtitulo" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra viverra nisl, id nullam
                    et morbi. Ornare ut est faucibus nec ut curabitur sagittis. Dui risus amet, sit morbi aliquet
                    . In consectetur hendrerit ut lobortis nunc enim fusce morbi sagittis. Bibendum nulla cursus
                    urna habitant integer in orci, amet. Elementum habitasse sem amet sit mi est. Aenean dui,
                    odio malesuada ullamcorper est sed. Aliquet lacus, platea nibh ultricies turpis diam leo
                    duis. Amet massa, sit rhoncus leo laoreet habitant. Aliquam nullam risus duis curabitur.
                </p>
                <div 
                    ref={containerRef}
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                    className='imgContainer'
                >
                    <img style={{ transform: `translateX(-${scrollValue}%)` }} onClick={() => setEnterPriseImage(enterPriseImage === enterpriseImage2 ? enterpriseImage1 : enterpriseImage2)} src={enterPriseImage === enterpriseImage2 ? enterpriseImage6 : enterpriseImage3} alt="segunda imagem do emprendedor" />
                    <img style={{ transform: `translateX(-${scrollValue}%)` }} src={enterpriseImage4} alt="terceira imagem do emprendedor" />
                    <img style={{ transform: `translateX(-${scrollValue}%)` }} src={enterpriseImage5} alt="quinta imagem do emprendedor" />
                    <img style={{ transform: `translateX(-${scrollValue}%)` }} src={enterpriseImage6} alt="quinta imagem do emprendedor" />
                    <img style={{ transform: `translateX(-${scrollValue}%)` }} src={enterpriseImage4} alt="terceira imagem do emprendedor" />
                    <img style={{ transform: `translateX(-${scrollValue}%)` }} src={enterpriseImage5} alt="quinta imagem do emprendedor" />
                </div>
                <div className='dragDiv'>
                    <div className='rangeBox'>
                       <input min="0"
                            max="350"
                            value={scrollValue}
                            onChange={handleInputChange} type="range" />
                    </div>
                    <span>(Click e arraste)</span>
                </div>
            </div>
            <div>
                <img src={enterPriseImage} alt="primeira imagem do emprendedor" />
            </div>

            <div className='diamondArrow'>
                <div className='diamondImage'>
                    <img src={yellowFrame} alt="frame amarelo" />
                </div>
                <img src={yellowLine} alt="linha amarela" />
            </div>
        </div>
    )
}