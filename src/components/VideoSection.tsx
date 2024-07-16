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