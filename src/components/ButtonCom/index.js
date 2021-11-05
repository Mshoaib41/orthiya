import React from 'react'
import Color from '../../util/color'
import { Button } from 'react-bootstrap'
const CustomButton = (props) => {
    return (
        <Button style={styles.navbutton,props.style}>{props.text}
        <i className={props.icon}></i>
        </Button>

    );
}
const styles = {
    navbutton: {
        borderRadius: 8,
        padding: 2,
        backgroundColor: Color.primary,
        width:120
    },

}
export default CustomButton

