import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class FlatListScreen extends Component{
    static navigationOptions = {title:'列表'}
    render(){
        return (
            <View style={styles.container}>
                <FlatList   
                data={[
                    {key:'刘德华'},
                    {key:'张曼玉'},
                    {key:'梁朝伟'},
                    {key:'刘亦菲'},
                    {key:'郭富城'},
                    {key:'邓超'},
                    {key:'周星驰'},
                    {key:'张一山'},
                ]}
                ItemSeparatorComponent={this._separator}
                onRefresh={this.refreshing}
                refreshing={false}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => {
                        alert(item.key)
                    }}>
                        <View style={styles.cell}>
                            <Image style={styles.icon} source={{url:'https://upload-images.jianshu.io/upload_images/1795722-c63f4bf8af5c8fdb.jpg?imageMogr2/auto-orient/'}}/>
                            <Text style={styles.item}>{item.key}</Text>
                        </View>  
                    </TouchableOpacity>
                }
                />
            </View>
        );
    }
    _separator=() => {
        return <View style={{height:1,backgroundColor:'#efeff4'}}/>
    }
    refreshing(){
        let timer =  setTimeout(()=>{
                    clearTimeout(timer)
                    alert('刷新成功')
                },1500)
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#fff',
        height:'100%',
    },
    cell:{
        flex:1,
        flexDirection:'row',
        height:64,
        alignItems:'center',
    },
    icon: {
        width: 35,
        height: 35,
        flex:0,
        marginLeft:12,
    },
    item:{
        fontSize:18,
        marginLeft:10,
        flex:1,
    },
    
})