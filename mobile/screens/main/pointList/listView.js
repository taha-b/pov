import { useEffect, useState } from 'react';
import { View, Image, Pressable } from 'react-native';
import { Divider, List, ListItem, Layout } from '@ui-kitten/components';
import { getPoints } from "../../../functions/points"


export default Points = ({ points, navigate }) => {
 

  const renderItem = ({ item }) => (
    <View style={{ backgroundColor: "white" }}>
      {item.imgUrl ? <Pressable onPress={() => navigate(item)}><Image
        source={{ uri: item.imgUrl }}
        style={{
          width: 70,
          height: 70,
          position: "absolute",
          zIndex: 1,
          borderRadius: 20,
          marginTop: 5
        }}
        resizeMode="contain"
      /></Pressable> : null}


      <ListItem
        onPress={() => navigate(item)}
        style={{ height: 80, marginLeft: 80 }}
        title={item.name}
        description={item.desc}
      />
    </View>
  );

  return (
    <View>
      <List
        style={{ height: "100%" }}
        data={points}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </View>
  );
};


