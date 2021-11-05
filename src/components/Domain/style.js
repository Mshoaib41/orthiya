import Color from "../../util/color"
import DomainImage from '../../assets/Images/Domain.png'
const styles={

    parentDivDomain:{
        backgroundImage:`url(${DomainImage})`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'100%',
        height:450,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItem:'center',
        margin:25
    },
    domainText:{
        fontSize:64,
        fontWeight:700,
        fontFamily:'Inter',
        textAlign:'center',
        justifyContent:'center',
        color:Color.white,
        margin:10
       
    },
    domainDetailText:{  
        fontSize:16,
        fontWeight:400,
        fontFamily:'Inter',
        color:Color.grayLightPro,
        justifyContent:'center',
        textAlign:'center',
    
    },
    inputDomain:{
        flexDirection:'row',
        justifyContent:'center',
       textAlign:'center',
       alignSelf:'center',
       backgroundColor:Color.white,
       width:'50%',
       borderRadius: 5,
       margin:15,
    },
    input:{
    border: 0 ,
    borderWidth: 0,
    boxShadow: 'none' ,
    width:'50%',
    margin:10,
    },
    domainButton:{
        padding: 5,
        margin:5,
        color:Color.black,
        backgroundColor:'transparent',
        borderColor:Color.black,
        width:100
    },
    domainButtonSearch:{
        padding: 5,
        margin:5,
        width:100
    }
}

export default styles
