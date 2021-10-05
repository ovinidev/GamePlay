/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import { styles } from './styles';

import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Appointment } from '../../components/Appointment';
import { ListDivider } from '../../components/ListDivider';

export function Home() {
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

  return (
    <View>
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
            <Appointment data={item} />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
