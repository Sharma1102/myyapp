import React from 'react';
import { Platform } from 'react-native';
import MobileNavigator from './MobileNavigator';
import WebNavigator from './WebNavigator.web';

const MainNavigator: React.FC = () => {
  if (Platform.OS === 'web') {
    return <WebNavigator />;
  } else {
    return <MobileNavigator />;
  }
};

export default MainNavigator;
