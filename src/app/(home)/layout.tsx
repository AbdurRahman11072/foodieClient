import { Navbar1 } from "@/components/modules/home/navbar1";
import { auth, logo, menu } from "@/routes/home.routes";
import userService from "@/services/user.service";

const HomeLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await userService.getUserSession();

  return (
    <main>
      <Navbar1 logo={logo} menu={menu} auth={auth} session={session as any} />
      {children}
    </main>
  );
};

export default HomeLayout;
