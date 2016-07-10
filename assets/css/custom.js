import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "html": {
        "position": "relative",
        "minHeight": "100%"
    },
    "body": {
        "marginBottom": 50,
        "paddingTop": 50
    },
    "template-heading": {
        "paddingTop": 40,
        "paddingRight": 15,
        "paddingBottom": 40,
        "paddingLeft": 15
    },
    "bottomHand": {
        "position": "fixed",
        "bottom": 10,
        "width": "100%"
    },
    "bottomCards": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "width": "100%"
    },
    "topCards": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "width": "100%"
    },
    "leftHand": {
        "position": "fixed",
        "left": -15,
        "top": 0,
        "height": "100%"
    },
    "leftCards": {
        "WebkitTransform": "rotate(90deg)",
        "MozTransform": "rotate(90deg)",
        "OTransform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "transform": "rotate(90deg)",
        "display": "flex",
        "alignItems": "center",
        "height": "100%"
    },
    "topHand": {
        "position": "fixed",
        "top": 60,
        "width": "100%"
    },
    "rightHand": {
        "position": "fixed",
        "right": -15,
        "top": 0,
        "height": "100%"
    },
    "rightCards": {
        "WebkitTransform": "rotate(270deg)",
        "MozTransform": "rotate(270deg)",
        "OTransform": "rotate(270deg)",
        "MsTransform": "rotate(270deg)",
        "transform": "rotate(270deg)",
        "display": "flex",
        "alignItems": "center",
        "height": "100%"
    },
    "innerPlayArea": {
        "position": "fixed"
    },
    "innerPlayArea > div": {
        "position": "absolute"
    },
    "innerPlayArea > div:nth-child(2)": {
        "WebkitTransform": "rotate(90deg)",
        "MozTransform": "rotate(90deg)",
        "OTransform": "rotate(90deg)",
        "MsTransform": "rotate(90deg)",
        "transform": "rotate(90deg)"
    },
    "innerPlayArea > div:nth-child(3)": {
        "WebkitTransform": "rotate(180deg)",
        "MozTransform": "rotate(180deg)",
        "OTransform": "rotate(180deg)",
        "MsTransform": "rotate(180deg)",
        "transform": "rotate(180deg)"
    },
    "innerPlayArea > div:nth-child(4)": {
        "WebkitTransform": "rotate(270deg)",
        "MozTransform": "rotate(270deg)",
        "OTransform": "rotate(270deg)",
        "MsTransform": "rotate(270deg)",
        "transform": "rotate(270deg)"
    },
    "playContainer": {
        "WebkitBoxShadow": "0px 0px 39px 2px rgba(0,0,0,0.75)",
        "MozBoxShadow": "0px 0px 39px 2px rgba(0,0,0,0.75)",
        "boxShadow": "0px 0px 39px 2px rgba(0,0,0,0.75)",
        "position": "relative",
        "marginTop": 4,
        "marginRight": "auto",
        "marginBottom": 2,
        "marginLeft": "auto",
        "border": "solid 1px lightgrey",
        "borderRadius": 10,
        "width": 500,
        "background": "linear-gradient(to bottom,  rgba(69,72,77,1) 0%,rgba(0,0,0,1) 100%)",
        "filter": "progid:DXImageTransform.Microsoft.gradient( startColorstr='#45484d', endColorstr='#000000',GradientType=0 )"
    },
    "playContainer>padded-box>h3": {
        "textAlign": "center"
    },
    "playContainer>padded-box>form": {
        "textAlign": "center"
    },
    "playContainer>padded-box": {
        "marginTop": 1,
        "marginRight": 1,
        "marginBottom": 1,
        "marginLeft": 1
    },
    "starter-template": {
        "textAlign": "center"
    },
    "playersTxt": {
        "paddingLeft": 1,
        "marginLeft": 1,
        "display": "inline",
        "width": "auto"
    },
    "startBtn": {
        "marginTop": 1
    },
    "h1": {
        "color": "lightgrey"
    },
    "p": {
        "color": "lightgrey"
    },
    "h3": {
        "color": "lightgrey"
    },
    "playContainer>padded-box>form>p": {
        "color": "lightgrey",
        "display": "inline"
    }
});