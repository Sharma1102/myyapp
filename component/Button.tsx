import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent } from "react-native";

interface ButtonProps {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: 'red',
                padding: 12,
                borderRadius: 5,
                alignItems: 'center'
            }}
            onPress={onPress}
        >
            <Text
                style={{
                    color: 'white',
                    fontWeight: '500',
                    fontSize: 18,
                }}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;
