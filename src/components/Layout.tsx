const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex-1 flex flex-col max-w-[1440px] w-full mx-auto">
      {children}
    </div>
  );
};

export default Layout;
