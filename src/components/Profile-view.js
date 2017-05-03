import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Link} from  'react-router-native';


export default class Profile extends Component{
    render(){
        return(
            <View>
                <Link to="/"><Text style={styles.header}>Login</Text></Link>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 35,
        textAlign: 'center',
        marginTop: 65
    },
});

