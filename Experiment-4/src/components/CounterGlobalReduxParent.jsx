import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography, Stack } from "@mui/material";

export default function CounterReduxParent(props) {
  // Read state from Redux store
  const count = useSelector((state) => state.count);

  // Dispatch actions
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        maxWidth: 500,
        mx: "auto",
        mt: 6,
        p: 4,
        borderRadius: 3,
        background: "linear-gradient(135deg, #ede7f6, #d1c4e9)",
        boxShadow: "0 10px 26px rgba(0,0,0,0.12)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 600,
          color: "#4527a0",
        }}
      >
        {props.cno} : Global State (Redux)
      </Typography>

      <Typography
        variant="h4"
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "#5e35b1",
        }}
      >
        {count}
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          variant="contained"
          sx={{
            px: 3,
            backgroundColor: "#5e35b1",
            "&:hover": {
              backgroundColor: "#4527a0",
            },
          }}
          onClick={() => dispatch({ type: "INCREMENT" })}
        >
          Increase
        </Button>

        <Button
          variant="outlined"
          sx={{
            px: 3,
            borderColor: "#5e35b1",
            color: "#5e35b1",
            "&:hover": {
              backgroundColor: "#ede7f6",
              borderColor: "#4527a0",
            },
          }}
          onClick={() => dispatch({ type: "DECREMENT" })}
        >
          Decrease
        </Button>
      </Stack>
    </Box>
  );
}
