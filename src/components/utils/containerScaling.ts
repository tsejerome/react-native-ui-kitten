import { scale } from "react-native-size-matters";

const styleKeysList = [
  "borderRadius",
  'borderWidth',
  'width',
  'height',
  "paddingHorizontal",
  "paddingVertical",
  "marginHorizontal",
  "marginVertical",
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'fontSize',
]

const scaleStyleObject = (containerParameters) => {
  for (const key in containerParameters) {
    if (styleKeysList.includes(key) && typeof containerParameters[key] === 'number') {
      containerParameters[key] = scale(containerParameters[key])
    }
  }
  return containerParameters;
}
export default scaleStyleObject;