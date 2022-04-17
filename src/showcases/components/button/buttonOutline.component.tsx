import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Layout } from "@ui-kitten/components";
import { scale } from "react-native-size-matters";

export const ButtonOutlineShowcase = () => (
  <Layout style={styles.container} level="1">
    <Button style={styles.button} appearance="outline" status="primary">
      PRIMARY
    </Button>

    <Button style={styles.button} appearance="outline" status="success">
      SUCCESS
    </Button>

    <Button style={styles.button} appearance="outline" status="info">
      INFO
    </Button>

    <Button style={styles.button} appearance="outline" status="warning">
      WARNING
    </Button>

    <Button style={styles.button} appearance="outline" status="danger">
      DANGER
    </Button>

    <Button style={styles.button} appearance="outline" status="basic">
      BASIC
    </Button>

    <View style={styles.controlContainer}>
      <Button style={styles.button} appearance="outline" status="control">
        CONTROL
      </Button>
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    margin: scale(2),
  },
  controlContainer: {
    borderRadius: scale(4),
    margin: scale(2),
    padding: scale(6),
    justifyContent: "center",
    backgroundColor: "#3366FF",
  },
});
