import { Grid, Icon, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import Mask from "./Mask";
import ImageSection from "./ImageSection";

import soccer from '../assets/soccer.png';

function Footer() {
    return (
        <Grid 
            component='footer'
            container 
            pt={10}
            pb={5}
            flexDirection='column'
            rowSpacing={1}
            alignItems='center'
            justifyContent='space-between'
            position='relative'
            overflow='hidden'
        >
            <Mask
                width='400px'
                bottom='-200px'
                opacity={.5}
            >
                <ImageSection
                    src={soccer}
                />
            </Mask>
            <Grid item zIndex={2}>
                <Typography 
                    color='white'
                    sx={{ textShadow: '0px 0px 10px black' }}
                >
                    2024 By Blake Tam
                </Typography>
            </Grid>
            <Grid item zIndex={2}>
                <Stack spacing={1} direction='row'>
                    <Icon 
                        component='a' 
                        href='https://www.linkedin.com/in/blaketam' 
                        sx={{ 
                            color: 'white', 
                            opacity: .5,
                            transition: 'all .2s',
                            ':hover': {
                                color: 'white',
                                opacity: 1
                            }
                        }}
                    >
                        <LinkedInIcon/>
                    </Icon>
                    <Icon
                        component='a' 
                        href='mailto:cstamac@connect.ust.hk' 
                        sx={{ 
                            color: 'white',
                            opacity: .5,
                            transition: 'all .2s',
                            ':hover': {
                                color: 'white',
                                opacity: 1
                            }
                        }}
                    >
                        <EmailIcon/>
                    </Icon>
                </Stack>
            </Grid>
        </Grid>
    )
}

export default Footer;