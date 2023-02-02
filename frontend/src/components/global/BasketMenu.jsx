import { Box, Typography, IconButton, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { setIsBasketVisible } from "../../state";
import { decreaseCount, increaseCount } from "../../state";

const BasketMenu = () => {
  const dispatch = useDispatch();
  const isBasketVisible = useSelector((state) => state.basket.isBasketVisible);
  const basket = useSelector((state) => state.basket.basket);

  const total = basket.reduce((price, item) => {
    return (price += item.attributes.price * item.count);
  }, 0);

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
        width="max(30%, 325px)"
        height="100%"
        top="0"
        right="0"
        overflow="auto"
        padding="16px"
        backgroundColor="rgba(0,0,0, 0.95)"
      >
        {/* TOP */}
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom="1px solid white"
        >
          <Typography variant="h3" color="white">
            Your Shopping Basket
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
        {/* TOP END */}

        {/* INDIVIDUAL DISH ORDER */}
        <Box>
          {basket.map((dish) => {
            return (
              // wrapper for individual order
              <Box
                key={`${dish.id}_${dish.attributes.name}`}
                sx={{
                  border: "2px solid red",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                {/* Image of product */}
                <Box>
                  <Avatar
                    alt={`${dish.attributes.name}`}
                    sx={{ width: 56, height: 56 }}
                    src={`http://localhost:1337${dish?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                  />
                </Box>
                {/* Name of product */}
                <Box>
                  <Typography variant="h5" fontWeight="bold" color="white">
                    {dish.attributes.name}
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    onClick={() => {
                      dispatch(decreaseCount({ id: dish.id }));
                    }}
                  >
                    <RemoveIcon />
                  </IconButton>
                </Box>
                <Box>
                  <Typography variant="h5" color="white" fontWeight="bold">
                    {dish.count}
                  </Typography>
                </Box>
                <Box>
                  <IconButton
                    onClick={() => {
                      dispatch(increaseCount({ id: dish.id }));
                    }}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              </Box>
            );
          })}
        </Box>
        {/* BOTTOM - USER ACTIONS */}

        <Box display="flex" alignItems="center" justifyContent="center">
          <Typography variant="h5" color="white" mt={6} fontWeight="bold">
            Total price: {`${total}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BasketMenu;
