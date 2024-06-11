import React, { useContext } from 'react';
import Game from '../../componentes/Game';
import { AppContext } from '../../Context/AppContext';
import Header from '../../componentes/Header';
import './index.css'
import SideHome from '../../componentes/SideHome';
import CenterHome from '../../componentes/CenterHome';
import { useNavigate } from 'react-router-dom';

function Home() {
    const { userName } = useContext(AppContext);
    console.log(userName)
    const navigate = useNavigate()

    if (!userName) {
        navigate('/');
    }

    return (
        <div className="container-home">
            <Game />
            <Header />
            <div className="container mt-5">
                <div className="row flex-row flex-md-nowrap">
                    <div className="col-md-3 flex-column">
                        <SideHome user={userName} />
                    </div>
                    <div className="col-md-9 flex-column">
                        <CenterHome />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
