
import React from 'react';
import './index.css'

interface SideHomeProps {
    user: string;
}

const SideHome: React.FC<SideHomeProps> = ({ user }) => {
    return (
        <>
            <div className="siteHome">

                <div className='profile-container'>
                    <div className="profile-content">
                        <div className="profile-content__image">
                            <svg version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="40" height="40" viewBox="0,0,256,256">
                                <g fill="none"
                                    fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: "normal" }}>
                                    <g transform="scale(6.4,6.4)">
                                        <path d="M20,38.5c-10.201,0 -18.5,-8.299 -18.5,-18.5c0,-10.201 8.299,-18.5 18.5,-18.5c10.201,0 18.5,8.299 18.5,18.5c0,10.201 -8.299,18.5 -18.5,18.5z" fill="#b5ddf5"></path><path d="M20,2c9.925,0 18,8.075 18,18c0,9.925 -8.075,18 -18,18c-9.925,0 -18,-8.075 -18,-18c0,-9.925 8.075,-18 18,-18M20,1c-10.493,0 -19,8.507 -19,19c0,10.493 8.507,19 19,19c10.493,0 19,-8.507 19,-19c0,-10.493 -8.507,-19 -19,-19z" fill="#7496c4"></path><path d="M23.853,24.5h-7.706c-0.449,0.107 -8.647,2.149 -8.647,7.712v1.398c3.294,3.027 7.674,4.89 12.5,4.89c4.826,0 9.206,-1.863 12.5,-4.89v-1.398c0,-5.56 -8.198,-7.605 -8.647,-7.712z" fill="#8bb7f0"></path><path d="M20,39c-4.754,0 -9.314,-1.783 -12.838,-5.021l-0.162,-0.149v-1.618c0,-5.97 8.662,-8.11 9.031,-8.198l0.116,-0.014l7.822,0.014c0.369,0.088 9.031,2.228 9.031,8.198v1.618l-0.162,0.148c-3.524,3.239 -8.084,5.022 -12.838,5.022zM8,33.389c3.316,2.975 7.569,4.611 12,4.611c4.431,0 8.684,-1.636 12,-4.611v-1.177c0,-5.022 -7.422,-7.016 -8.208,-7.212h-7.585c-0.785,0.196 -8.207,2.189 -8.207,7.212z" fill="#4e7ab5"></path><g><path d="M20,20.5c-3.584,0 -6.5,-2.916 -6.5,-6.5c0,-3.584 2.916,-6.5 6.5,-6.5c3.584,0 6.5,2.916 6.5,6.5c0,3.584 -2.916,6.5 -6.5,6.5z" fill="#ffeea3"></path><path d="M20,21c-3.86,0 -7,-3.141 -7,-7c0,-3.859 3.14,-7 7,-7c3.86,0 7,3.141 7,7c0,3.859 -3.14,7 -7,7zM20,8c-3.309,0 -6,2.691 -6,6c0,3.309 2.691,6 6,6c3.309,0 6,-2.691 6,-6c0,-3.309 -2.691,-6 -6,-6z" fill="#ba9b48">
                                        </path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>

                        <div className="profile-content__userName">
                            {user}
                        </div>

                        <button className='profile-content__buttonFake'>
                            alterar perfil
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SideHome;