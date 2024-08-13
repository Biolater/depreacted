import { Navbar } from "@/components/index";
const SymptomCheckerLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default SymptomCheckerLayout;
