import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const pages = [['Home', '/'], ['Products', '/products'], ['Add product', '/addProduct']] 
const loggedIn = ['Log out', '/products'];
const notLoggedIn = [['Log In', '/login'], ['Sign up', '/signup']];

function ResponsiveAppBar () {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleLogout = () => {
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("user")
  }

  return (<AppBar position="fixed">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          VATEZON
        </Typography>

        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon/>
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom', horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top', horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (<Link key={page[0]} to={page[1]}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page[0]}</Typography>
                </MenuItem>
              </Link>

            ))}
            {sessionStorage.getItem("token") ? 
            (<Link key={loggedIn[0]} to={loggedIn[1]}>
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center">{loggedIn[0]}</Typography>
                </MenuItem>
              </Link>
            ) : 
            notLoggedIn.map((page) => (<Link key={page[0]} to={page[1]}>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page[0]}</Typography>
              </MenuItem>
            </Link>
            ))
            }
          </Menu>
        </Box>
        <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}/>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          LOGO
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (<Link key={page[0]} to={page[1]}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page[0]}
              </Button>
            </Link>
          ))}
        </Box>
      </Toolbar>
    </Container>
  </AppBar>)
}

export default ResponsiveAppBar