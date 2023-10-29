import React from 'react';
import { Paper, Box, Typography, styled, Avatar, Button } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { experiences } from "../data/expData";
import { headerHeight, resumeUrl } from '../constants/constants';

const lighterSame = '#86aaaa';

const Container = styled('div')({
  display: 'flex',
  backgroundColor: lighterSame,
});

const LeftSection = styled('div')({
  display: 'flex',
  flex: '1 0 80%',
  flexDirection: 'column',
  padding: '0 3vw',
});

const RightSection = styled('div')({
//   flex: '1 0 20%',
});

const logoStyle = {
  padding: '4%',
  width: '35%',
  height: 'auto',
};

const JobDescription = ({ label }) => (
  <li style={{ display: 'flex',  }}>
    <ChevronRightIcon />
    <Typography variant='body1' >
      { label }
    </Typography>
  </li>
);

const TitleOrgdDate = ({ company, title, date }) => (
  <>
    <div style={{ display: 'flex', alignItems: 'flex-end', }}>
      <Typography variant='h4' style={{ paddingRight: '2vw', borderRight: '2px solid #566e6e' }}>{company}</Typography>
      <Typography variant='h5' style={{ marginLeft: '2vw' }}>{title}</Typography>
    </div>
    <div>
      <Typography variant='body1' style={{ fontStyle: 'italic', fontWeight: 'normal', }}>
        {date}
      </Typography>
    </div>
  </>
);

const LanguagesUsed = ({ languages }) => (
    <ul style={{ listStyle: 'none', display: 'flex' }}>
      {languages.map((language, index) => (
        <li key={index} style={{ marginRight: '10px', border: "1px solid #00000080", borderRadius: "5px", padding: '2px' }}>{language}</li>
      ))}
    </ul>
);

const TwoSectionsLayout = ({ expr }) => (
  <Container style={{ padding: "1rem 0", color: '#3d4e4e', borderBottom: '1px solid #86a000' }} >
    <LeftSection>
      <TitleOrgdDate company={expr.org} title={expr.title} date={expr.date} />
      <div>
        <ul style={{ listStyle: 'none' }}>
          {expr.desc.map(jobDesc => <JobDescription label={jobDesc} />)}
        </ul>
      </div>
      <LanguagesUsed languages={expr.lang} />
    </LeftSection>
    <RightSection>
      <Avatar src={expr.imgSrc} style={logoStyle} />
    </RightSection>
  </Container>
);

const experienceTextStyle = {
  height: headerHeight,
  backgroundColor: '#77a0a0',
  color: 'black',
  textAlign: 'center',
  padding: '10vh',
};

const experienceDownloadBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
};

const Experience = () => (
  <div id='experience'>
    <Paper square style={experienceTextStyle}>
      <Box fontWeight='large' style={experienceDownloadBox}>
        <Typography variant='h3'>
          Experience
        </Typography>
        <div style={{ height: '5vh'}} />
        <Button variant='outlined' component='label' sytle={{ padding: '1rem' }}>
            <a href={resumeUrl}
            target="_blank" rel="noreferrer" download style={{ textDecoration: 'none', color: 'black', }}> 
                <Typography varint='h4'>
                    Download Resume
                </Typography>
            </a>
        </Button>
      </Box>
    </Paper>
    {experiences.map(eachExperience => <TwoSectionsLayout expr={eachExperience} />)}
  </div>
);

export default Experience;