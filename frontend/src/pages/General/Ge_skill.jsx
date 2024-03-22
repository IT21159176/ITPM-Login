import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Ge_Header from './Ge_Component/Ge_Header';
import LabelBottomNavigation from '../../Components/bottom' ;





const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2 ,marginTop:'10px', marginLeft:'10px',
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
}));


const lightTheme = createTheme({ palette: { mode: 'dark' } });

export default function Elevation() {
  return (
    <>
    <Ge_Header />
    <LabelBottomNavigation />
    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid item xs={6} key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 12,
                borderRadius: 2,
                bgcolor: 'background.default',
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 2,
              }}
            >
              {[ 1, 2, 3, 4, 5, 6, 7, 8, ].map((elevation) => (
                <Item key={elevation} elevation={elevation}>
                  {`elevation=${elevation}`}
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
    </>
  );
}