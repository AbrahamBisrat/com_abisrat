import { Paper, Box, Typography, styled, Avatar } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const lighterSame = '#86aaaa';
const Container = styled('div')({
    display: 'flex',
    width: '100vw',
    height: '25vh',
    backgroundColor: lighterSame,
});
const LeftSection = styled('div')({
    flex: '1 0 80%',
    // border: '1px dashed black'
});
const RightSection = styled('div')({
    flex: '1 0 20%',
    // border: '1px dashed black'
});
const logoStyle = {
    padding: '4%',
    width: '80%', 
    height:'auto',
    margin: '10% auto',
};
const leftSectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    // border: '1px dashed red',
    padding: '0 4vw',
};
const JobDescription = ({label}) => {
    return (
        <>
            <li style={{display: 'flex'}}>
                <ChevronRightIcon />
                <Typography>
                    { label }
                </Typography>
            </li>
        </>
    );
};
const TitleAndDate = ({company, title, date}) => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'flex-end'}}>
                <Typography variant='h4' style={{paddingRight:'2vw', borderRight: '3px solid #566e6e'}}> { company } </Typography>
                <Typography variant='h5' style={{ marginLeft: '2vw'}}> { title } </Typography>
            </div>
            <div style={{  }}>
                <Typography>
                    { date }
                </Typography>
            </div>
        </>
    );
};
const LanguagesUsed = ({ languages }) => {
    return (
      <>
        {/* Technology used */}
        <div>
          <ul style={{ listStyle: 'none', display: 'flex' }}>
            {languages.map((language, index) => (
              <li key={index} style={{ marginRight: '10px' }}>{language}</li>
            ))}
          </ul>
        </div>
      </>
    );
};

function TwoSectionsLayout() {
    return (
        <Container>
            <LeftSection>
                <div style={leftSectionStyle}>
                    <TitleAndDate company="company Z" title="Software Enginer" date="March 24, 1993 - Jun 7 2023" />
                    <div>
                        <ul style={{ listStyle: 'none', }}>
                            <JobDescription label="soem some" />
                            <JobDescription label="nire adnd jf aksjfls some" />
                            <JobDescription label="more ajdlfkjs" />
                            <JobDescription label="soem some" />    
                        </ul>
                    </div>
                    <LanguagesUsed languages={['Rust', 'Java', 'Python', 'SQL']}/>
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
            <Paper square style={profileTextStyle} >
                <Box fontWeight='large'>
                    <Typography variant='h3' >
                        Experience
                    </Typography>
                </Box>
            </Paper>
            <TwoSectionsLayout />
        </div>
    );
};
export default Experience;