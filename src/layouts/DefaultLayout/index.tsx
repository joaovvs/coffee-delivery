import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { ToastContainer } from 'react-toastify'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <ToastContainer />
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}
