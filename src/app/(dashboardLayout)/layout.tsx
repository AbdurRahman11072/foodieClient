"use client";

import { AppSidebar } from '@/components/modules/dashboard/sidebar/appSidebar';
import Header from '@/components/modules/dashboard/sidebar/sidebarHeader';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { authClient } from '@/lib/auth-client';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = authClient.useSession();

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 p-5">{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default DashboardLayout;
