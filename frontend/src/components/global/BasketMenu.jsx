import { Box, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { fontSize } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";

import { setIsBasketVisible } from "../../state";

const BasketMenu = () => {
  const dispatch = useDispatch();
  const isBasketVisible = useSelector((state) => state.basket.isBasketVisible);

  return (
    <Box
      display={isBasketVisible ? "block" : "none"}
      position="fixed"
      zIndex={5}
      width="100%"
      height="100%"
      left="0"
      top="0"
      overflow="auto"
      backgroundColor="rgba(0, 0, 0, 0.5)"
    >
      <Box
        display="flex"
        flexDirection="column"
        position="fixed"
        width="max(40%, 325px)"
        height="100%"
        top="0"
        right="0"
        overflow="auto"
        padding="16px"
        backgroundColor="rgba(0,0,0, 0.95)"
      >
        {/* TOP  */}
        <Box
          width="100%"
          height="50px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h3" color="white">
            Shopping Basket
          </Typography>
          <IconButton
            caria-label="close"
            size="large"
            onClick={() => {
              dispatch(setIsBasketVisible({}));
            }}
          >
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default BasketMenu;
