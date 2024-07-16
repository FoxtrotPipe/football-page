import { Box, Typography, Grid } from '@mui/material';
import { AR, FR, GB, UY } from 'country-flag-icons/react/1x1';

import BillboardSection from './BillboardSection';
import MatchSection from './MatchSection';

import suarezPic from '../assets/suarez-celebrate.png';
import robertoPic from '../assets/sergi-roberto-celebrate.png';
import messiPic from '../assets/messi-trophy.png';
import barca from '../assets/barca.ico';
import psg from '../assets/psg.png';
import ImageSection from './ImageSection';

function FavMatches() {
    return (
        <>
            <BillboardSection 
                alt='Suárez celebrates his superb goal against England'
                src={suarezPic}
                subtitle='Brazil World Cup 2014 | Group Stage'
                content='Uruguay forward Luis Suárez scored twice upon his return from injury in Sao Paulo to defeat England 2-1 in a match which saw Wayne Rooney score his first World Cup goal. 
                        Just as the momentum looked to be shifting towards England, Suárez was the tormentor again.
                        He latched on to a long punt from Muslera, which Gerrard could only flick on with his head, and then steadied himself before rifling an unstoppable finish past Hart.'
                center
                events={[
                    ['Luis Suárez 39\'', 'left'],
                    ['Wayne Rooney 75\'', 'right'],
                    ['Luis Suárez 85\'', 'left', 'https://www.youtube.com/embed/LSWSd1g6ZgI?si=44G6Mh79-4KzTKiZ', 524, 552]
                ]}
                scores={[
                    { icon: <UY className='flag-icon'/>, team: 'Uruguay', score: '2' },
                    { icon: <GB className='flag-icon'/>, team: 'England', score: '1' }
                ]}                
            />
            <MatchSection
                alt='Suárez celebrates his superb goal against England'
                src={messiPic}
                title={<>
                    <Box component='span' fontSize='1.2em'>3</Box>-3
                    <Typography> Penalities: 4-2</Typography>
                </>}
                subtitle={<>
                    Qatar World Cup 2022 | Final | 
                    <Box component='span' mx={1}><AR width='3ch' className='flag-icon'/></Box>Argentina vs
                    <Box component='span' mx={1}><FR width='3ch' className='flag-icon'/></Box>France
                </>}
                content={<Typography>
                    Argentina won the shootout 4-2 after a spectacular game which developed into the much-anticipated confrontation between the 35-year-old maestro Messi and his France opposite number Kylian Mbappe.
                    Lionel Messi finally achieved his World Cup dream as Argentina won their third crown on penalties in one of the greatest finals in the tournament's history.
                </Typography>}
                divider
                center
                events={[
                    ['Lionel Messi 23\' (p)', 'left'],
                    ['Ángel Di María 36\'', 'left', 'https://www.youtube-nocookie.com/embed/Kutz0UJExSU?si=b8Xu35NpVZR2niZI', 11, 31],
                    ['Kylian Mbappé 80\' (p)', 'right'],
                    ['Kylian Mbappé 81\'', 'right'],
                    ['Lionel Messi 108\'', 'left'],
                    ['Kylian Mbappé 118\' (p)', 'right']
                ]}  
                colors={['rgba(108, 172, 228, .5)', 'rgba(255, 255, 255, .5)']}
                variant='pattern'
            />
            <MatchSection
                alt='Sergi Roberto came off the bench to score the winner with his first goal of the season'
                src={robertoPic}
                title={<>
                    <Box component='span' fontSize='1.2em'>6</Box>-1
                </>}
                subtitle={<>
                    UEFA Champion League 2017 | Round of 16 |
                    <ImageSection src={barca} icon/>Barcelona vs
                    <ImageSection src={psg} icon/>PSG
                </>}
                content={<Typography>
                    Barcelona 6–1 Paris Saint-Germain, also known as La Remontada ("The Comeback"), was the result of the second leg of a UEFA Champions League tie which occurred on 8 March 2017 at the Camp Nou in Barcelona. 
                    FC Barcelona reversed a four-goal deficit in the second leg of their 2016/17 UEFA Champions League round of 16 tie against Paris Saint-Germain to win 6–5 on aggregate, making it the largest comeback in UEFA Champions League history.
                </Typography>}
                divider
                center
                events={[
                    ['Luis Suárez 3\'', 'left'],
                    ['Layvin Kurzawa 40\' (og)', 'left'],
                    ['Lionel Messi 50\' (p)', 'left'],
                    ['Edison Cavani 62\'', 'right'],
                    ['Neymar 88\'', 'left'],
                    ['Neymar 90+1\' (p)', 'left'],
                    ['Sergi Roberto 90+5\'', 'left', 'https://www.youtube.com/embed/h4m68r8kWAc?si=tAcvMT6ryTIhUWFk', 204, 226]
                ]}  
                colors={['rgba(219, 0, 48, .5)', 'rgba(0, 77, 152, .5)']}
                variant='pattern'
            />
        </>
    );
}

export default FavMatches;
