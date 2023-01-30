const Modal: React.FC<{
  children: JSX.Element;
}> = ({ children }) => {
  return (
    <div className="w-[100vw] fixed h-[100vh] bg-[rgba(0,0,0,0.4)] top-0 left-0 z-50">
      {children}
    </div>
  );
};

export default Modal;
