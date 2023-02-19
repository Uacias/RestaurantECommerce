import { Box, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount, setCount, addToBasket } from "../state";

const Dish = ({ dish, width }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [hover, setHover] = useState(false);
  const { name, price, image, category } = dish.attributes;
  const {
    data: {
      attributes: {
        formats: {
          small: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <img
          alt={dish.name}
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}
          loading="lazy"
        />

        <Box
          display={hover ? "block" : "none"}
          backgroundColor="rgba(255,255,255,0.77)"
          position="absolute"
          bottom="5%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center" borderRadius="2px">
              <IconButton
                onClick={() => {
                  dispatch(setCount(Math.max(count - 1, 1)));
                }}
                sx={{ color: "rgba(0,0,0,0.88)" }}
              >
                <RemoveIcon />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="h6" color="rgba(0,0,0,0.88)" marginTop="6px">
                {count}
              </Typography>
            </Box>
            <Box>
              <IconButton
                onClick={() => {
                  dispatch(setCount(Math.max(count + 1)));
                }}
                sx={{ color: "rgba(0,0,0,0.88)" }}
              >
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              onClick={() => {
                dispatch(addToBasket({ dish: { ...dish, count } }));
              }}
              sx={{ fontWeight: "bold", color: "rgba(0,0,0,0.8)" }}
            >
              Add to Basket
            </Button>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="h6" fontWeight="bold">
          ${price}
        </Typography>
      </Box>
    </Box>
  );
};

export default Dish;
