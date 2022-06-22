import React, { useCallback } from 'react';
import Button from '@mui/material/Button';

type Props = {
    onSendForm: (balance: number, isUpdated: boolean) => void;
    className: string | undefined
};

export default function InputForm({ onSendForm, className }: Props) {
    const onEarn = useCallback(async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Samira' })
        };
        const response = await fetch('https://backend.gcrm.online/api/v1/finance/', requestOptions);
        const data = await response.json();
        onSendForm(data.balance, data.is_updated);
    }, [onSendForm]);
    return <div className={className}>
        <Button variant="contained" onClick={onEarn}>Earn £1</Button>
    </div>;
}