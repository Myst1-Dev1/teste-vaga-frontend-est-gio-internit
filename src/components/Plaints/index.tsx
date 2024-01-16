import './styles.scss';

import threeRooms from '../../assets/images/threeRooms.png';
import twoRooms from '../../assets/images/twoRooms.png';
import roof from '../../assets/images/roof.png';

import yellowFrame from '../../assets/images/yellowFrame.png';
import yellowLine from '../../assets/images/yellow line.png'
import plantsFrame from '../../assets/images/plantsFrame.png';
import searchIcon from '../../assets/images/searchIcon.png';
import { useState } from 'react';

export function Plaints() {
    const [plaintImage, setPlaintImage] = useState(threeRooms);

    return (
        <div className='plaints' id='plaints'>
            <div className='imgContainer'>
                <img src={plaintImage} alt="imagem da planta de três quartos" />
            </div>
            <div className='searchBox'>
                <img src={searchIcon} alt="icone para ampliar a imagem da planta" />
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