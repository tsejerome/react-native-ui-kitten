import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, ButtonGroup, Layout } from "@ui-kitten/components";
import { scale } from "react-native-size-matters";

export const ButtonGroupStatusShowcase = () => (
  <Layout style={styles.container} level="1">
    <ButtonGroup style={styles.buttonGroup} status="primary">
      <Button>L</Button>
      <Button>R</Button>
    </ButtonGroup>

    <ButtonGroup style={styles.buttonGroup} status="success">
      <Button>L</Button>
      <Button>R</Button>
    </ButtonGroup>

    <ButtonGroup style={styles.buttonGroup} status="info">
      <Button>L</Button>
      <Button>R</Button>
    </ButtonGroup>

    <ButtonGroup style={styles.buttonGroup} status="warning">
      <Button>L</Button>
      <Button>R</Button>
    </ButtonGroup>

    <ButtonGroup style={styles.buttonGroup} status="danger">
      <Button>L</Button>
      <Button>R</Button>
    </ButtonGroup>

    <ButtonGroup style={styles.buttonGroup} status="basic">
      <Button>L</Button>
      <Button>R</Button>
    </ButtonGroup>

    <View style={styles.controlContainer}>
      <ButtonGroup style={styles.buttonGroup} status="control">
        <Button>L</Button>
        <Button>R</Button>
      </ButtonGroup>
    </View>
  </Layout>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  buttonGroup: {
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
