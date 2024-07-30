import "./App.css";
import ButtonMui from "./components/ButtonMui/buttonmui";
import SelectMui from "./components/SelectMui/selectmui";
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
    </div>
  );
}

export default App;
