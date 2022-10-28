import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image from "../images/왕짬뽕.jpg";
import { Margin } from '@mui/icons-material';
import logo from "../images/로고1.png";
import "../styles/LogincopyDR.scss";


function Copyright(props) {
  return (
    <></>
  );
}

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main"  sx={{ height: '90vh' , width:'140vh'}} >
        {/* 위 그리드 sx에서 사이즈 조정 */}
        <CssBaseline />
        <Grid 
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${image})`, // 좌측 배경사진
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square
        >
          <Box className='centerbox' // scss에서 회원가입 박스 위치 조정
            sx={{
              my: 8,
              mx: 20,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.light' }}> */}
              <img src={logo}></img>
              {/* <LockOutlinedIcon />  */}
              {/* 회원가입 위 아이콘 수정자리 */}
            {/* </Avatar> */}
            <Typography component="h1" variant="h5">
              회원가입
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <TextField
               autoComplete="given-name"
               name="firstName"
               required
               fullWidth
               id="firstName"
               label="이름입력"
               autoFocus
              />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="성씨 입력"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일 주소"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color='secondary'
                sx={{ mt: 3, mb: 2 }}
              >
                회원가입
              </Button>
              <Grid container>
                
                <Grid item>
                  <Link href="#" variant="body2">
                    {"아이디가 없나요? 회원가입하기"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}