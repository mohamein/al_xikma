'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import SubmitButton from '../SubmitButton';

import { editEmployee } from '@/lib/actions/employee.actions';
const EditEmployee = ({ id, employee }: { id: string; employee: any }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: any) => {
    let name = e.target.name;
    let value = e.target.value;
    setForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  console.log(form);
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const result = await editEmployee(id, {
        name: form.fullName,
        email: form.email,
        phone: form.phone,
        address: form.address,
      });
      if (result) {
        console.log(result);
        router.push('/dashboard/employee');
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="fullName">Employee Name:</Label>
        <Input
          type="text"
          name="fullName"
          placeholder="Edit Employee Name"
          value={employee?.name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email">Employee Email:</Label>
        <Input
          type="text"
          name="email"
          placeholder="Edit Employee Email"
          value={employee?.email}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Employee Phone:</Label>
        <Input
          type="text"
          name="phone"
          placeholder="Edit Employee Phone"
          value={employee?.phone}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="address">Employee Address:</Label>
        <Input
          type="text"
          name="address"
          placeholder="Edit Employee Address"
          value={employee?.address}
          onChange={handleChange}
        />
      </div>
      <SubmitButton isLoading={isLoading}>Edit</SubmitButton>
    </form>
  );
};

export default EditEmployee;
