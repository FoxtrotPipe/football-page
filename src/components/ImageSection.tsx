import { Box, Paper, Typography } from '@mui/material';

export interface ImageSectionProps {
    alt?: string,
    src?: string,
    description?: string | React.ReactElement,
    icon?: boolean,
    square?: boolean,
    tinge?: string,
    colors?: Array<string>,
    variant?: 'default' | 'pattern' | 'contained'
}

function ImageSection({ alt, src, description, icon, square, tinge, colors, variant = 'default' }: ImageSectionProps) {
    return (
        variant == 'contained' ?
        <Paper
            elevation={10}
            sx={{
                p: 3,
                background: `
                    ${tinge != null ? `repeating-linear-gradient(0deg, ${tinge} 0px, ${tinge} 8px, transparent, transparent, transparent), ` : ''}
                    repeating-linear-gradient(0deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))
                `
                // border: '1px solid white'
            }}
        >
            <Box
                component='img'
                alt={alt}
                src={src}
                sx={{
                    width: icon ? '4ch' : '100%',
                    mx: icon ? 1 : '',
                    objectFit: 'cover',
                    aspectRatio: square ? '1/1' : ''
                }}
            />
            <Typography color='primary.contrastText'>
                { description }
            </Typography>
        </Paper> :
        variant == 'pattern' ?
        <>
            <Box
                component='img'
                alt={alt}
                src={src}
                sx={{
                    width: icon ? '4ch' : '100%',
                    mx: icon ? 1 : '',
                    objectFit: 'cover',
                    aspectRatio: square ? '1/1' : '',
                    backgroundColor: 'transparent',
                    // background: `repeating-linear-gradient( -45deg, rgba(219, 0, 48, .5), rgba(219, 0, 48, .5) 8px, transparent 8px, transparent 48px),
                    // repeating-linear-gradient( -45deg, rgba(0, 77, 152, .5) 24px, rgba(0, 77, 152, .5) 32px, transparent 32px, transparent 72px )`,
                    background: `
                        repeating-linear-gradient( -45deg, ${colors[0]}, ${colors[0]} 8px, transparent 8px, transparent 48px),
                        repeating-linear-gradient( -45deg, ${colors[1]} 24px, ${colors[1]} 32px, transparent 32px, transparent 72px )
                    `
                        // repeating-linear-gradient( -45deg, ${colors[0]}, ${colors[0]} 8px, transparent, transparent)
                    ,
                    borderRadius: 1,
                    overflow: 'hidden'
                }}
            /> 
            <Typography variant='overline' color='primary.contrastText' lineHeight={0}>
                { description }
            </Typography>
        </>
        :
        <>
            <Box
                component='img'
                alt={alt}
                src={src}
                sx={{
                    width: icon ? '4ch' : '100%',
                    mx: icon ? 1 : '',
                    objectFit: 'cover',
                    aspectRatio: square ? '1/1' : ''
                }}
            />
            <Typography variant='overline' color='primary.contrastText' lineHeight={0}>
                { description }
            </Typography>
        </>
    )
}

export default ImageSection;