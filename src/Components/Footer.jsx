import React from 'react'
import FooterStyle from '../styles/footer.module.css'


function Footer() {
    return (
        <div className={`container-fluid ${FooterStyle.footerContainer}`}>
            <h1  className={`${FooterStyle.footerContent}`}>About Us</h1>
            <p className={`${FooterStyle.footerContent}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium aut a nostrum sed, labore maxime blanditiis. Natus, maiores nobis. Dolorum odio facilis tempora ea placeat labore autem sed, accusantium ipsam.</p>
            <div className={`${FooterStyle.footericon}`}>
            <i class="fa-brands fa-twitter"></i>
                <i className='fa-brands fa-facebook'></i>
                <i className='fa-brands fa-whatsapp'></i>
                <i className='fa-brands fa-yahoo'></i>
                <i className='fa-brands fa-google'></i>
            </div>
        </div>
    )
}

export default Footer