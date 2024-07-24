import { Input } from './ui/input';
interface FilterProps {
  value: string;
  setValue: (value: string) => void;
}
const Filter = ({ value, setValue }: FilterProps) => {
  return (
    <div className="w-[300px]">
      <Input
        placeholder="Filter Table"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Filter;
