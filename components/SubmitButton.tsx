import React from 'react';
import { Button } from './ui/button';

interface ButtonProps {
  children: React.ReactNode;
  isLoading: boolean;
}
const SubmitButton = ({ children, isLoading }: ButtonProps) => {
  return (
    <Button className="w-full mt-4">{isLoading ? 'Loading' : children}</Button>
  );
};

export default SubmitButton;
