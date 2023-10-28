import './App.css';
import Navbar from "../src/components/Navbar/navbar";
import LowerContent from "../src/components/Content/main";
import { Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Stack direction={'column'} gap={5} style={{
        overflowY:"clip "
      }} className='home'>
        <Navbar />
        <LowerContent/>
      </Stack>
    </div>
  );
}

export default App;
