import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

export default StyleSheet.create({
  font: {
    fontFamily: 'Helvetica Neue',
    fontWeight: 'normal',
    fontSize: 16,
    color: '#333333',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  wrapperForNavigator: {
    marginTop: 64,
    justifyContent: 'flex-start',
  },
  wrapperForTabBarNavigation: {
    marginBottom: 49,
  },
  container: {
    paddingRight: 15,
    paddingLeft: 15,
  },
  button: {
    padding: 12,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  buttonPrimary: {
    backgroundColor: '#40AE10',
  },
  buttonSecondary: {
  },
  buttonTertiary: {
  },
  buttonNegative: {
    backgroundColor: '#AAAAAA',
  },
  buttonDanger: {
    backgroundColor: '#BF0712',
  },
  textBox: {

  },
  list: {
    
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 40,
    paddingRight: 10,
    paddingLeft: 10,
  },
});
