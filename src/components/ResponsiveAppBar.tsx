import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Link } from 'react-router-dom';

const pages = [
  // { name: 'Fav matches', url: '/fav-matches' }, { name: 'Best moments', url: '/best-moments' }, { name: 'Fav players', url: '/fav-players' }
  { name: 'Fav matches', url: '/' }, { name: 'Best moments', url: '/best-moments' }, { name: 'Fav players', url: '/fav-players' }
];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
   <AppBar 
    elevation={0}
    variant="outlined"
    position="static"
    sx={{ color: 'white', backgroundColor: 'transparent' }}
  >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/'>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'primary.contrastText',
                textDecoration: 'none',
                alignItems: 'center',
                transition: 'all .2s',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <SportsSoccerIcon 
                className='rotate'
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} 
              />
              Football Tier List
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.url}>
                    <Typography textAlign="center">{page.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link to='/'>
            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'primary.contrastText',
                textDecoration: 'none',
                transition: 'all .2s',
                ':hover': {
                  transform: 'scale(1.05)'
                }
              }}
            >
              <SportsSoccerIcon 
                className='rotate' 
                sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} 
              />
              Football Tier List
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link key={page.name} to={page.url}>
                <Button
                  variant="outlined"
                  onClick={handleCloseNavMenu}
                  sx={{ my: 3, mx: 2, color: 'gray', display: 'block', ':hover': { color: 'white' } }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
