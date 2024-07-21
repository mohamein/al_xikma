import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-4 h-screen">
      <Sidebar />

      <div className="flex flex-col gap-4 w-full">
        <Header />

        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
