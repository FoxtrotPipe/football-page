import { Box, Container, Divider, Paper, Typography } from "@mui/material";

export interface TextSectionProps {
    title?: string | React.ReactElement,
    subtitle?: string | React.ReactElement,
    content?: string | React.ReactElement,
    divider?: boolean,
    center?: boolean,
    tinge?: string,
    variant?: 'default' | 'bar'
}

function TextSection({ title, subtitle, content, divider, center, tinge, variant = 'default' }: TextSectionProps) {
    return (
        <Box textAlign="left" sx={{ my: 3 }}>
            { variant == 'bar' ?
                title != null || subtitle != null ? 
                    <Paper
                        elevation={10}
                        sx={{
                            py: 2,
                            px: 5,
                            background: `
                                ${tinge != null ? `repeating-linear-gradient(135deg, ${tinge} 0px, ${tinge} 8px, transparent, transparent, transparent), ` : ''}
                                repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                            `
                            // border: '1px solid white'
                        }}
                    >
                        <Typography variant='h3' fontWeight="bold" color="primary">
                            { title }
                        </Typography>
                        <Typography variant='overline' color="primary.contrastText" sx={{ opacity: .8 }}>
                            { subtitle }
                        </Typography>
                    </Paper> : null 
                : <>
                    <Typography variant='h3' fontWeight="bold" color="primary">
                        { title }
                    </Typography>
                    <Typography variant='overline' color="primary.contrastText" sx={{ opacity: .8 }}>
                        { subtitle }
                    </Typography>
                </>
            }
            { divider ? 
                <Divider 
                    variant='fullWidth' 
                    color='white' 
                    sx={{ my: 3 }}
                /> : null
            }
            { center ?
                <Container maxWidth='lg'>
                    <Typography textAlign='justify' mt='10px' color="primary.contrastText" sx={{ opacity: .8 }}>
                        { content }
                    </Typography>    
                </Container> :
                <Typography textAlign='justify' mt='10px' color="primary.contrastText" sx={{ opacity: .8 }}>
                    { content }
                </Typography>    
            }   
        </Box>
    );
}

export default TextSection;