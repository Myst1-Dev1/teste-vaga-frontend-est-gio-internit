import './styles.scss';

import yellowFrame from '../../assets/images/yellowFrame.png';
import carouselFrame from '../../assets/images/carouselFrame.png'

export function Banner() {
    return (
        <div className='banner' id='home'>
            <div className='container'>
                <div className='bannerSubtitles'>
                    <h2>APOSTE NO <br /> <span>CONFORTO</span> SEM <br /> PERDER A <br /> <span>ELEGÂNCIA</span></h2>
                    <button>
                        MARQUE UMA VISITA
                        <img src={yellowFrame} alt="frame amarelo" /> 
                    </button>
                </div>
                <div className='imgContainer'>
                    <img src={carouselFrame} alt="frame do carousel" />
                </div>
            </div>
        </div>
    )
}