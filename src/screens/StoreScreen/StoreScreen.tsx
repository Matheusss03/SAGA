import {View, FlatList, StyleSheet, ListRenderItemInfo} from 'react-native'
import React from 'react'

import { Loja, storeList } from "../../../data/store"
import CustomHeaderLoja from "../../components/CustomHeaderLoja/CustomHeaderLoja"
import StoreItem from "../../components/StoreItem/StoreItem"
import { SeparatorItem } from '../../components/SeparatorItem/SeparatorItem'

const StoreScreen = () => {

  function renderItem({ item }: ListRenderItemInfo<Loja>) { 
    return <StoreItem {...item}/>
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={CustomHeaderLoja}
        ItemSeparatorComponent={SeparatorItem}
        data={storeList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export default StoreScreen