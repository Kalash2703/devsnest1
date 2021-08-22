import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import Form from './components/Form';
import WeatherCard from './components/WeatherCard';
import {useSelector} from 'react-redux';
import ToogleTheme from './components/ToggleTheme';
export default function App() {
  const theme= useSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className={theme ? "App dark":"App"}>
      <ToogleTheme />
      <Form />
      <WeatherCard /> 
    </div>
  );
}