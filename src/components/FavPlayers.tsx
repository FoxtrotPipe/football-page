import { Box } from '@mui/material';
import PureTextSection from './PureTextSection';
import { AR, ES, UY } from 'country-flag-icons/react/1x1';
import ImageSection from './ImageSection';
import ProfileSection from './ProfileSection';

import messi from '../assets/messi.png';
import suarez from '../assets/suarez.png';
import iniesta from '../assets/iniesta.png';
import barca from '../assets/barca.ico';
import liverpool from '../assets/liverpool.png';
import ajax from '../assets/ajax.png';
import ballondor from '../assets/ballondor.png';
import copaAmericaTrophy from '../assets/copaamerica.png';
import worldCupTrophy from '../assets/world-cup.png';
import euroTrophy from '../assets/euro-trophy.png';
import goldenShoe from '../assets/golden-shoe.png';
import uefa from '../assets/uefa.png';
import uefaTrophy from '../assets/uefa-trophy.png';

function FavPlayers() {
    return (
        <>
            <PureTextSection
                title='Favourite Players' 
                content='The football players that hold a special place in my heart. They get me into loving football, show me the intelligent side of football and what spectacular moments football can produce.
                This section is dedicated to document their iconic moments, their style of play and greatest achievements.'
                divider
            />
            <ProfileSection
                alt='Messi gestures to the crowd, with both hands in the air'
                src={messi}
                title='Lionel Messi'
                subtitle={<>
                    <Box component='span' mx={1}><AR width='3ch' className='flag-icon'/></Box>Argentina |
                    <ImageSection src={barca} icon/>Barcelona | Forward
                </>}
                content={<>
                    The man that needs no introduction. Widely regarded as the greatest players of all time, Messi has won a record eight Ballon d'Or awards, a record six European Golden Shoes, and was named the world's best player for a record eight times by FIFA.
                    Due to his short stature, Messi has a lower centre of gravity than taller players, which gives him greater agility, allowing him to change direction more quickly and evade opposing tackles
                </>}
                divider
                center
                achievements={[
                    [ballondor, 8, 'Ballon\'d Or'],
                    [worldCupTrophy, 1, 'World Cup'],
                    [copaAmericaTrophy, 2, 'Copa America Trophy'],
                    [uefaTrophy, 4, 'UEFA Champions League Trophy'],
                    // [uefa, 129, 'UEFA Champions League Goal']
                ]}
                colors={['rgba(219, 0, 48, .5)', 'rgba(0, 77, 152, .5)']}
                variant='pattern'
            />
            <ProfileSection
                alt='Suárez holds up three fingers and points the thumb to his mouth, performing his iconic celebration'
                src={suarez}
                title='Luis Suárez'
                subtitle={<>
                    <Box component='span' mx={1}><UY width='3ch' className='flag-icon'/></Box>Uruguay |
                    <ImageSection src={barca} icon/>Barcelona |
                    <ImageSection src={liverpool} icon/>Liverpool |
                    <ImageSection src={ajax} icon/>Ajax | Striker
                </>}
                content={<>
                    Luis Suárez is a Uruguayan professional footballer who plays as a striker. Nicknamed "El Pistolero" ("The Gunman"), he is regarded as one of the greatest strikers of all time.
                    Individually, he has won two European Golden Shoes, an Eredivisie Golden Boot, a Premier League Golden Boot and a Pichichi Trophy. 
                    Suárez was part of the dominant South American trio dubbed MSN alongside Lionel Messi and Neymar.
                    Suárez creates goal scoring chances with his powerful shot, and has "remarkable technical ability" according to his FIFA profile. Known for his direct running at players, Suárez has a particular penchant for nutmegging opponents (putting the ball through opponents' legs).
                </>}
                divider
                center
                achievements={[
                    [goldenShoe, 2, 'European Golden Shoe'],
                    [copaAmericaTrophy, 1, 'Copa America Trophy'],
                    [uefaTrophy, 1, 'UEFA Champions League Trophy']
                ]}
                colors={['rgba(0, 20, 137, .5)', 'rgba(255, 255, 255, .5)']}
                variant='pattern'
            />
            <ProfileSection
                alt='Suárez holds up three fingers and points the thumb to his mouth, performing his iconic celebration'
                src={iniesta}
                title='Andrés Iniesta'
                subtitle={<>
                    <Box component='span' mx={1}><ES width='3ch' className='flag-icon'/></Box>Spain |
                    <ImageSection src={barca} icon/>Barcelona | Midfielder
                </>}
                content={<>
                    Andrés Iniesta is a Spanish professional footballer who plays as a midfielder. Widely considered one of the greatest midfielders of all time, he was lauded for his balance, ball control and agility in close spaces, combined with his skill, composure, and flair on the ball. 
                    Iniesta has spent most of his career at Barcelona, where he played a major role in the club's success along with his midfield partners Xavi and Sergio Busquets.
                    Iniesta has been named in the FIFA FIFPro World XI nine times and was chosen in the UEFA Team of the Year on six occasions.
                </>}
                divider
                center
                achievements={[
                    [worldCupTrophy, 1, 'World Cup'],
                    [euroTrophy, 2, 'European Champion Trophy'],
                    [uefaTrophy, 4, 'UEFA Champions League Trophy']
                ]}
                colors={['rgba(241, 191, 0, .5)', 'rgba(170, 21, 27, .5)']}
                variant='pattern'
            />
        </>
    )
}

export default FavPlayers;