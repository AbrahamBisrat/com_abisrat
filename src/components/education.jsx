import { Paper, Box, Typography, styled, Avatar } from "@material-ui/core";
import { headerHeight } from "../constants/constants";
import { educations } from "../data/educationData";

const lighterSame = '#86aa85';

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
    // flex: '1 0 20%',
});

const logoStyle = {
    padding: '4%',
    width: '50%',
    height: 'auto',
};

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

const Courses = ({ courses }) => (
    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
        {courses.map((course, index) => (
            <li key={index} style={{ marginRight: '15px', border: "2px solid #00000080", borderRadius: "5px", padding: '5px', margin: '1vw' }}>{
                <Typography variant='body2'>{course}</Typography>
            }</li>
        ))}
    </ul>
);

const TwoSectionsLayout = ({ edu }) => (
    <Container style={{ color: '#3d4e4e', borderBottom: '1px solid #86a000', paddingTop: '5vh', }} >
      <LeftSection>
        <TitleOrgdDate company={edu.org} title={edu.major} date={edu.date} />
        <Courses courses={edu.majorCourses} />
      </LeftSection>
      <RightSection>
        <Avatar src={edu.imgSrc} style={logoStyle} />
      </RightSection>
    </Container>
);

const educationTextStyle = {
    height: headerHeight,
    backgroundColor: '#77a0a0',
    color: 'black',
    textAlign: 'center',
    padding: '10vh',
};

const Education = () => (
    <div id ='education'>
        <Paper square style={educationTextStyle}>
        <Box fontWeight='large'>
            <Typography variant='h3'>
            Education
            </Typography>
        </Box>
        </Paper>
        <div style={{ padding: '2rem 1rem', backgroundColor: '#86aa85' }}>
            {educations.map(eachEducation => <TwoSectionsLayout edu={eachEducation} />)}
        </div>
    </div>
);

export default Education;
