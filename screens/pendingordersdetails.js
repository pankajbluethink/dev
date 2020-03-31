import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import MultiSwitch from './MultiSwitch'
   
class List extends Component {
   state = {
      currentStatus:'Open',
      names: [
         {
            id: 0,
            name: 'ORDER # 000000987',
         },
         {
            id: 1,
            name: 'ORDER # 000000987',
         },
         {
            id: 2,
            name: 'ORDER # 000000987',
         },
         {
            id: 3,
            name: 'ORDER # 000000987',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   handleStatusChanged=(value)=>{
      this.setState({
         currentStatus:value
      })
   }
   render() {
      const { navigation } = this.props;
      return (
         <View>
            {
               this.state.names.map((item, index) => (
                  <TouchableOpacity
                     key = {item.id}
                     style = {styles.container}
                     onPress={() => navigation.push('PendingOrderDetails')}>
                     <Text  style = {styles.text} >
                        {item.name}
                     </Text>
                     <Text style = {styles.textnew}> 12:10:2019 at 2:30</Text>
                  </TouchableOpacity>
               ))
            }
            
            <MultiSwitch currentStatus={this.state.currentStatus} onStatusChanged={this.handleStatusChanged}  />
           
         </View>
      )
   }
}
export default List

const styles = StyleSheet.create ({
   container: {
      padding: 10,
      marginTop: 3,
      backgroundColor: 'transparent',
      alignItems: 'center',
      marginBottom: 5,
   },
   text: {
      color: '#2bda2b',
      fontSize: 24,
      fontWeight: "bold",
   },
   textnew: {
      color: '#000',
      fontSize: 16,
      fontWeight: "bold",
   }
})