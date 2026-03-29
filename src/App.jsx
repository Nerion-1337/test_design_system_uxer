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
//
//
//
//
//
function App() {
  return (
    <section>
      <Button
        variant="standard"
        size="M"
        color="primary"
        iconLeft={<PiCheckBold />}
        children="Valider"
        disabled={false}
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
          disabled={false}
        />
        <Button
          variant="icon"
          size="M"
          color="destructive"
          children={<PiGearSix />}
          disabled={false}
        />
      </ButtonGroup>
      <Button
        variant="icon"
        size="M"
        color="secondary"
        children={<PiTrashLight />}
        disabled={false}
      />
    </section>
  );
}

export default App;
