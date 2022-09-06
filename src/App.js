import { Box, Container } from '@mui/system';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { FinalScreen } from './pages/FinalScreen';
import { Questions } from './pages/Questions';
import { Settings } from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth='sm'>
        <Box textAlign='center' mt={5}>
        <Routes>
          <Route path='/' exact element={<Settings/>}>
            {/* <Typography variant='h2' fontWeight='bold'>QUIZ APP</Typography> */}
          </Route>
          <Route path='/questions' element={<Questions/>} />
          <Route path='/score' element={<FinalScreen/>} />
      </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  );
}

export default App;
