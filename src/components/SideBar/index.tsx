import './styles.scss';

import logo from '../../assets/images/logo.png';

export function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sidebarContainer'>
                <div className='imgContainer'>
                    <img src={logo} alt="imagem da logo" />
                </div>

                <nav>
                    <a href="/">HOME</a>
                    <a href="/">O ENPRENDIMENTO</a>
                    <a href="/">PLANTAS</a>
                    <a href="/">LOCALIZAÇÃO</a>
                    <a href="/">CONTATO</a>
                    <span>POLÍTICAS DE <br /> PRIVACIDADE</span>
                </nav>
            </div>
        </div>
    )
}