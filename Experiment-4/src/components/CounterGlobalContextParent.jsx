import { useContext } from "react";
import { CounterContext } from "./context/CounterGlobalContextAPI";
import { Button, Box, Typography, Stack } from "@mui/material";

export default function CounterContextParent(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 6,
        p: 4,
        borderRadius: 3,
        background: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          fontWeight: 600,
          color: "#1b5e20",
        }}
      >
        {props.cno} : Global State (Context API)
      </Typography>

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#2e7d32",
        }}
      >
        {count}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          sx={{
            px: 3,
            backgroundColor: "#2e7d32",
            "&:hover": {
              backgroundColor: "#1b5e20",
            },
          }}
          onClick={() => setCount(count + 1)}
        >
          Increase
        </Button>

        <Button
          variant="outlined"
          sx={{
            px: 3,
            borderColor: "#2e7d32",
            color: "#2e7d32",
            "&:hover": {
              backgroundColor: "#e8f5e9",
              borderColor: "#1b5e20",
            },
          }}
          onClick={() => setCount(count - 1)}
        >
          Decrease
        </Button>
      </Stack>
    </Box>
  );
}
