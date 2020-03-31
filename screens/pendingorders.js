// import React from 'react';
// import { StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { Block, theme } from 'galio-framework';

// import { Card } from '../components';
// import articles from '../constants/articles';
// const { width } = Dimensions.get('screen');

// class CompletedOrders extends React.Component {
//   renderArticles = () => {
//     return (
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={styles.articles}>
//         <Block flex>
//           {/* <Card item={articles[0]} horizontal  /> */}
//           {/* <Block flex row>
//             <Card item={articles[1]} style={{ marginRight: theme.SIZES.BASE }} />
//             <Card item={articles[2]} />
//           </Block> */}
//           {/* <Card item={articles[3]} horizontal />
//           <Card item={articles[4]} full /> */}
//         </Block>
//       </ScrollView>
//     )
//   }

//   render() {
//     return (
//       <Block flex center style={styles.home}>
//         {/* {this.renderArticles()} */}
//       </Block>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   home: {
//     width: width,    
//   },
//   articles: {
//     width: width - theme.SIZES.BASE * 2,
//     paddingVertical: theme.SIZES.BASE,
//   },
// });

// export default CompletedOrders;

import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
   
class List extends Component {
   state = {
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