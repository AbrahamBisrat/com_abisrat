import { Paper, Box, Typography, styled, Avatar } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const languages = [
    'apple.svg',
    'aws.svg',
    'bootstrap.svg',
    'cassandra.svg',
    'docker.svg',
    'git.svg',
    'gradle.svg',
    'graphql.svg',
    'hibernate.svg',
    'html.svg',
    'j2ee.svg',
    'java.svg',
    'javascript.svg',
    'jenkins.svg',
    'jquery.svg',
    'kafka.svg',
    'linux.svg',
    'material-ui.svg',
    'maven.svg',
    'node.svg',
    'oracle.svg',
    'postgresql.svg',
    'postman.svg',
    'python.svg',
    'redux.svg',
    'rust.svg',
    'tomcat.svg',
    'typescript.svg'
];

const lighterSame = '#86aaaa';
const Container = styled('div')({
    display: 'flex',
    width: '100vw',
    height: '25vh',
    backgroundColor: lighterSame,
});
const LeftSection = styled('div')({
    flex: '1 0 80%',
    border: '1px dashed black'
});
const RightSection = styled('div')({
    flex: '1 0 20%',
    border: '1px dashed black'
});
const logoStyle = {
    padding: '4%',
    width: '80%', 
    height:'auto',
    margin: '10% auto',
};
function TwoSectionsLayout() {
    return (
        <Container>
            <LeftSection>
                <div style={{display: 'flex', flexDirection: 'column', border: '1px dashed red', padding: '0 4vw'}}>
                    <div style={{ display: 'flex', alignItems: 'flex-end'}}>
                        <Typography variant='h4' style={{paddingRight:'2vw', borderRight: '3px solid #566e6e'}}> Company x </Typography>
                        <Typography variant='h5' style={{ marginLeft: '2vw'}}> Some Title </Typography>
                    </div>
                    <div style={{  }}>
                        <Typography>
                            March 24, 1993 - Jun 7 2023
                        </Typography>
                    </div>
                    <div>
                        <ul style={{ listStyle: 'none', }}>
                        <li style={{display: 'flex'}}>
                                <ChevronRightIcon />
                                <Typography>
                                    Some some
                                </Typography>
                            </li>
                            <li style={{display: 'flex'}}>
                                <ChevronRightIcon />
                                <Typography>
                                    Some some
                                </Typography>
                            </li>
                            <li style={{display: 'flex'}}>
                                <ChevronRightIcon />
                                <Typography>
                                    Some some
                                </Typography>
                            </li>
                        </ul>
                    </div>
                    {/* Technology used */}
                    <div>
                        <ul style={{ listStyle: 'none', display: 'flex'}}>
                            <li style={{ marginRight: '10px', }}> Java </li>
                            <li style={{ marginRight: '10px', }}> C++ </li>
                            <li style={{ marginRight: '10px', }}> Python </li>
                            <li style={{ marginRight: '10px', }}> JavaScript </li>    
                        </ul>
                    </div>
                </div>
            </LeftSection>
            <RightSection>
                <Avatar src="/logos/apple.svg" style={logoStyle}/>
            </RightSection>
        </Container>
    );
};
const profileTextStyle = {
    height: '30vh',
    backgroundColor: '#77a0a0',
    color: 'black',
    textAlign: 'center',
    padding: '10vh',
};
const Experience = () => {
    return (
        <div id='experience'>
            <Paper square style={profileTextStyle} id="justBelowFront">
                <Box fontWeight='large'>
                    <Typography variant='h3' fontWeight>
                        Experience
                    </Typography>
                </Box>
            </Paper>
            <TwoSectionsLayout />
        </div>
    );
};
export default Experience;