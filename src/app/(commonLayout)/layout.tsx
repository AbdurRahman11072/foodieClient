"use client";

import { Navbar1 } from "@/components/modules/home/navbar1";
import { authClient } from "@/lib/auth-client";
import { auth, logo, menu } from "@/routes/home.routes";

const commonLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = authClient.useSession();

  return (
    <main>
      <Navbar1 logo={logo} menu={menu} auth={auth} />
      {children}
    </main>
  );
};

export default commonLayout;
