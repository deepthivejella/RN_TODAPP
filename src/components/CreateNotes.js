import React,{useState} from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';

import actions from '../actions/action'
import {connect} from 'react-redux';

const CreateNotes = (props)=>{

    const { addItemToNotes } = props;
    const [title,setTitle] = useState('');
    const [desc,setDesc] = useState('');

    const onSaveHandler = () => {
        if( title === '' || desc === '') {
            alert("please enter both title and description")
            return;
        }
        const newNote = {
            title,
            desc
        }
        
        setTitle('');
        setDesc('');

        addItemToNotes(newNote);
        props.navigation.navigate('Home Screen');
    }

    return(
        <>
        <View style = {styles.container}>
              
               <TextInput
                 placeholder = "Title"
                 value = {title}
                 style={styles.textInputStyle}
                 onChangeText = {(title) => setTitle(title)}
               />
                <TextInput
                    placeholder = "Description"
                    value = {desc}
                    style={styles.textInputStyle}
                    multiline = {true}
                    onChangeText = {(desc) => setDesc(desc)}
                />
                <Button 
                  title = "SAVE"
                  onPress = {onSaveHandler}
            />
        </View>
        </>
    )
}

const mapStateToProps = state => {
    return { 
    
        items:state.notes
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      addItemToNotes: (note) => dispatch(actions.addItemToNotes(note)),
    
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(CreateNotes);

const styles = StyleSheet.create({

    container:{
        padding:40,
        justifyContent:'center',
        alignItems:'center',

       
    },
    textInputStyle:{
        height: 50,
        borderColor: 'grey', 
        borderWidth: 1 ,
        padding:10,
        marginBottom:15,
        width:'100%'
    },
 
   
})
