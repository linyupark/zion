import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import PasswordNumberInput from '../../components/password-input/number'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
        <PasswordNumberInput placeholder='请输入交易密码' onBlur={key => console.log('password', key)} />
      </View>
    )
  }
}
