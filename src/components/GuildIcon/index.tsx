import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  guildId: string;
  iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = 'https://cdn-icons-png.flaticon.com/512/2111/2111370.png';
  return (
    <Image style={styles.image} source={{ uri }} resizeMode="cover" />
  );
}
