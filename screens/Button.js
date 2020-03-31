/* Switch Button Component class
 */
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const getIcon = (type, active) => {
    let icn;
    switch (type) {
    case 'Open':
        icn = active
            ? require('../assets/active/notstarted.png')
            : require('../assets/inactive/notstarted.png');
        break;
    case 'In Progress':
        icn = active 
            ? require('../assets/active/inprogress.png')
            : require('../assets/inactive/inprogress.png');
        break;
    case 'Complete':
        icn = active
            ? require('../assets/active/complete.png')
            : require('../assets/inactive/complete.png');
        break;
    }
    return icn;
};

const Button = props => {
    return (
        <View>
            <TouchableOpacity
                onPress={props.onPress}
                style={styles.buttonStyle}
            >
                <Image source={getIcon(props.type, props.active)} />
            </TouchableOpacity>
        </View>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    active: PropTypes.bool,
    onPress: PropTypes.func
};

Button.defaultProps = {
    active: false
};

export default Button;
