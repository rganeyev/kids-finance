import Button from "@mui/material/Button";

type Props = {
  callback: () => void;
};

export default function EarnButton({ callback }: Props) {
  return (
    <div>
      <Button variant="contained" onClick={callback}>
        Earn £1
      </Button>
    </div>
  );
}
