import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'

//Form Validation
import * as Yup from "yup"

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4,'It should be atleast 4').max(16,'It can be atmost 16').required('Required field')
})

export default function App() {

  const [password, setPassword] = useState('')
  const [isPassGenerated, setIsPassGenerated] = useState(false)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(false)  
  const [symbols, setSymbols] = useState(false)

  const generatePasswordString = (passwordLength:number) => {
    //
  }

  const createPassword = (characters: string, passwordLength: number) => {
    //
  }
  
  const resetPasswordState = () => {
    //
  }


  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})