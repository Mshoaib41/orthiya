import React from 'react'
import CustomButton from '../ButtonCom'
import style from '../navbar/style'
import styles from './style'

function PricingCom(props) {
    return (
        <div>
            <div>
                <p style={styles.priceComTitle}>{props.title}</p>
                <p style={styles.priceComDetail}>Lorem ipsum dolor sit amet,
                    <br />
                    consectetur adipiscing elit ut aliquam,</p>
                <p style={styles.price}>{props.price}</p>
                <CustomButton
                    style={styles.buttonComPrice}
                    text={'Select'}
                   
                />
                <ul style={styles.ul}>
                    {props.li.map(item => <li style={styles.li}><i style={styles.i} className={item.icon}></i><p style={styles.lidetail}>{item.textdetail}</p></li>)}

                </ul>
            </div>
        </div>
    )
}

export default PricingCom
