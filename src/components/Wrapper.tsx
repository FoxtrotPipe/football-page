import { Container } from "@mui/material"

interface WrapperProps {
    children?: React.ReactElement | Array<React.ReactElement>
}

function Wrapper({ children }: WrapperProps) {
    return (
        <Container 
            maxWidth="xl"
            sx={{ 
                display: "flex", 
                flexDirection: "column", 
                pt: "50px"
            }}
        >
            { children }
        </Container>
    )
}

export default Wrapper;