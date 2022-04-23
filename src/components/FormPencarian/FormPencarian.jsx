import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
  } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

  const styles = {
    contentUtama: {
      width: '90%',
      backgroundColor: 'white',
      border: '1px solid #ccc',
      marginTop: '-35px',
      borderRadius: '8px',
      padding: 5,
    },
  };

  function FormPencarian() {
      const navigate = useNavigate()
    return (
      <Container maxWidth="xl" sx={{ display: 'flex', alignitems: 'center'}}>
        <Box sx={styles.contentUtama}>
          <Grid
            container
            spacing={2}
            alignItems="flex-end"
            justifyContent="center"
          >
            <Grid item xs>
              <Typography variant="caption">Tipe Driver</Typography>
              <TextField
                size="small"
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </Grid>
            <Grid item xs>
              <Typography variant="caption">Tanggal</Typography>
              <TextField
                size="small"
                id="my-input"
                aria-describedby="my-helper-text"
                />
            </Grid>
            <Grid item xs>
              <Typography variant="caption">Waktu Jemput/Ambil</Typography>
              <TextField
                size="small"
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </Grid>
            <Grid item xs>
              <Typography variant="caption">
                Jumlah Penumpang(optional)
              </Typography>
              <TextField
                size="small"
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </Grid>
            <Grid item xs>
              <Button variant="contained" onClick={() =>navigate("/search")}>Cari Mobil</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    );
  }

  export default FormPencarian;