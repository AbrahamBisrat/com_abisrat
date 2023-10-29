import { Typography, Paper, Box, Grid, Card, CardContent } from "@material-ui/core";
import { headerHeight } from "../constants/constants";
import { logos } from "../data/logos";

const profileTextStyle = {
    height: headerHeight,
    backgroundColor: '#d9d9d9',
    color: 'black',
    textAlign: 'center',
    padding: '10vh',
};

const iconSize = '10rem';
const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '50%',
    width: iconSize,
    height: iconSize,
    padding: '1rem',
    margin: '1rem 0',
};
const breaker = '2vh';
const LogoGrid = ({ logos}) => {
    return (
        <>
            <div style={{ height: { breaker } }} />
            <Grid container spacing={2}>
                {logos.map((logo, index) => (
                    // mobile = xs, laptop = md, monitors = lg, everything larger is xl
                    <Grid item key={logo.label + index} xs={6} sm={4} md={2}>
                        <Card elevation={20} style={cardStyle}>
                            <img alt="" loading='lazy' type="image/svg+xml" src={logo.src} height="50%" width="50%" />
                            <CardContent style={{ padding: '.5   rem'}}>
                                <Typography gutterBottom variant="h5" component="h2" fontFamily="monospace">
                                    {logo.label}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <div style={{ height: { breaker } }} />
        </>
    );
};
const LogoTile = ({logoList, label}) => {
    return (
        <>
            <Paper square elevation={0} style={{ backgroundColor: '#e6e6e6 ', padding: '2rem 2rem' }}>
                <Typography variant='h4'>
                    { label }
                </Typography>
                <LogoGrid logos={logoList}/>
            </Paper>
        </>
    );
};
const Technology = () => {
    return (
        <div id='technology'>
            <Paper square elevation={0}  style={profileTextStyle}>
                <Box fontWeight='large'>
                    <Typography variant='h3' >
                        Technology
                    </Typography>
                </Box>
            </Paper>
            <LogoTile logoList={logos.Languages} label='Languages' />
            <LogoTile logoList={logos.Web} label='Web' />
            <LogoTile logoList={logos.Databases} label='Databases' />
            <LogoTile logoList={logos.Deployment} label='Deployment' />
        </div>
    );
};
export default Technology;