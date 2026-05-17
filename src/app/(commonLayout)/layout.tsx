import { Navbar1 } from "@/components/modules/home/navbar1";
import { auth, logo, menu } from "@/routes/home.routes";

const commonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar1 logo={logo} menu={menu} auth={auth} />
      {children}
    </main>
  );
};

export default commonLayout;
