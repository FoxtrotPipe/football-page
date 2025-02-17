import { Grid } from "@mui/material";

import ImageSection, { ImageSectionProps } from "./ImageSection";
import ProfileOverview, { ProfileOverviewProps } from "./ProfileOverview";

interface ProfileSectionProps extends ImageSectionProps, ProfileOverviewProps {
    
}

function ProfileSection({ alt, src, title, subtitle, content, divider, center, achievements, colors, variant }: ProfileSectionProps) {
    return (
        <Grid 
            container 
            alignItems="center" 
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 2, md: 10 }}
            my={3}
        >
            <Grid item xs={4}>
                <ImageSection 
                    alt={alt} 
                    src={src}
                    colors={colors}
                    variant={variant}
                />
            </Grid>
            <Grid item xs={8}>
                <ProfileOverview
                    title={title}
                    subtitle={subtitle}
                    content={content}
                    divider={divider}
                    center={center}
                    tinge={colors ? colors[0] : undefined}
                    colors={colors}
                    achievements={achievements}
                />
            </Grid>
        </Grid>
    )
}

export default ProfileSection;