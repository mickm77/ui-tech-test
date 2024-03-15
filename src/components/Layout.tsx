import Header from "./header";
import css from "./Layout.module.css";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={css.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
