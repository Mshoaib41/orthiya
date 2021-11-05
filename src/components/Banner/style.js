import Color from '../../util/color'
const styles = {

    bannerText:{
        fontSize:64,
        fontFamily:'Inter',
        fontWeight:700,
        lineHeight:1.5,
        marginTop:70,
    },
    bannerDetail:{
        fontSize:16,
        fontFamily:'Inter',
        fontWeight:400,
        color:Color.gray,
       
    },
    bannerSecondImage:{
        width:'100%'
    },
    // bannerSecond:{
    //     display:'flex',
    //    justifyContent:'flex-end'
    // },
    bannerButton:{
        fontSize:14,
        fontFamily:'Inter',
        fontWeight:400,
        margin:10,
        padding: 10,

    },
    bannerButton2nd:{
        fontSize:14,
        fontFamily:'Inter',
        fontWeight:400,
        color:Color.black,
        backgroundColor:'transparent',
        borderColor:Color.black,
        margin:10,
        padding:10
    },
    row:{
        display:'flex',
        justifyContent:'space-between'
    },
    leftCol:{
        alignContent:'center'
    }

}

export default styles