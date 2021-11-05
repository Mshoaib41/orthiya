import React from 'react'
import styles from './style'

function BannerCom(props) {
    return (
        <div>
           
           <div>
           <p style={styles.bannerText}>{props.mainHeading}</p>
            <p  style={styles.bannerDetail}>{props.bannerDetail}</p> 
            {
                props.image && <img src={props.image} alt='banner image' style={styles.bannerSecondImage}/>
            }
           
           </div>
            
        </div>
    )
}

export default BannerCom
