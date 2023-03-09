import Menu from '@mui/material/Menu'
import { Box, IconButton } from '@mui/material'
import InnerMenu from '../Menu/Menu'
import DensityMediumIcon from '@mui/icons-material/DensityMedium'
import { useState } from 'react'

const HeaderBurger = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const openIt = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{ display: { xs: 'block', sm: 'block', lg: 'none' } }}>
      <IconButton sx={{ mr: 2 }} onClick={handleClick}>
        <DensityMediumIcon sx={{ color: '#79a1b0', fontSize: 40 }}></DensityMediumIcon>
      </IconButton>

      <Menu
        id='fade-menu'
        sx={{ display: { xs: 'block', sm: 'block', lg: 'none' } }}
        anchorEl={anchorEl}
        open={openIt}
        onClose={handleClose}
        onClick={handleClose}
      >
        <InnerMenu></InnerMenu>
      </Menu>
    </Box>
  )
}

export default HeaderBurger
