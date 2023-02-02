import { Box, Typography, IconButton, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount, setCount, addToBasket } from "../state";

const Dish = ({ dish, width }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const { name, price, image, category } = dish.attributes;
  const {
    data: {
      attributes: {
        formats: {
          medium: { url },
        },
      },
    },
  } = image;

  return (
    <Box width={width}>
      <Box position="relative">
        <img
          alt={dish.name}
          width="300px"
          height="300px"
          src={`https://localhost:1337${url}`}
        />
        <Box
          display="block"
          position="absolute"
          bottom="10%"
          left="0"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            <Box
              display="flex"
              alignItems="center"
              backgroundColor="red"
              borderRadius="2px"
            >
              <IconButton
                onClick={() => {
                  dispatch(setCount(Math.max(count - 1, 1)));
                }}
              >
                <RemoveIcon />
              </IconButton>
            </Box>
            <Box>
              <Typography variant="h5" color="white" fontWeight="bold">
                {count}
              </Typography>
            </Box>
            <Box>
              <IconButton
                onClick={() => {
                  dispatch(setCount(Math.max(count + 1)));
                }}
              >
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              onClick={() => {
                dispatch(addToBasket({ dish: { ...dish, count } }));
              }}
              sx={{ backgroundColor: "blue" }}
            >
              Add to Basket
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dish;
