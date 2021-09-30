import React from 'react';
import {
  Text, View, Image, TouchableOpacity, TouchableOpacityProps,
} from 'react-native';

import { styles } from './styles';

import Discording from '../../assets/discord.png';

type Props = TouchableOpacityProps & {
  title: string,
}

export function ButtonIcon({ title, ...rest }: Props) {
  return (
    <TouchableOpacity 
      style={styles.container}
      {...rest} 
      >

      <View style={styles.iconWrapper}>
        <Image source={Discording} style={styles.icon} />
      </View>

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
