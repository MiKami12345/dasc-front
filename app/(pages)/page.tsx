import { Divider, Stack, Typography } from '@mui/material';

import axios from '@/app/(util)/axios';
import axiosOrigin from 'axios';
import { AxiosResponse } from 'axios';

const convert = require('xml-js');

export default async function TopPage() {
  return (
    <>
      <Stack p="30px" width="100%" spacing="25px">
        <Typography fontSize={24}>ようこそ</Typography>

        <Divider sx={{ width: '100%', borderBottomWidth: 2, mx: 'auto' }} />

        <Typography fontSize={24}>直近の結果</Typography>
      </Stack>
    </>
  );
}
