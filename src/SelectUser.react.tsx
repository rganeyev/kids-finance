import Button from '@mui/material/Button';
import './App.css';

type Props = {
    onSelectUser: (name: string) => void;
};

export default function SelectUser({onSelectUser}: Props) {    
    return <div className='container'>
        <Button color="error" variant="contained" onClick={() => onSelectUser('Samira')}>Samira</Button>
        <Button variant="contained" onClick={() => onSelectUser('Samira')}>Emin</Button>
    </div>;
}