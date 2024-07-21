'use client';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from './ui/input';
import { Control } from 'react-hook-form';
import React from 'react';
interface CustomProps {
  control: Control<any>;
  name?: string;
  label: string;
  placeholder: string;
  type: string;
  children?: React.ReactNode;
}
const FormFields = (props: CustomProps) => {
  const { control, label, name, placeholder, type } = props;
  return (
    <FormField
      control={control}
      name={name!}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label!}</FormLabel>
          <FormControl>
            {type === 'select' ? (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>{props.children}</SelectContent>
              </Select>
            ) : type === 'number' ? (
              <Input
                type={type!}
                min={100}
                placeholder={placeholder!}
                {...field}
                onChange={(e) => field.onChange(e.target.valueAsNumber)}
              />
            ) : (
              <Input
                type={type!}
                min={100}
                placeholder={placeholder!}
                {...field}
              />
            )}
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormFields;
