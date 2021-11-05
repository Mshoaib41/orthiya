import React from 'react'
import CustomButton from '../ButtonCom'
import {Row,Col} from 'react-bootstrap'
import styles from './style'

function Domain() {
    return (
        <div >
            <div style={styles.parentDivDomain} className="mt-5" >
                
            
                    <p style={styles.domainText} >Find the perfect domain name</p>
                    <p style={styles.domainDetailText} >Enter your select domain name and choose any extension name
                        in the next step 
                        <br/>
                         (choose between .com, .online, .tech, .site, .net, and more)</p>
            <Row style={styles.inputDomain}>
           
                    
                <input placeholder="Search your domain here" style={styles.input}/>
               
               
                <CustomButton 
                style={styles.domainButton}
                text={'Com '}  
                icon={'fas fa-chevron-down'}
                />
                <CustomButton
                text={'Search'}
                style={styles.domainButtonSearch}
                />
            </Row>
            </div>


        </div>
    )
}

export default Domain
