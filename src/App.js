import "./App.css";
import ButtonMui from "./components/ButtonMui/buttonmui";
import CheckboxMui from "./components/CheckboxMui/checkboxmui";
import RadioButtonMui from "./components/RadioButtonMui/radiobuttonmui";
import RatingMui from "./components/RatingMui/ratingmui";
import SelectMui from "./components/SelectMui/selectmui";
import SwitchMui from "./components/SwitchMui/switchmui";
import TextFieldMui from "./components/TextFieldMui/textfieldmui";
import ToggleButtonsMultiple from "./components/ToggleButtonMui/togglebuttonmui";
import TypographyMui from "./components/TypographyMui/typographymui";

function App() {
  return (
    <div>
      <TypographyMui />
      <ButtonMui />
      <ToggleButtonsMultiple />
      <TextFieldMui />
      <SelectMui />
      <RadioButtonMui />
      <CheckboxMui />
      <SwitchMui />
      <RatingMui />
    </div>
  );
}

export default App;
