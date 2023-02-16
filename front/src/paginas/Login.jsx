import { useForm } from "../hooks/useForm";
import Swal from 'sweetalert2'
import { Image } from "@nextui-org/react";

import { Input, Grid, Row, Button, Text, Modal, useModal, Spacer } from "@nextui-org/react";
import { useContext,useState } from 'react'


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';

import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { useLogin } from "../hooks/useLogin";
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export const Login = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
      };
      const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
      };
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    
  const {Login}=useLogin()

   

    const { setVisible, bindings } = useModal();


    const { values, handleInputChange } = useForm({


        Password: '',
        Usuario: '',
        showPassword: false,
        Nombre: '',
        USER: '',

        ConfirmarPassword: '',
        EDAD: '',
        Telefono: ''








    });


    const handleLogin = (e) => {




        if (values.Usuario == '') {

            Swal.fire("Campo Usuario Obligatorio", "Mensaje:", "warning")
        }
        else if (values.Password == '') {

            Swal.fire("Campo Password Obligatorio", "Mensaje:", "warning")
        } else {
            console.log(values.Usuario,values.Password)
            Login(values.Usuario,values.Password)


        }





    }
    const handleSubmitUsuario = (e) => {




        if (values.Password != values.ConfirmarPassword) {

            Swal.fire("Las contraseñas no coincidem", "Mensaje:", "warning")
        }
        else if (values.Usuario == '') {

            Swal.fire("Campo Usuario Obligatorio", "Mensaje:", "warning")
        } else {

            
        }

    }
    const Limpiar = (e) => {

        console.log("aqui?")




        values.Nombre = ''
        values.Usuario = ''
        values.Password = ''
        values.EDAD = ''
        values.ConfirmarPassword = ''
        values.Telefono = ''

    }

    return (


        <div class="body">

<AppBar position="static">
      <Container maxWidth="10px">
        <Toolbar disableGutters>
    

          <Box sx={{ flexGrow: 1, display: { xs: '6', md: '10' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: '10' },
              }}
            >
              
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography >Crear Usuario</Typography>

                  <Typography >Crear Usuario</Typography>
                </MenuItem>
             
            </Menu>
          </Box>
          

         
        </Toolbar>
      </Container>
    </AppBar>

            <Grid.Container gap={1} justify="center" align="center" bordered={2}>

                <Image src="https://github.com/Juandi22001/ImagenesAYD1/blob/main/registroLogo/16.png?raw=true" width={500}
                    height={300} alt="efe?" />
                <Row justify="center" align="center">







                    <form id="form" >

                        <Grid >

                            <Input
                                bordered
                                labelPlaceholder="Usuario" color="primary"
                                id="Usuario" name="Usuario" value={values.Usuario}
                                onChange={handleInputChange}


                            />

                        </Grid>


                        <Grid >

                            <Input
                                id="filled-adornment-password"
                                type='password'
                                bordered
                                color="primary" placeholder=" Contraseña"
                                value={values.Password} name="Password" onChange={handleInputChange}


                            />

                        </Grid>

                        <Row justify="space-around" align="center">

                            <Grid css={{ m: 10 }}>
                                <Button auto ghost color="primary" onClick={() => handleLogin()} >
                                    Login
                                </Button>
                            </Grid>
                        

                        </Row>

                    </form>

                </Row>
            </Grid.Container>


        </div >




    )
}
/*

hola como esas 
*/