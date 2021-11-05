import React from 'react'
import styles from './style'
import CustomButton from '../ButtonCom'


function CtaComponent() {
    return (
        <div>
            <div style={styles.ctaImage}>
                <p style={styles.ctaText}  className='startText' >Start the success of your
                <br/>
                 website with us</p>
                 <CustomButton
                 text={'Get Started'}
                 style={styles.ctaButton}
                 />
            </div>
        </div>
    )
}

export default CtaComponent
