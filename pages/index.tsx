import DataTable from "@/components/DataTable";
import Header from "@/components/Header";
import { GetServerSideProps } from "next";
import { useQueryStates, queryTypes } from "next-usequerystate";
import { useEffect, useRef, useState } from "react";
import DeleteTask from "../components/DeleteTask";
import Modal from "@/components/Modal";
import SideNav from "@/components/SideNav";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import EditForm from "../components/EditForm";

export interface Params {
  search: string;
  status: string;
  all: string;
}

const useClickOutside = (ref: any, callback: any) => {
  const handleClick = (e: any) => {
    if (ref.current && ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

const Home: React.FC<{ params: Params }> = ({ params: initialParams }) => {
  const [modal, setModal] = useState(false);
  const [sideNavView, setSideNavView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  useClickOutside(ref, () => setSideNavView(false));
  const [params, setParams] = useQueryStates(
    {
      search: queryTypes.string.withDefault(initialParams.search),
      status: queryTypes.string.withDefault(initialParams.status),
      all: queryTypes.string.withDefault(initialParams.all),
    },
    { history: "replace" }
  );
  return (
    <div
      className={`w-full flex-col flex items-center ${
        typeof document !== "undefined"
          ? sideNavView || modal
            ? disablePageScroll()
            : enablePageScroll()
          : null
      }`}
    >
      <div className="w-[70%] mt-[5%]">
        {sideNavView && (
          <div ref={ref}>
            <Modal>
              <></>
            </Modal>
          </div>
        )}
        <SideNav sideNavView={sideNavView}>
          <EditForm setSideNavView={setSideNavView} />
        </SideNav>
        {modal && (
          <Modal>
            <DeleteTask setModal={setModal} />
          </Modal>
        )}
        <Header setParams={setParams} params={params} />
        <DataTable setModal={setModal} setSideNavView={setSideNavView} />
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = {
    search: context.query.search || null,
    status: context.query.status || null,
    all: context.query.all || null,
  };
  return {
    props: { params },
  };
};
