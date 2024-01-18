import './styles.scss';

import yellowFrame from '../../assets/images/yellowFrame.png';
import carouselFrame from '../../assets/images/carouselFrame.png'
import { useState } from 'react';

export function Banner() {
    const [carouselItemOne, setCarouselItemOne] = useState(false);
    const [carouselItemTwo, setCarouselItemTwo] = useState(false);
    const [carouselItemThree, setCarouselItemThree] = useState(false);

    function handleCarouselChange(carouselItem:number) {
        setCarouselItemOne(carouselItem === 1)
        setCarouselItemTwo(carouselItem === 2)
        setCarouselItemThree(carouselItem === 3)
    }

    return (
        <div className='slidershow'>
            <div className={`banner ${carouselItemOne ? 'active' : ''}`} id='home'>
                <div className='container'>
                    <div className='bannerSubtitles'>
                        <h2>APOSTE NO <br /> <span>CONFORTO</span> SEM <br /> PERDER A <br /> <span>ELEGÂNCIA</span></h2>
                        <button>
                            <a href='#contact'>MARQUE UMA VISITA</a>
                            <img src={yellowFrame} alt="frame amarelo" /> 
                        </button>
                    </div>
                    <div className='imgContainer'>
                        <img src={carouselFrame} alt="frame do carousel" />
                    </div>
                </div>
            </div>
            <div className={`banner2 ${carouselItemTwo ? 'active2' : ''}`}  id='home'>
                <div className='container'>
                    <div className='bannerSubtitles'>
                        <h2><span>LAZER</span> À UM PASSO</h2>
                        <button>
                        <a href='#contact'>MARQUE UMA VISITA</a>
                            <img src={yellowFrame} alt="frame amarelo" /> 
                        </button>
                    </div>
                    <div className='imgContainer'>
                        <img src={carouselFrame} alt="frame do carousel" />
                    </div>
                </div>
            </div>
            <div className={`banner3 ${carouselItemThree ? 'active3' : ''}`}  id='home'>
                <div className='container'>
                    <div className='bannerSubtitles'>
                        <h2>CRIE MEMORIAS <br /> COM <span>AMIGOS</span> <br /> E <span>FAMILIA</span></h2>
                        <button>
                        <a href='#contact'>MARQUE UMA VISITA</a>
                            <img src={yellowFrame} alt="frame amarelo" /> 
                        </button>
                    </div>
                    <div className='imgContainer'>
                        <img src={carouselFrame} alt="frame do carousel" />
                    </div>
                </div>
            </div>

            <div className='carouselButtons'>
                <div className={`button ${carouselItemTwo || carouselItemThree ? '' : 'activeButton'}`} onClick={() => handleCarouselChange(1)}></div>
                <div className={`button ${carouselItemTwo ? 'activeButton' : ''}`} onClick={() => handleCarouselChange(2)}></div>
                <div className={`button ${carouselItemThree ? 'activeButton' : ''}`} onClick={() => handleCarouselChange(3)}></div>
            </div>
        </div>
    )
}