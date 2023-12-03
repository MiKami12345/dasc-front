'use client';

import { Stack, Typography, IconButton, createTheme, ThemeProvider } from '@mui/material';

export function Header() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{ px: '20px', bgcolor: '#50ffb0' }}
      height="80px"
    >
      <Typography fontSize={32} color="black">
        運転能力チェッカー
      </Typography>
      <IconButton />
    </Stack>
  );
}
