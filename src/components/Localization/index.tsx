import './styles.scss';

import arrow1 from '../../assets/images/arrow1.png';
import locationIconFrame from '../../assets/images/locationIconFrame.png'
import grayFrame from '../../assets/images/grayFrame.png';
import marketIcon from '../../assets/images/marketIcon.png'
import petshop from '../../assets/images/petshopIcon.png';
import bikeRack from '../../assets/images/bikeRackIcon.png'
import park from '../../assets/images/parkIcon.png';
import bank from '../../assets/images/bankIcon.png'
import map from '../../assets/images/map.png';
import metroStation from '../../assets/images/metroStationIcon.png';
import { useState } from 'react';

export function Localization() {
    const [isShowMarket, setIsShowMarket] = useState(false);
    const [isShowPetshop, setIsShowPetshop] = useState(false);
    const [isShowBikeRack, setIsShowBikeRack] = useState(false);
    const [isShowPark, setIsShowPark] = useState(false);
    const [isShowBank, setIsShowBank] = useState(false);
    const [isShowMetroStation, setIsShowMetroStation] = useState(false);

    const locationIconsArray = [
        {
            id:1,
            icon:marketIcon,
            name:'MERCADO',
            frame:isShowMarket ? locationIconFrame : grayFrame
        },
        {
            id:2,
            icon:petshop,
            name:'PETSHOP',
            frame:isShowPetshop ? locationIconFrame : grayFrame
        },
        {
            id:3,
            icon:bikeRack,
            name:'BICICLETÁRIO',
            frame:isShowBikeRack ? locationIconFrame : grayFrame
        },
        {
            id:4,
            icon:park,
            name:'PARQUE',
            frame:isShowPark ? locationIconFrame : grayFrame
        },
        {
            id:5,
            icon:bank,
            name:'BANCO',
            frame:isShowBank ? locationIconFrame : grayFrame
        },
        {
            id:6,
            icon:metroStation,
            name:'ESTAÇÃO DE METRÔ',
            frame:isShowMetroStation ? locationIconFrame : grayFrame
        },
    ]

    function handleShowLocation(name:string) {
        switch (name) {
            case 'MERCADO':
                setIsShowMarket(true);
                break;
            case 'PETSHOP':
                setIsShowPetshop(true);
                break;
            case 'BICICLETÁRIO':
                setIsShowBikeRack(true);
                break;
            case 'PARQUE':
                setIsShowPark(true);
                break;
            case 'BANCO':
                setIsShowBank(true);
                break;
            case 'ESTAÇÃO DE METRÔ':
                setIsShowMetroStation(true);
                break;
            default:
                break;
        }
    }

    function handleCloseLocation(name:string) {
        switch (name) {
            case 'MERCADO':
                setIsShowMarket(false);
                break;
            case 'PETSHOP':
                setIsShowPetshop(false);
                break;
            case 'BICICLETÁRIO':
                setIsShowBikeRack(false);
                break;
            case 'PARQUE':
                setIsShowPark(false);
                break;
            case 'BANCO':
                setIsShowBank(false);
                break;
            case 'ESTAÇÃO DE METRÔ':
                setIsShowMetroStation(false);
                break;
            default:
                break;
        }
    }

    return (
        <div className='localization' id='localization'>
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
                            <div onMouseEnter={() => handleShowLocation(item.name)} onMouseLeave={() => handleCloseLocation(item.name)} className='iconBox'>
                                <img className='itemIcon' src={item.icon} alt="icone do item" />
                                <img className='locationIconFrame' src={item.frame} alt="frame do icone de localização" />
                            </div>
                            <h3>{item.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className='map'>
                <img src={map} alt="imagem do mapa" />
                {isShowMarket &&
                    <div>
                        <div className='mapIconMarket1'>
                            <div className='iconBox'>
                                <img className='itemIcon' src={marketIcon} alt="icone do item" />
                                <img className='locationIconFrame' src={locationIconFrame} alt="frame do icone de localização" />
                            </div>
                        </div>
                        <div className='mapIconMarket2'>
                            <div className='iconBox'>
                                <img className='itemIcon' src={marketIcon} alt="icone do item" />
                                <img className='locationIconFrame' src={locationIconFrame} alt="frame do icone de localização" />
                            </div>
                        </div>
                    </div>
                }
                {isShowPetshop && <div>
                    <div className='mapIconPetshop1'>
                        <div className='iconBox'>
                            <img className='itemIcon' src={petshop} alt="icone do item" />
                            <img className='locationIconFrame' src={locationIconFrame} alt="frame do icone de localização" />
                        </div>
                    </div>
                </div>
                }
                {isShowBikeRack &&<div>
                    <div className='mapIconBikeRack'>
                        <div className='iconBox'>
                            <img className='itemIcon' src={bikeRack} alt="icone do item" />
                            <img className='locationIconFrame' src={locationIconFrame} alt="frame do icone de localização" />
                        </div>
                    </div>
                </div>
                }
                {isShowPark &&<div>
                    <div className='mapIconPark'>
                        <div className='iconBox'>
                            <img className='itemIcon' src={park} alt="icone do item" />
                            <img className='locationIconFrame' src={locationIconFrame} alt="frame do icone de localização" />
                        </div>
                    </div>
                </div>
                }
                {isShowBank && <div>
                    <div className='mapIconBank'>
                        <div className='iconBox'>
                            <img className='itemIcon' src={bank} alt="icone do item" />
                            <img className='locationIconFrame' src={locationIconFrame} alt="frame do icone de localização" />
                        </div>
                    </div>
                </div>
                }
                {isShowMetroStation &&<div>
                    <div className='mapIconMetroStation'>
                        <div className='iconBox'>
                            <img className='itemIcon' src={metroStation} alt="icone do item" />
                            <img className='locationIconFrame' src={locationIconFrame} alt="frame do icone de localização" />
                        </div>
                    </div>
                </div>
                }
            </div>
        </div>
    )
}