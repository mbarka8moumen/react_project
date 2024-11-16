import React from "react";
import '../styles/Footer.css';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import tiktok from '../assets/tiktok.png';
import paypal from '../assets/paypal.png';
import email from '../assets/email.png'
import visa from '../assets/visa.png'
import paypalCard from '../assets/paypalCard.png'
import mastercard from '../assets/mastercard.png'


function Footer() {
    return ( 
        <>
            <div className="Social-media">
                <h2>Ensemble et connectés</h2>
                <a href="https://fonts.google.com/"><img src={facebook} alt="Facebook" /></a>
                <a href="#"><img src={instagram} alt="Instagram" /></a>
                <a href="#"><img src={twitter} alt="Twitter" /></a>
                <a href="#"><img src={tiktok} alt="TikTok" /></a>
                <a href="#"><img src={paypal} alt="Paypal" /></a>
            </div>
            <div>
                {/* Footer */}
                <footer className="footer">
                    <div className="footer-section">
                        <h4>Service client</h4>
                        <div className="contact">
                            <span role="img" aria-label="Email"><img src={email}/></span>
                            <div>
                                <p><strong>Nous contacter</strong></p>
                                <p>Nous faisons le nécessaire afin de vous répondre dans les meilleurs délais.</p>
                            </div>
                        </div>
                    </div>
                    <div className="footer-section">
                        <h4>Nos Services</h4>
                        <ul>
                            <li><a href="#">Gravure bijoux & montres</a></li>
                            <li><a href="#">Rachat d'or</a></li>
                            <li><a href="#">Perçage d'oreille</a></li>
                            <li><a href="#">Entretien & réparation de montres</a></li>
                            <li><a href="#">Avantages du programme de fidélité ShineOra & Moi</a></li>
                            <li><a href="#">Garantie des produits</a></li>
                            <li><a href="#">Nos autres services en magasin</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Le Groupe ShineOra</h4>
                        <ul>
                            <li><a href="#">Nos valeurs</a></li>
                            <li><a href="#">Qui sommes-nous ?</a></li>
                            <li><a href="#">Nos boutiques</a></li>
                            <li><a href="#">Recrutement ShineOra</a></li>
                            <li><a href="#">Conditions générales de vente</a></li>
                            <li><a href="#">Politique de confidentialité</a></li>
                            <li><a href="#">Mentions légales</a></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Nos Évènements</h4>
                        <ul>
                            <li><a href="#">Offre étudiante</a></li>
                            <li><a href="#">Promotions</a></li>
                            <li><a href="#">Idées Cadeaux</a></li>
                            <li><a href="#">Ventes Privées</a></li>
                            <li><a href="#">Soldes</a></li>
                          
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Aide</h4>
                        <ul>
                            <li><a href="#">Modes de paiement</a></li>
                            <li><a href="#">Modes de livraison</a></li>
                            <li><a href="#">Livraison en magasin</a></li>
                            <li><a href="#">Retour et remboursement</a></li>
                            <li><a href="#">Trouver sa taille de bague</a></li>
                            <li><a href="#">Nos guides d'entretien bijoux</a></li>
                            <li><a href="#">Tous nos guides ShineOra</a></li>
                        </ul>
                    </div>
                </footer>

                <div className="footer-bottom">
                    <p>Payment Methods:</p>
                    <img src={visa} alt="Visa" />
                    <img src={mastercard} alt="MasterCard" />
                    <img src={paypalCard} alt="PayPal" />
                 
                </div>
            </div>
        </>
    );
}

export default Footer;
