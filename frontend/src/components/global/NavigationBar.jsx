import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
const NavigationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="basket"
            sx={{ mr: 2 }}
          >
            <ShoppingBasketIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
