import { createTheme, colors} from '@mui/material';
import shadows from './shadow';
import typography from './typography';

const theme = createTheme({
  palette: {
    
    background: {
      default: '#F4F6F8',
      paper: colors.common
    },
    primary: {
      
      contrastText: '#ffffff',
      main: '#8b399e'
    },
    text: {
      primary: '#8b399e',
      secondary: '#111111'
    },
  },
  shadows,
  typography
});

export default theme;