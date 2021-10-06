import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

type Props = {
  guildId?: string;
  iconId?: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
  const uri = 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-icone.png';
  return (
    <Image style={styles.image} source={{ uri }} resizeMode="cover" />
  );
}
