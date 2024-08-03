import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {useFonts, Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import theme from './src/theme';
import Home from './src/screens/Home';
import Loader from './src/components/Loader';

export default function App() {
	const [fontsLoaded] = useFonts({Inter_400Regular, Inter_700Bold});
	return (
		<ThemeProvider theme={theme}>
			<StatusBar barStyle='light-content' backgroundColor={theme.COLORS.GRAY_700} translucent />
			{fontsLoaded ? <Home /> : <Loader />}
		</ThemeProvider>
	);
}
