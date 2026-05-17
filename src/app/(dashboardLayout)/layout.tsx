import { AppSidebar } from '@/components/modules/dashboard/sidebar/appSidebar';
import Header from '@/components/modules/dashboard/sidebar/sidebarHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { authClient } from '@/lib/auth-client';

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const userData = await authClient.getSession();
  const session = userData?.data;

  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      <SidebarInset>
        <Header />
        <main className="flex-1 p-5">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
