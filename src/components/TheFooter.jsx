 import React from 'react';
 import '../styles/TheFooter.css'
 import logoEstigma from '../assets/logoEstigma.png'
 
 const TheFooter = () => {
    return (
        <div>
        <footer>
        <div class="partFooter">
                <img src="../assets/logoEstigma.png" alt=""/>            
            </div>
            <div class="partFooter">
                <h4>Servicios</h4>
                <a href="#">Services 1</a>
                <a href="#">Services 2</a>
                <a href="#">Services 3</a>
            </div>

            <div class="partFooter">
                <h4>Acerca de</h4>
                <a href="#">About 1</a>
                <a href="#">About 2</a>
                <a href="#">About 3</a>
            </div>

            <div class="partFooter">
                <h4>Redes sociales</h4>
                <div class="social-media">
            <i className="bi bi-facebook" id="b-icon"></i>
            <i className="bi bi-twitter-x"id="b-icon"></i>
            <i className="bi bi-instagram" id="b-icon"></i>
            <i className="bi bi-youtube" id="b-icon" ></i>
                </div>
            </div>
        </footer>
        </div>
    );
 };
 
 export default TheFooter;
