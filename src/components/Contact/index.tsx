import './styles.scss';

import contactFrame from '../../assets/images/contactFrame.png';
import yellowFrame from '../../assets/images/yellowFrame.png'
import { FormEvent } from 'react';

export function Contact() {

    function phoneMask(value:string) {
        if(!value) return "";
        value = value.replace(/\D/g, '');
        value = value.replace(/(\d{2})(\d)/, "($1) $2");
        value = value.replace(/(\d)(\d{4})$/,"$1-$2");
        return value;
    }

    function emailMask(value:string) {
        if(!value) return "";
        value = value.replace(/^(..).+?(?=..@)/, '$1***');
        value = value.replace(/(@...).+?(?=\.\w+$)/, '$1***');
        return value;
    }

    function handlePhone(e:FormEvent | any) {
        let input = e.target;
        input.value = phoneMask(input.value);
    }

    function handleEmail(e:FormEvent | any) {
        let input = e.target;
        input.value = emailMask(input.value);
    }

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
                        <input onKeyUp={(e) => handlePhone(e)} maxLength={15} type="tel" id='tel' required />
                        <label htmlFor="tel">SEU TELEFONE</label>
                        <img src={yellowFrame} alt="frame amarelo" />
                    </div>
                    <div className='inputBox'>
                        <input onKeyUp={(e) => handleEmail(e)} type="email" id='email' required />
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