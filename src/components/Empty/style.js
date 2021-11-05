import Color from '../../util/color'
const  styles={
        mainContainer:{
            backgroundColor:Color.lightgreen,
            transform:'skew(0deg ,-3deg)',  
            padding: 30,    
        },
        content:{
            transform:'skew(0deg,3deg)',
            display:'flex',
            flexDirection:'column',
            justifyContent:'space-around'
        },
        learnmore:{
            backgroundColor:'transparent',
            color:Color.black,
            border:'1px solid black',
            width:'25%',    
        },
        row:{
            display:'flex',
            flexDirection:'row-reverse'
        },
      
}
export default styles