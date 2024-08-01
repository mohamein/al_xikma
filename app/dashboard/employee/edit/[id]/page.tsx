import EditEmployee from '@/components/forms/EditEmployee';
import { getEmployee } from '@/lib/actions/employee.actions';
const EditEmployeePage = async ({ params }: any) => {
  const employe: any = await getEmployee(params.id);
  return (
    <div className="flex flex-col gap-4 px-6">
      <div className="space-y-2">
        <h2 className="text-xl text-slate-700 font-semibold">
          Complete The Form
        </h2>
        <p className="text-gray-400 font-normal">employee form editing.</p>
      </div>

      <EditEmployee employee={employe} id={params.id} />
    </div>
  );
};

export default EditEmployeePage;
