import { Typography, Paper, Box, Grid, Card, CardContent } from "@material-ui/core";

const profileTextStyle = {
    height: '30vh',
    backgroundColor: '#d9d9d9',
    color: 'black',
    textAlign: 'center',
    padding: '10vh',
};
const logos = {
    Languages: [
        { src: '/logos/java.svg', label: 'Java' },
        { src: '/logos/javascript.svg', label: 'JavaScript' },
        { src: '/logos/typescript.svg', label: 'TypeScript' },
        { src: '/logos/html.svg', label: 'HTML' },
        { src: '/logos/rust.svg', label: 'Rust' }
    ],
    Web: [
        { src: '/logos/bootstrap.svg', label: 'Bootstrap' },
        { src: '/logos/graphql.svg', label: 'GraphQL' },
        { src: '/logos/hibernate.svg', label: 'Hibernate' },
        { src: '/logos/j2ee.svg', label: 'J2EE' },
        { src: '/logos/jquery.svg', label: 'jQuery' },
        { src: '/logos/material-ui.svg', label: 'Material UI' },
        { src: '/logos/node.svg', label: 'Node.js' },
        { src: '/logos/redux.svg', label: 'Redux' },
        { src: '/logos/css.svg', label: 'CSS' }
    ],
    Databases: [
        { src: '/logos/cassandra.svg', label: 'Cassandra' },
        { src: '/logos/oracle.svg', label: 'Oracle' },
        { src: '/logos/postgresql.svg', label: 'PostgreSQL' },
        { src: '/logos/dynamodb.svg', label: 'DynamoDB' }
    ],
    Deployment: [
        { src: '/logos/aws.svg', label: 'AWS' },
        { src: '/logos/docker.svg', label: 'Docker' },
        { src: '/logos/jenkins.svg', label: 'Jenkins' },
        { src: '/logos/linux.svg', label: 'Linux' },
        { src: '/logos/tomcat.svg', label: 'Tomcat' }
    ],
}

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
const breaker = '3vh';
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
                            <CardContent>
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
            <Paper square elevation={0} style={{ backgroundColor: '#e6e6e6 ', padding: '0 2rem' }}>
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