const SideNav: React.FC<{
  children: JSX.Element;
  sideNavView: boolean;
}> = ({ children, sideNavView }) => {
  return (
    <div className="w-full flex justify-end relative">
      <div
        className={`w-[40%] h-[100vh] bg-white rounded-l-2xl overflow-y-auto fixed top-0 right-0 z-50 ${
          sideNavView ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        {children}
      </div>
    </div>
  );
};

export default SideNav;
