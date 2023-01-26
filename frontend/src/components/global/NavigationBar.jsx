import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Badge, Box, IconButton, Typography } from "@mui/material";

const NavigationBar = () => {
  const navigate = useNavigate();
  // const useDispatch = useDispatch();

  return (
    <Box
      width="100%"
      height="64px"
      margin="auto"
      paddingX="16px"
      backgroundColor="rgba(0,0,0  ,0.85)"
      color="white"
      position="fixed"
      top="0"
      left="0"
      zIndex="1"
      display="flex"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        columnGap="20px"
      >
        <IconButton size="large" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Box>
          <Typography
            variant="h5"
            sx={{ "&:hover": { cursor: "pointer" } }}
            onClick={() => navigate("./")}
          >
            Restaurant
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        flexGrow="1"
        justifyContent="end"
        alignItems="center"
        columnGap="20px"
      >
        <IconButton size="large" color="inherit" aria-label="basket">
          <Badge badgeContent={0} showZero>
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
};

export default NavigationBar;
