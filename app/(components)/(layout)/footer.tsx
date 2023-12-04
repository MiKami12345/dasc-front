'use client';

import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import { Home, ColorLens, SettingsAccessibility, VideoCameraBack, School } from '@mui/icons-material';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Footer() {
  const pathname = usePathname();

  const footerButtonsList = [
    { label: 'トップ', icon: <Home />, link_to: '/' },
    { label: '色覚検査', icon: <ColorLens />, link_to: '/color' },
    { label: '反射神経', icon: <SettingsAccessibility />, link_to: '/reflexes' },
    { label: '画像分析', icon: <VideoCameraBack />, link_to: '/image' },
    { label: '知識問題', icon: <School />, link_to: '/questions' },
  ];

  const footerButtons = footerButtonsList.map((elm) => {
    return (
      <BottomNavigationAction
        key={elm.label}
        value={elm.link_to}
        label={
          <Typography fontSize={14} marginX={'-10px'}>
            {elm.label}
          </Typography>
        }
        icon={elm.icon}
        LinkComponent={Link}
        href={elm.link_to}
      />
    );
  });

  return (
    <Box sx={{ pb: 10 }}>
      <Stack justifyContent="center" alignItems="center">
        <Container sx={{ position: 'fixed', bottom: 0, px: 0, zIndex: 5 }} maxWidth="xs">
          <Paper sx={{ px: 0 }}>
            <BottomNavigation
              showLabels
              value={pathname}
              children={footerButtons}
              sx={{ bgcolor: '#CDE8E1' }}
            />
          </Paper>
        </Container>
      </Stack>
    </Box>
  );
}
