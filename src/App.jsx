/// ICONS
import {
  PiGearSix,
  PiSlidersHorizontal,
  PiCheckBold,
  PiTrashLight,
} from "react-icons/pi";
/// UI
import Button from "#components/ui/Button";
import ButtonGroup from "#components/ui/ButtonGroup";
import { useMemo, useState } from "react";
//
//
//
//
//
function App() {
const [size, setSize] = useState("M");
const [variant, setVariant] = useState("standard");
const [color, setColor] = useState("destructive");
const [disabled, setDisabled] = useState(false);

const test = useMemo(() => {
  return ( <Button
        variant={variant}
        size={size}
        color={color}
        iconLeft={<PiCheckBold />}
        children="Valider"
        disabled={disabled}
      />)
}, [size, variant, color]);

const fonciton = (param) => {
  setSize(param);
}

const fonciton2 = (param) => {
  setVariant(param);
}

const fonciton3 = (param) => {
  if(color === "destructive") {
    setDisabled(true);
  } else {
    setColor(param);
  }
}

  return (
    <section>
      {test}
      <Button
        variant="standard"
        size="M"
        color="primary"
        iconLeft={<PiCheckBold />}
        children="Valider"
        disabled={false}
        onClick={() => fonciton("L")}
      />
      <Button
        variant="standard"
        size="M"
        color="secondary"
        iconLeft={<PiSlidersHorizontal />}
        badge={3}
        children="Filtrer"
        disabled={false}
      />
      <ButtonGroup disabled={false}>
        <Button
          variant="standard"
          size="M"
          color="destructive"
          children="Supprimer"
          disabled={disabled}
          onClick={() => fonciton3("primary")}
        />
        <Button
          variant="icon"
          size="M"
          color="destructive"
          children={<PiGearSix />}
          disabled={false}
          ariaLabel="Settings"
          onClick={() => fonciton2("icon")}
        />
      </ButtonGroup>
      <Button
        variant="icon"
        size="M"
        color="secondary"
        children={<PiTrashLight />}
        disabled={false}
        ariaLabel="Delete"
      />
    </section>
  );
}

export default App;
