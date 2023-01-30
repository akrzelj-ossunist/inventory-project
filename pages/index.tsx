import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { useQueryStates, queryTypes } from "next-usequerystate";
import { useState } from "react";
import DeleteTask from "../components/DeleteTask";
import Modal from "@/components/Modal";
import Navigation from "@/components/Navigation";

export interface Params {
  search: string;
  status: string;
  all: string;
}

const Home: React.FC<{ params: Params }> = ({ params: initialParams }) => {
  const [modal, setModal] = useState(false);
  const [params, setParams] = useQueryStates(
    {
      search: queryTypes.string.withDefault(initialParams.search),
      status: queryTypes.string.withDefault(initialParams.status),
      all: queryTypes.string.withDefault(initialParams.all),
    },
    { history: "replace" }
  );
  return (
    <div className="w-full flex-col flex items-center">
      <Navigation />
      <div className="w-[70%] mt-[5%]">
        {modal && (
          <Modal>
            <DeleteTask setModal={setModal} />
          </Modal>
        )}
        <Header setParams={setParams} params={params} />
        <DataTable setModal={setModal} />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = {
    search: context.query.search || "",
    status: context.query.status || "",
    all: context.query.all || "",
  };
  return {
    props: { params },
  };
};
