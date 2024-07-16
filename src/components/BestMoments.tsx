import { Box } from '@mui/material';
import PureTextSection from './PureTextSection';
import MatchSection from './MatchSection';
import ImageSection from './ImageSection';
import { AR, ES, FR, NL } from 'country-flag-icons/react/1x1';

import liverpool from '../assets/liverpool.png';
import norwich from '../assets/norwich-city.png';
import iniesta from '../assets/iniesta-strike.png';
import dimaria from '../assets/di-maria.png';
import suarez from '../assets/suarez-volley.png';

function BestMoments() {
    return (
        <>
            <PureTextSection
                title={<>
                    Best Football Moments
                </>}
                content='My love for football started at 2021 summer and these are some of my favourite moments in football matches. They are my "favourite" in the sense that when I watch the match, these moments get stuck in my brain and never leave my head.'
                divider
            />
            <MatchSection
                alt='Di María celebrates after he sweeps the ball past Hugo Lloris'
                src={dimaria}
                title={<>
                    Di María<Box component='span' fontSize='.6em'>'s world cup final goal against France</Box>
                </>
                } 
                subtitle={<>
                    Qatar World Cup 2022 | Final | 
                    <Box component='span' mx={1}><AR width='3ch' className='flag-icon'/></Box>Argentina vs
                    <Box component='span' mx={1}><FR width='3ch' className='flag-icon'/></Box>France
                </>}
                content="Di María made it 2-0 to Argentina against France in the World Cup final after just 36 minutes in Qatar. 
                Lionel Scaloni's side had taken the lead through a Lionel Messi penalty and then took command of the game with a flowing team goal. 
                Messi and Julian Alvarez combined to release Alexis Mac Allister. The Brighton midfielder then crossed for Di María to sweep past Hugo Lloris."
                divider
                center
                events={['Ángel Di María 36\'', 'left', 'https://www.youtube-nocookie.com/embed/Kutz0UJExSU?si=b8Xu35NpVZR2niZI', 11, 31]}
                single
                colors={['rgba(108, 172, 228, .5)', 'rgba(255, 255, 255, .5)']}
                variant='pattern'
            />
            <MatchSection
                alt='Andrés Iniesta scored the 116th-minute winner'
                src={iniesta}
                title={<>
                    Iniesta<Box component='span' fontSize='.6em'>'s world cup winning goal against Netherland</Box>
                </>}
                subtitle={<>
                    South Africa World Cup 2010 | Final | 
                    <Box component='span' mx={1}><ES width='3ch' className='flag-icon'/></Box>Spain vs
                    <Box component='span' mx={1}><NL width='3ch' className='flag-icon'/></Box>Netherland
                </>}
                content="Andrés Iniesta scored a 116th-minute winner as Spain lifted the FIFA World Cup for the first time, defeating ten-man Netherlands 1-0 in Johannesburg.
                Fàbregas passed up the clearest chance of extra time when he was denied by the legs of Stekelenburg, who was then thankful for Giovanni van Bronckhorst deflecting Navas's shot wide. 
                Heitinga was dismissed and just as penalties seemed inevitable, up popped Iniesta to ensure European champions Spain are the eighth name on the World Cup trophy."
                divider
                center
                events={['Andrés Iniesta 116\'', 'left', 'https://www.youtube-nocookie.com/embed/Q1vFGbBunqU?si=t1Ur3b2bjZSivT6G', 80, 100]}
                single
                colors={['rgba(252, 181, 7, .5)', 'rgba(2, 18, 80, .5)']}
                variant='pattern'
            />
            <MatchSection
                alt='Luis Suárez opened the scoring with a 40-yard lob over John Ruddy'
                src={suarez}
                title={<>
                    Suárez<Box component='span' fontSize='.6em'>'s 40-yard volley against Norwich City</Box>
                </>}
                subtitle={<>
                    Premier League 2013 |
                    <ImageSection src={liverpool} icon/>Livepool vs
                    <ImageSection src={norwich} icon/>Norwich City
                </>}
                content="Luis Suárez put on a one-man show in the Premier League on Wednesday, scoring four goals in Liverpool's 5-1 win over Norwich.
                His first on Wednesday came after Ruddy's kick was headed forward by Joe Allen and Fer missed his clearance. 
                Suarez seized his chance, half-turning toward the Kop to lash a dipping inch-perfect shot over and across the Norwich goalkeeper from 40 yards."
                divider
                center
                events={['Luis Suárez 15\'', 'left', 'https://www.youtube-nocookie.com/embed/2wIw446It7k?si=Y-njPl5b-V4Geqy1', 125, 140]}
                single
                colors={['rgba(255, 0, 0, .5)', 'rgba(255, 255, 255, .5)']}
                variant='pattern'
            />
        </>
    )
}

export default BestMoments;
