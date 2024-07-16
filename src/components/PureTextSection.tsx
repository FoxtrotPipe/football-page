import { Grid } from "@mui/material";
import TextSection, { TextSectionProps } from "./TextSection";

interface PureTextSectionProps extends TextSectionProps {

}

function PureTextSection({ title, subtitle, content, divider, center, variant = 'default' }: PureTextSectionProps) {
    return (
        <Grid container alignItems="center">
            <Grid item xs={12}>
                <TextSection 
                    title={title}
                    subtitle={subtitle}
                    content={content}
                    divider={divider}
                    center={center}
                    variant={variant}
                />
            </Grid>
        </Grid>
    )
}

export default PureTextSection;