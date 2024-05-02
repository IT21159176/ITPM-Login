import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const BusDashboardPage = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 5 }}>
      <Typography variant="h3" gutterBottom>
        Business Analytics Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#f9c5d1' }}>
            <Typography variant="h6" gutterBottom>
              Total Sales
            </Typography>
            <Typography variant="h4" gutterBottom>
              $10,000
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#bee5d3' }}>
            <Typography variant="h6" gutterBottom>
              Total Customers
            </Typography>
            <Typography variant="h4" gutterBottom>
              50
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#c9daf8' }}>
            <Typography variant="h6" gutterBottom>
              Revenue
            </Typography>
            <Typography variant="h4" gutterBottom>
              $15,000
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ p: 2, textAlign: 'center', backgroundColor: '#fad3cf' }}>
            <Typography variant="h6" gutterBottom>
              Profit
            </Typography>
            <Typography variant="h4" gutterBottom>
              $5,000
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ mt: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Sales Chart
          </Typography>
          {/* Replace this with your sales chart component */}
          <img src="https://queenbeemedia.co/wp-content/uploads/2021/03/Picture4-1080x675.jpg" alt="Sales Chart" style={{ width: '50%' }} />
        </Paper>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h5" gutterBottom>
            Customer Acquisition
          </Typography>
          {/* Replace this with your customer acquisition component */}
          <img src="https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2022/01/img_61d47ef61df22.png" alt="Customer Acquisition" style={{ width: '70%' }} />
        </Paper>
      </Box>
    </Box>
  );
}

export default BusDashboardPage;
