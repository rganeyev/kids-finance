import React, { useCallback } from 'react';
import Button from '@mui/material/Button';

type Props = {
    onSendForm: (balance: number) => void;
    className: string | undefined
};

export default function InputForm({ onSendForm, className }: Props) {
    const onEarn = useCallback(() => {
        // TODO: send form 
        onSendForm(1);
    }, [onSendForm]);
    return <div className={className}>
        <Button variant="contained" onClick={onEarn}>Earn £1</Button>
    </div>;
}