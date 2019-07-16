import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
border-radius: 4px;
width: 200px;
height: 48px;
padding: 10px;
cursor: pointer;
font-size: 18px;
`
const ButtonFilled = styled(Button)`
  background-color: #02C874;
  color: #FFFFFF;
  `

const ButtonGhost = styled(Button)`
  background-color: #FFFFFF;
  border: 1px solid #6A6A6A;
  color: #6A6A6A;   
`
const TextButton = styled.button`
  line-height: 28px;
  color: #29BAFF;
  font-size: 18px;
  padding: 0;
  border: none;
  border-bottom: 1px dashed #29BAFF;
  `

interface IButtonProps { 
  type: string,  
  url: string,
  value: string,
  size: string
}
export const ButtonComponent = ({ type, url, value, size}: IButtonProps) => {
  switch(type) {
    case "filled":
      return <ButtonFilled>{value}</ButtonFilled>
    case "ghost":
      return <ButtonGhost>{value}</ButtonGhost>
    case "text":
        return <TextButton>{value}</TextButton>
    default:
        return <ButtonGhost>{value}</ButtonGhost>
        }
}

export default ButtonComponent
