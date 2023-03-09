import { Box } from '@mui/material'
import InnerMenu from '../Menu/Menu'

const HeaderMenu = () => {
  return (
    <Box sx={{ display: { xs: 'none', sm: 'none', lg: 'block' } }}>
      <InnerMenu></InnerMenu>
    </Box>
  )
}
export default HeaderMenu
