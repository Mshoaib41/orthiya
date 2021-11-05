import Color from "../../util/color"
import Image from '../../assets/Images'
const styles = {

    ctaImage:{
        backgroundImage:`url(${Image.CTA})`,
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center center',
        backgroundSize:'100%',
        height:450,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItem:'center',
        margin:25,
       
        
        
    },
    ctaText:{
     
        fontSize:64,
        fontFamily:'Inter',
        fontWeight:700,
        fontFamily:'Inter',
        textAlign:'center',
        justifyContent:'center',
        color:Color.black,
        margin:10

    },
    ctaButton:{
        width:120,
        alignSelf:'center'
    }

}

export default styles
