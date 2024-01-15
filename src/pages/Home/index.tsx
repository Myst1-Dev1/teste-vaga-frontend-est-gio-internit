import './styles.scss';

import { Banner } from '../../components/Banner';
import { Enterprise } from '../../components/Enterprise';
import { Plaints } from '../../components/Plaints';
import { SideBar } from '../../components/SideBar';
import { Localization } from '../../components/Localization';
import { Contact } from '../../components/Contact';


export function Home() {
    return (
        <div className="container">
            <SideBar />
            <div className="mainContent">
                <Banner />
                <Enterprise />
                <Plaints />
                <Localization />
                <Contact />
            </div>
        </div>
    )
}