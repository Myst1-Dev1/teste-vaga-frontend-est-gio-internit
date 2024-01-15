import './styles.scss';

import arrow1 from '../../assets/images/arrow1.png';
import enterpriseImage1 from '../../assets/images/enterpriseImage1.png';
import enterpriseImage3 from '../../assets/images/enterpriseImage3.png';
import enterpriseImage4 from '../../assets/images/enterpriseImage4.png';
import enterpriseImage5 from '../../assets/images/enterpriseImage5.png';
import yellowLine from '../../assets/images/yellow line.png'
import yellowFrame from '../../assets/images/yellowFrame.png';

export function Enterprise() {
    return (
        <div className='enterprise'>
            <div className='enterpriseSubtitles'>
                <h2>O ENPREENDIMENTO</h2>
                <img src={arrow1} alt="flecha de subtitulo" />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra viverra nisl, id nullam
                    et morbi. Ornare ut est faucibus nec ut curabitur sagittis. Dui risus amet, sit morbi aliquet
                    . In consectetur hendrerit ut lobortis nunc enim fusce morbi sagittis. Bibendum nulla cursus
                    urna habitant integer in orci, amet. Elementum habitasse sem amet sit mi est. Aenean dui,
                    odio malesuada ullamcorper est sed. Aliquet lacus, platea nibh ultricies turpis diam leo
                    duis. Amet massa, sit rhoncus leo laoreet habitant. Aliquam nullam risus duis curabitur.
                </p>
                <div className='imgContainer'>
                    <img src={enterpriseImage3} alt="segunda imagem do emprendedor" />
                    <img src={enterpriseImage4} alt="terceira imagem do emprendedor" />
                    <img src={enterpriseImage5} alt="quinta imagem do emprendedor" />
                </div>
                <div className='dragDiv'>
                    <div className='lineBox'>
                        <div className='yellowBall'></div>
                        <hr />
                    </div>
                    <span>(Click e arraste)</span>
                </div>
            </div>
            <div>
                <img src={enterpriseImage1} alt="primeira imagem do emprendedor" />
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