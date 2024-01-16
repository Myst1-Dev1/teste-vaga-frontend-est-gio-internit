import './styles.scss';

import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';

export function SideBar() {
    const [isOpenResponsiveMenu, setIsOpenResponsiveMenu] = useState(false);
    const [activeLinkPath, setActiveLinkPath] = useState('home');

    function handleOpenResponsiveMenu() {
        setIsOpenResponsiveMenu(true)
    }

    function handleSetActiveLink(path:string) {
        setIsOpenResponsiveMenu(false);
        setActiveLinkPath(path);
    }

    return (
        <>
            <div className='sideBar'>
                <div className={`${isOpenResponsiveMenu ? 'active' : 'sidebarContainer'}`}>
                    <div className='imgContainer'>
                        <img src={logo} alt="imagem da logo" />
                    </div>

                    <nav>
                        <a className={`${activeLinkPath === 'home' ? 'activeLink' : ''}`} onClick={() => handleSetActiveLink('home')} href="#home">HOME</a>
                        <a className={`${activeLinkPath === 'enterprise' ? 'activeLink' : ''}`} onClick={() => handleSetActiveLink('enterprise')} href="#enterprise">O ENPRENDIMENTO</a>
                        <a className={`${activeLinkPath === 'plaints' ? 'activeLink' : ''}`} onClick={() => handleSetActiveLink('plaints')} href="#plaints">PLANTAS</a>
                        <a className={`${activeLinkPath === 'localization' ? 'activeLink' : ''}`} onClick={() => handleSetActiveLink('localization')} href="#localization">LOCALIZAÇÃO</a>
                        <a className={`${activeLinkPath === 'contact' ? 'activeLink' : ''}`} onClick={() => handleSetActiveLink('contact')} href="#contact">CONTATO</a>
                        <span>POLÍTICAS DE <br /> PRIVACIDADE</span>
                    </nav>
                </div>
            </div>
            <FaBars onClick={handleOpenResponsiveMenu} className='openResponsiveMenuButton' />
        </>
    )
}