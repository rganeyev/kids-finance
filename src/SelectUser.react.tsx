import { useCallback } from "react";
import Button from "@mui/material/Button";
import "./App.css";

type Props = {
  onSendForm: (balance: number, isUpdated: boolean) => void;
  cssClass: string;
};

export default function SelectUser({ onSendForm, cssClass }: Props) {
  const onEarn = useCallback(
    async (userName: string) => {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName }),
      };
      const response = await fetch(
        "https://backend.gcrm.online/api/v1/finance/",
        requestOptions
      );
      const data = await response.json();
      onSendForm(data.balance, data.is_updated);
    },
    [onSendForm]
  );

  const className = `children-container ${cssClass}`;

  return (
    <div className={className}>
      <Button
        color="secondary"
        variant="contained"
        onClick={() => onEarn("Samira")}
      >
        Samira
      </Button>
      <Button
        color="success"
        variant="contained"
        onClick={() => onEarn("Samira")}
      >
        Emin
      </Button>
    </div>
  );
}
