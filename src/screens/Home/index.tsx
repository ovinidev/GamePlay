/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';

import { AuthRoutesProps } from '../../routes/auth.routes';

type Props = {
  navigation: NavigationProp<AuthRoutesProps>
}

export function Home({ navigation }: Props) {
  const [category, setCategory] = useState('');

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40',
      description: 'vamo jogar',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'lendarios',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 as 20:40',
      description: 'vamo jogar',
    },
    
  ];

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleAppointmentsDetails() {
    navigation.navigate('AppointmentDetails');
  }

  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      <View style={styles.content}>
        <ListHeader
          title={'Partidas agendadas'}
          subtitle={'Total 6'} />

        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointment 
              data={item} 
              onPress={handleAppointmentsDetails}
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Background>
  );
}
