import React from 'react';
import {View} from 'react-native';

type Props = {
    height?: number,
    width?: number,
    flex?: number
}

const Spacer = (props: Props) => {
    const styles = {};
    if (props.height) {
        styles.height = props.height;
    }
    if (props.width) {
        styles.width = props.width;
    }
    if (props.flex) {
        styles.flex = props.flex;
    }

    return <View style={styles}/>;
};

export default Spacer;
