import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Divider, Grid, Paper, Skeleton } from '@mui/material';

import projectPic from "../assets/project.png";
import demoVideo from "../assets/demo720p.mp4";

function TextSection(props: { title: string, subtitle: string, content: string }) {
    const { title, subtitle, content } = props;

    return (
        <Box textAlign="left">
            <Typography variant='h3' fontWeight="bold" color="primary">
                { title }
            </Typography>
            <Typography variant='overline'>
                { subtitle }
            </Typography>
            <Typography textAlign='justify' mt='10px'>
                { content }
            </Typography>
        </Box>
    );
}

function VideoSection(props: { loading: boolean, src: string }) {
    const { loading, src } = props;

    return (
        <Box
            maxWidth="md"
            sx={{ alignSelf: 'flex-end' }}
        >
            <Paper
                variant="outlined"
                sx={{ overflow: 'hidden', borderRadius: '15px' }}
            >
                { loading ? 
                    ( <Skeleton>
                        <video 
                            width="100%"
                        >
                        </video>
                    </Skeleton> ) : (
                    <video 
                        width="100%"
                        loop
                        autoPlay={true}
                        controls={false}
                        muted
                    >
                        <source src={src} type="video/mp4"></source>
                    </video>
                    )
                }
                {/* <img 
                    src={projectPic}
                    width="100%"
                    style={{ objectFit: 'contain' }}
                >
                </img> */}
            </Paper>
        </Box>
    );
}

function TextVideoSection(props: { title: string, subtitle: string, content: string, loading: boolean, src: string }) {
    const { title, subtitle, content, loading, src } = props;

    return (
        <>
            <Container 
                maxWidth="xl"
                sx={{ display: "flex", flexDirection: "column", pt: "50px", pb: "50px" }}
            >
                <Grid container spacing={10} alignItems="center">
                    <Grid item xs={4}>
                        <TextSection title={title} subtitle={subtitle} content={content} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoSection loading={loading} src={src} />
                    </Grid>
                </Grid> 
            </Container>
            <Divider></Divider>
        </>
    );
}

export default TextVideoSection;