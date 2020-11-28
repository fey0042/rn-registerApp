const { StyleSheet } = require("react-native");

const stylesMain=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    logo:{
        flex:1,
        backgroundColor:'#E91E63',
        justifyContent:"center",
        alignItems:'center'
    },
    logoText:{
        fontSize:40,
        fontFamily:'Verdana',
        color:'white',
        fontWeight:'bold',
        marginBottom:10
    },
    spaceUnderLogo:{
        flex:2,
        backgroundColor:'white'
    },
    spaceUnderLogoTexts:{
        fontFamily:'Verdana',
        color:'black',
        // fontWeight:"bold",
        fontSize:15,
        marginVertical:20,
        marginHorizontal:10,
        alignSelf:'center'
    },
    spaceUnderLogoInputs:{
        height:30,
        marginHorizontal:50,
        borderBottomWidth:1,
        borderBottomColor:'grey',
    },
    buttonRegister:{
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:50,
        height:50,
        width:200,
        borderRadius:50,
        backgroundColor:'#C2185B'
    },
})
export {stylesMain}

const stylesUserList=StyleSheet.create({
    flatList:{
        flex:1,
    },
    backToLoginView:{
        flex:0.08,
        justifyContent:'center',
        // backgroundColor:'pink',
        alignItems:'center',
    },
    backToLoginPageButton:{
        width:175,
        height:35,
        backgroundColor:'#C2185B',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    listItemView:{
        height:100,
        flexDirection:'row',
        // borderWidth:1
    },
    iconStyle:{
        width:45,
        height:45,
        resizeMode:'contain',
        alignSelf:'center',
        flex:1
    },
    listItemText:{
        alignSelf:'center',
        flex:1
    },
    actionButtons:{
        width:70,
        height:25,
        backgroundColor:'#C2185B',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
    }
})
export {stylesUserList}

const stylesDetails=StyleSheet.create({
    container:{
        flex:0.8,
        alignItems:'center',
        justifyContent:'center',
    },
    icon:{
        width:150,
        height:150,
        resizeMode:'contain',
        alignSelf:'center',
    },
    dataWrapper:{
        fontSize:30,
        marginTop:10,
    },
    textData:{
        color:'#E91E63',
        fontSize:30
    }
})
export {stylesDetails}