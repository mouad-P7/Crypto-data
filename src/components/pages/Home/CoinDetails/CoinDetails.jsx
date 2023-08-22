import { useParams } from 'react-router-dom';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box } from '@mui/material';
import Chart from './Chart';
import Statistics from './Statistics';
import Markets from './Markets';
import About from './About';


export default function CoinDetails() {
  const [value, setValue] = useState(0);
  const params = useParams();
  const tabStyle = { fontWeight: 'bold', color: 'var(--text-black)' };


  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`} {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {id: `simple-tab-${index}`, 'aria-controls': `simple-tabpanel-${index}`};
  };
  function handleChange(event, newValue) {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%', padding: '20px 0px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab label="Chart" {...a11yProps(0)} sx={tabStyle} />
          <Tab label="Statistics" {...a11yProps(1)} sx={tabStyle} />
          <Tab label="Markets" {...a11yProps(2)} sx={tabStyle} />
          <Tab label="About" {...a11yProps(3)} sx={tabStyle} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Chart slug={params.slug} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Statistics slug={params.slug} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Markets slug={params.slug} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <About slug={params.slug} />
      </CustomTabPanel>
    </Box>
  );
};
