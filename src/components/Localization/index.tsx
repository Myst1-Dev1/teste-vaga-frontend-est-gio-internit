import './styles.scss';

import arrow1 from '../../assets/images/arrow1.png';
import locationIconFrame from '../../assets/images/locationIconFrame.png'
import grayFrame from '../../assets/images/grayFrame.png';
import marketIcon from '../../assets/images/marketIcon.png'
import petshop from '../../assets/images/petshopIcon.png';
import bikeRack from '../../assets/images/bikeRackIcon.png'
import park from '../../assets/images/parkIcon.png';
import bank from '../../assets/images/bankIcon.png'
import metroStation from '../../assets/images/metroStationIcon.png';
import map from '../../assets/images/map.png';

export function Localization() {


    const locationIconsArray = [
        {
            id:1,
            icon:marketIcon,
            name:'MERCADO',
            frame:locationIconFrame
        },
        {
            id:2,
            icon:petshop,
            name:'PETSHOP',
            frame:grayFrame
        },
        {
            id:3,
            icon:bikeRack,
            name:'BICICLETÁRIO',
            frame:grayFrame
        },
        {
            id:4,
            icon:park,
            name:'PARQUE',
            frame:grayFrame
        },
        {
            id:5,
            icon:bank,
            name:'BANCO',
            frame:grayFrame
        },
        {
            id:6,
            icon:metroStation,
            name:'estação de metrô',
            frame:grayFrame
        },
    ]

    return (
        <div className='localization'>
            <div className='container'>
                <div className='localizationSubtitles'>
                    <h2>LOCALIZAÇÃO</h2>
                    <img src={arrow1} alt="flecha de subtitulo" />
                    <p>
                        Rua Itaperuna, 100 Santa Rosa <br /> - Pé Pequeno
                        <br /> Niterói - RJ, 24240-070
                    </p>
                </div>
                <div className='locationItems'>
                    {locationIconsArray.map(item => (
                        <div key={item.id} className='locationBox'>
                            <div className='iconBox'>
                                <img className='itemIcon' src={item.icon} alt="icone do item" />
                                <img className='locationIconFrame' src={item.frame} alt="frame do icone de localização" />
                            </div>
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='map'>
                <img src={map} alt="mapa ao redor da empresa" />
            </div>
        </div>
    )
}