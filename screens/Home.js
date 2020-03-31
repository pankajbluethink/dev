import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  View,
  Text,
  Button
} from "react-native";
import { Block, theme } from "galio-framework";

import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderArticles = () => {
    const { navigation } = this.props;
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}
          >
            <Text
              style={{ color: "#113571", 
              fontSize: 30,
              marginBottom:20,
              fontWeight: "bold" }}
              onPress={() => navigation.push("PendingOrder")}
            >
              Pending Order
            </Text>
            <Text
              style={{ color: "#113571",
              fontSize: 30,
              fontWeight: "bold" }}
              onPress={() => navigation.push("CompletedOrder")}
            >
              Completed Order
            </Text>
          </View>
        </Block>
      </ScrollView>
    );
  };

  render() {
    //const { navigation } = this.props;
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE
  }
});

export default Home;
