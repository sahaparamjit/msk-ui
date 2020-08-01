import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';

const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  experienceItem: {
    margin: 0
  },
  timelineRoot: {
    padding: 0
  },
  timeline: {
    flex : 'auto',
    paddingTop: 0
  }
})

const TimelineComp = (
  {
    theme,
    headlineText,
    experience
  }
) => {
  const styles = useStyles();
  const totalExperience = Object.keys(experience.value).length;
  function renderExperience(experienceDetails) {
    return <div >
      <h2 style={styles.experienceItem}>{experienceDetails.designation.value}</h2>
      <h5 style={styles.experienceItem}>
        {experienceDetails.company.value} | {experienceDetails.startDate.value} - {experienceDetails.isCurrentEmployement.value ? 'Present' : experienceDetails.endDate.value}
      </h5>
      <h5 style={styles.experienceItem}>{experienceDetails.location.value}</h5>
      <br />
      <p style={styles.experienceItem}>{experienceDetails.description.value}</p>
    </div>
  }

  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <h1 style={styles.headlineText} >{headlineText.value}</h1>
      <hr />
      <Timeline style={styles.timelineRoot}>
        {experience.value.map((experienceDetails, id) => {
            return <div key={id}>
            <br />
                <TimelineItem>
                        { 
                        (id === totalExperience - 1) ? 
                        <TimelineDot />
                        : 
                        <TimelineSeparator>  <TimelineDot /> <TimelineConnector /> </TimelineSeparator>
                        }          
                    <TimelineContent style={styles.timeline}>{renderExperience(experienceDetails.value)}</TimelineContent>
                </TimelineItem>
            </div>
        })}
      </Timeline>
    </div>
  );
};

export default TimelineComp;