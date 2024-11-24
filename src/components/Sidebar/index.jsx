import React from 'react'
import { Container, Content } from './styles'
import {
  FaTimes,
  FaHome,
  FaArrowCircleLeft,
  FaUserPlus,
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const isManager = user?.role === 'manager'

  const closeSidebar = () => {
    active(false)
  }

  const handleLogout = () => {
    signOut()
    navigate('/')
    closeSidebar()
  }

  return (
      <Container sidebar={active}>
        <FaTimes onClick={closeSidebar} />
        <Content>
          <SidebarItem Icon={FaHome} Text="Home" to="/home"/>
          {isManager && (
              <SidebarItem Icon={FaUserPlus} Text="Cadastrar Usuários" to="/signup"/>
          )}
          <div onClick={handleLogout} style={{ cursor: 'pointer' }}>
            <SidebarItem Icon={FaArrowCircleLeft} Text="Logout" />
          </div>
        </Content>
      </Container>
  )
}

export default Sidebar