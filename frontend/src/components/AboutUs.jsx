import { Box, Typography } from "@mui/material";

const AboutUs = () => {
  return (
    <Box width="75%" margin="40px auto" sx={{ textAlign: "center" }}>
      <Typography variant="h2" sx={{ padding: "16px" }}>
        About us
      </Typography>
      <Box margin="0 auto">
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          {/* IMG LEFT*/}
          <Box
            width={{ xs: "100%", sm: "50%" }}
            sx={{ width: "100%", minHeight: "20px" }}
          >
            <Typography variant="h5">image</Typography>
          </Box>

          {/* Description */}
          <Box
            width={{ xs: "100%", sm: "50%" }}
            sx={{ width: "100%", minHeight: "20px" }}
          >
            <Typography variant="h5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              sint alias vitae soluta voluptates assumenda nobis laborum rerum
              aut ullam modi et aperiam qui sit quasi maiores doloribus
              quibusdam dolore totam recusandae ratione, quam ipsam. Repellat
              sunt nihil sit, fugit optio quae rerum molestias, architecto quam
              harum, amet aliquam sapiente voluptate fugiat! Sit possimus
              suscipit consequatur a neque! Iste consequatur accusamus
              cupiditate aperiam ut, similique dolores? Veritatis et saepe
              officiis omnis fuga? Vitae, officia dolor! Cum numquam ducimus
              accusantium atque voluptas neque vitae dolor? Molestias fugit
              itaque, maxime assumenda id, veritatis debitis odio soluta,
              commodi suscipit magni nisi animi quas.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection={{ xs: "column", sm: "row" }}>
          {/* IMG LEFT*/}
          <Box
            width={{ xs: "100%", sm: "50%" }}
            sx={{ width: "100%", minHeight: "20px" }}
          >
            <Typography variant="h5">image</Typography>
          </Box>

          {/* Description */}
          <Box
            width={{ xs: "100%", sm: "50%" }}
            sx={{ width: "100%", minHeight: "20px" }}
          >
            <Typography variant="h5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
              sint alias vitae soluta voluptates assumenda nobis laborum rerum
              aut ullam modi et aperiam qui sit quasi maiores doloribus
              quibusdam dolore totam recusandae ratione, quam ipsam. Repellat
              sunt nihil sit, fugit optio quae rerum molestias, architecto quam
              harum, amet aliquam sapiente voluptate fugiat! Sit possimus
              suscipit consequatur a neque! Iste consequatur accusamus
              cupiditate aperiam ut, similique dolores? Veritatis et saepe
              officiis omnis fuga? Vitae, officia dolor! Cum numquam ducimus
              accusantium atque voluptas neque vitae dolor? Molestias fugit
              itaque, maxime assumenda id, veritatis debitis odio soluta,
              commodi suscipit magni nisi animi quas.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
