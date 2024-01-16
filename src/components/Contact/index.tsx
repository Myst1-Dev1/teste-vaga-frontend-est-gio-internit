import './styles.scss';

import contactFrame from '../../assets/images/contactFrame.png';
import yellowFrame from '../../assets/images/yellowFrame.png'

export function Contact() {
    return (
        <div className='contact' id='contact'>
            <img src={contactFrame} alt="frame do contato" />
            <div className='contactForm'>
                <h2>FICOU <br /> INTERESSADO?</h2>
                <p>Preencha o formulário abaixo e um de <br /> nossos consultores entrará em contato.</p>

                <form>
                    <div className='inputBox'>
                        <input type="text" id='name' required />
                        <label htmlFor="name">COMO DEVEMOS TE CHAMAR?</label>
                        <img src={yellowFrame} alt="frame amarelo" />
                    </div>
                    <div className='inputBox'>
                        <input type="tel" id='tel' required />
                        <label htmlFor="tel">SEU TELEFONE</label>
                        <img src={yellowFrame} alt="frame amarelo" />
                    </div>
                    <div className='inputBox'>
                        <input type="email" id='email' required />
                        <label htmlFor="email">SEU MELHOR EMAIL</label>
                        <img src={yellowFrame} alt="frame amarelo" />
                    </div>

                    <div className='checkboxContainer'>
                        <div className='box'>
                            <input type="checkbox" id='checkbox'/>
                            <label htmlFor="checkbox">Li e aceito os termos de uso dos dados conforme indicado na Política de Privacidade.</label>
                        </div>
                        <button>ENVIAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}