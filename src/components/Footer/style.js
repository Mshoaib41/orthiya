import Color from "../../util/color"
const styles = {
    footerMain:{
        backgroundColor:Color.darkPurple
    },
    iconImageFooter:{
        width:150,
        height:30,
        
    },
    footerDetailText:{
        fontSize:16,
        fontWeight:400,
        fontFamily:'Inter',
        color:Color.grayLight,
        lineHeight:2,
        paddingTop:50
       
    },
    footerIconSide:{
        display:'flex',
        flexDirection:'column'   
    },
    madeby:{
        fontSize:16,
        fontWeight:400,
        fontFamily:'Inter',
        color:Color.grayLight,
        
        paddingTop:10,
        margin:25

    },
    ul:{
        listStyle:'none'
    },
    liMian:{
        fontSize:16,
        fontWeight:700,
        fontFamily:'Inter',
        color:Color.grayLight,
       
    
    },
    liDetail:{
        fontSize:16,
        fontWeight:400,
        fontFamily:'Inter',
        color:Color.grayLight,
        marginTop:30,
        padding: 2,
     
    }
}

export default styles