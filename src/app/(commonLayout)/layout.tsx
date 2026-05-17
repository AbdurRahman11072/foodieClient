import { Navbar1 } from "@/components/modules/home/navbar1";
import { authClient } from "@/lib/auth-client";
import { auth, logo, menu } from "@/routes/home.routes";

const commonLayout = async ({ children }: { children: React.ReactNode }) => {
  const userData = await authClient.getSession();
  const session = userData?.data;
  console.log("commonlayout", session);
  console.log("User data : ", userData);

  return (
    <main>
      <Navbar1 logo={logo} menu={menu} auth={auth} session={session as any} />
      {children}
    </main>
  );
};

export default commonLayout;
