import Activity from "@/components/Activity";
import { useRouter } from "next/router";

const page: React.FC = () => {
  const router = useRouter();
  const { page } = router.query;

  return <>{page === `Activity` && <Activity />}</>;
};

export default page;
