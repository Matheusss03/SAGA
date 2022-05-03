import { View, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Auth } from 'aws-amplify'

const ProfileScreen = () => {
  const signOut = () => {
      Auth.signOut()
  }

  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.userInfoSection}>
      <View style={{flexDirection: 'row', marginTop: 15}}>
        <Avatar.Image 
          source={
            require('../../../assets/images/mitologia-grega.png')
          }
          size={80}
        />
        <View style={{marginLeft: 20}}>
          <Title style={[styles.title, {
            marginTop:15,
            marginBottom: 5,
          }]}>Matheus Pimenta</Title>
          <Caption style={styles.caption}>tester</Caption>
        </View>
      </View>
    </View>

    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name="email" color="#777777" size={20}/>
        <Text style={{color:"#777777", marginLeft: 20}}>ultra10vascaino@gmail.com</Text>
      </View>
    </View>

    <View style={styles.infoBoxWrapper}>
        <View style={[styles.infoBox, {
          borderRightColor: '#dddddd',
          borderRightWidth: 1
        }]}>
          <Title>25</Title>
          <Caption>
            <Image style={{ width: 20, height: 20, borderRadius: 10 }} source={require("../../../assets/store/moeda.png")}/>
          </Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>1</Title>
          <Caption>Nível</Caption>
        </View>
    </View>

    <View style={styles.menuWrapper}>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="bag-personal" color="#FF6347" size={25}/>
          <Text style={styles.menuItemText}>Inventário</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="clipboard-check-multiple-outline" color="#FF6347" size={25}/>
          <Text style={styles.menuItemText}>Adicionar Meta</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={() => {}}>
        <View style={styles.menuItem}>
          <Icon name="account-check-outline" color="#FF6347" size={25}/>
          <Text style={styles.menuItemText}>Editar Perfil</Text>
        </View>
      </TouchableRipple>
      <TouchableRipple onPress={signOut}>
        <View style={styles.menuItem}>
          <Icon name="exit-to-app" color="#FF6347" size={25}/>
          <Text style={styles.menuItemText}>Sair</Text>
        </View>
      </TouchableRipple>
    </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});