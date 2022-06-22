type Props = {
    value: number;
    className?: string | undefined;
};

export default function CurrentBalance({ value, className }: Props) {
    return <p className={className}>Your current balance is {value}</p>;
}