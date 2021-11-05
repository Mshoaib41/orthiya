import React from 'react'
import styles from './style'

function LiComponent(props) {
    return (
        <div>
              <ul style={styles.ul}>
                              <li style={styles.liMian}>{props.headingMain}</li>
                        {props.text.map(item => <li style={styles.liDetail}>{item}</li>)}      
                             
                          </ul>
            
        </div>
    )
}

export default LiComponent
