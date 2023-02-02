import Activity from "@/components/Activity";
import Users from "@/components/User";
import { useRouter } from "next/router";

const page: React.FC = () => {
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
      {page === `Activity` && <Activity />}
      {page === `Users` && <Users />}
    </>
  );
};

export default page;
