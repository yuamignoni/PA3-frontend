import React from 'react'
import { Container, Content } from './styles'
import { 
  FaTimes, 
  FaHome, 
  FaArrowCircleLeft, 
  FaUserPlus,
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaHome} Text="Home" to="/home"/>
        <SidebarItem Icon={FaUserPlus} Text="Cadastrar Usuários" to="/signup"/>
        <SidebarItem Icon={FaArrowCircleLeft} Text="Logout" to="/signin"/>
      </Content>
    </Container>
  )
}

export default Sidebar