import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './index.css'

const Game: React.FC = () => {
    const [sequence, setSequence] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [inputDisabled, setInputDisabled] = useState<boolean>(true);
    const [message, setMessage] = useState<string>("");
    const [timer, setTimer] = useState<number>(0);
    const [status, setStatus] = useState<string[]>([]);

    const tempoDeEscolha: number = 5

    const keys: string[] = useMemo(() => ['A', 'S', 'D', 'F', 'J', 'K', 'L'], []);

    const generateSequence = useCallback(() => {
        const newSequence: string[] = [];
        for (let i = 0; i < 7; i++) {
            newSequence.push(keys[Math.floor(Math.random() * keys.length)]);
        }
        setSequence(newSequence);
        setStatus(Array(tempoDeEscolha).fill('pending'));
        setCurrentIndex(0);
        setMessage("");
        setTimer(tempoDeEscolha);
    }, [keys]);

    const handleKeyPress = useCallback((event: KeyboardEvent) => {
        if (inputDisabled) return;

        const key = event.key.toUpperCase();
        if (key === sequence[currentIndex]) {
            setStatus((prevStatus) => {
                const newStatus = [...prevStatus];
                newStatus[currentIndex] = 'correct';
                return newStatus;
            });
            setCurrentIndex((prevIndex) => prevIndex + 1);
            if (currentIndex + 1 === sequence.length) {
                setMessage("Você completou a sequência!");
                const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2065/2065-preview.mp3');
                audio.play();
                audio.volume = 0.1;
                setInputDisabled(true);
            }
        } else {
            setStatus((prevStatus) => {
                const newStatus = [...prevStatus];
                newStatus[currentIndex] = 'incorrect';
                const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2028/2028-preview.mp3');
                audio.play();
                audio.volume = 0.1;
                return newStatus;
            });
            setMessage("Você errou! Tente novamente.");
            setInputDisabled(true);
        }
    }, [currentIndex, inputDisabled, sequence]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (!inputDisabled) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(interval);
                        setMessage("Tempo esgotado!");
                        setInputDisabled(true);
                        return tempoDeEscolha;
                    }
                    return prevTimer - 1;
                });
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [inputDisabled]);

    const playMusic = () => {
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2044/2044-preview.mp3');
        audio.play();
        audio.volume = 0.1;
      };

    const startGame = () => {
        generateSequence();
        setInputDisabled(!inputDisabled);
        playMusic();
    };

    return (
        <div className='container-game'>
            <div className="container-overlay">
                <div className="container-content">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="48px"
                        height="48px"
                        viewBox="0 0 256 256"
                    >
                        <g fill="none" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                            <g transform="scale(5.33333,5.33333)">
                                <path d="M3.997,25l-0.003,-2h40.007l-0.007,2c0,11.04 -8.959,20 -19.999,20c-11.04,0 -19.998,-8.96 -19.998,-20z" fill="#000000" fillRule="nonzero"></path>
                                <path d="M23.997,4c10.488,0 19,8.507 19,19c0,10.48 -8.512,19 -19,19c-10.488,0 -19,-8.52 -19,-19c0,-10.493 8.512,-19 19,-19z" fill="#ffffff" fillRule="evenodd"></path>
                                <path d="M3.997,23c0,-11.04 8.959,-20 20,-20c11.04,0 20,8.96 20,20c0,11.04 -8.96,20 -20,20c-11.042,0 -20,-8.96 -20,-20zM41.997,23c0,-9.933 -8.065,-18 -18,-18c-9.936,0 -18,8.067 -18,18c0,9.933 8.064,18 18,18c9.934,0 18,-8.067 18,-18z" fill="#000000" fillRule="evenodd"></path>
                                <path d="M20.003,31v-16h2v16z" fill="#000000" fillRule="evenodd"></path>
                                <path d="M18.005,15c0,-0.547 0.448,-1 1,-1h9.997c0.551,0 1,0.453 1,1c0,0.547 -0.449,1 -1,1h-9.997c-0.552,0 -1,-0.453 -1,-1z" fill="#000000" fillRule="evenodd"></path>
                                <path d="M18.005,31c0,-0.547 0.448,-1 1,-1h9.997c0.551,0 1,0.453 1,1c0,0.547 -0.449,1 -1,1h-9.997c-0.552,0 -1,-0.453 -1,-1z" fill="#000000" fillRule="evenodd"></path>
                                <path d="M20.003,23c0,-0.56 0.448,-1 1,-1h6c0.551,0 1,0.44 1,1c0,0.547 -0.449,1 -1,1h-6c-0.552,0 -1,-0.453 -1,-1z" fill="#000000" fillRule="evenodd"></path>
                            </g>
                        </g>
                    </svg>
                    <h1>MINI-GAME</h1>
                    <div className='container-button'>
                        <button onClick={startGame} > {inputDisabled ? "Iniciar Jogo" : "Voltar ao inicio"}</button>
                    </div>
                    <div className="sequence-container">
                        { sequence.map((key, index) => (
                            <div key={index} className={`sequence-item ${status[index]}`}>
                                {key}
                            </div>
                        ))}
                    </div>
                    <div>
                        {!inputDisabled && <h2>Tempo restante: {timer} segundos</h2>}
                        <h2>{message}</h2>
                        <div className="progress-bar bg-success" role="progressbar" aria-label="Segment two" style={{ width: ((timer / tempoDeEscolha) * 100) + "%", height: "5px" }} aria-valuenow={timer} aria-valuemin={0} aria-valuemax={100}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Game;
