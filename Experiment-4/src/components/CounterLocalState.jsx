import { useState } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";

export default function LocalStateCounter({ cno }) {
  const [count, setCount] = useState(0);

  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 6,
        p: 4,
        borderRadius: 3,
        background: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
        boxShadow: "0 10px 26px rgba(0,0,0,0.12)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: "#006064",
        }}
      >
        {cno} : Local State
      </Typography>

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#00838f",
        }}
      >
        {count}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          sx={{
            px: 3,
            backgroundColor: "#00838f",
            "&:hover": {
              backgroundColor: "#006064",
            },
          }}
          onClick={increaseCount}
        >
          Increase
        </Button>

        <Button
          variant="outlined"
          sx={{
            px: 3,
            borderColor: "#00838f",
            color: "#00838f",
            "&:hover": {
              backgroundColor: "#e0f7fa",
              borderColor: "#006064",
            },
          }}
          onClick={decreaseCount}
        >
          Decrease
        </Button>
      </Stack>
    </Box>
  );
}
