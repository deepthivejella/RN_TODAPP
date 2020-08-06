import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ScrollView,Dimensions} from 'react-native';
import {connect} from 'react-redux';
const height = Dimensions.get('window').height;

const HomeScreen = (props) => {
  const { items } = props;
  return (
    <View style={{flex: 1,paddingBottom:'20%'}}>
      <ScrollView showsVerticalScrollIndicator = {false}>
      {items.length ? 
        items.map((item, i) => 
        
         
          <View style={styles.listItemLayout} key={i}>
            {/* <View style={styles.listItem}> */}
                  <Text style ={{color:'#6E6E6E',fontSize:18}}>Title :
                    <Text style = {styles.textStyle}> {item.title}</Text>
                  </Text>
                  <Text style ={{color:'#6E6E6E',fontSize:18,top:10}}>Description :
                    <Text style = {styles.textStyle}> {item.desc}</Text>
                  </Text>
           {/* </View> */}
          </View>
        
     
        )
        :
        <View style = {styles.hintLayout}>
          <Text style ={styles.hintTextStyles}>{'  Click on Add\nTo create a note'}</Text>
        </View>
      }
      </ScrollView>

      <TouchableOpacity
        style={styles.buttonLayout}
        onPress={() => props.navigation.navigate('Create Notes')}>
        <Text style={{...styles.buttonText, paddingLeft: 10}}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};


const mapStateToProps = state => {
  return { 
  
      items:state.notes
  }
}

export default connect(mapStateToProps,undefined)(HomeScreen);


const styles = StyleSheet.create({
  hintLayout:{
    justifyContent:'center',
    alignItems:'center',
    height:height-150,

  },
  hintTextStyles:{

    fontSize:20
  },
  

  listItemLayout: {
    paddingHorizontal: 10,

    paddingLeft: 10,
    margin: 10,
    backgroundColor: '#E0E6F8',
    padding: 20,
    borderRadius: 5,
  },

  buttonLayout: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#F5A9BC',
    height: 60,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 17,
  },
  textStyle:{
    color:'#000000',
    fontSize:16
  }
});
