import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Tabs, Tab, Box } from '@mui/material';
import { fetchData } from '../../../../utils/api';
import Spinner from '../../../common/Spinner';


export default function CoinDetails() {
  const [coinDetails, setCoinDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [value, setValue] = useState(0);
  const params = useParams();
  const apiUrl = `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?slug=${params.slug}`;


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


  async function fetchCoinDetails() {
    try {
      setCoinDetails(await fetchData(apiUrl));
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {fetchCoinDetails()}, []);


  if(loading){
    return (
      <div className="spinner-ctr" style={{ marginTop: '60px' }}>
        <Spinner size='60px' />
      </div>
    );
  }


  if(error !== ''){
    return <Alert severity="error">{error}</Alert>;
  }


  return (
    <Box sx={{ width: '100%', padding: '20px 0px' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs">
          <Tab label="Chart" {...a11yProps(0)} />
          <Tab label="Statistics" {...a11yProps(1)} />
          <Tab label="Markets" {...a11yProps(2)} />
          <Tab label="About" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {params.slug} Chart
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {params.slug} Statistics
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {params.slug} Markets
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        {params.slug} About
      </CustomTabPanel>
    </Box>
  );
};
