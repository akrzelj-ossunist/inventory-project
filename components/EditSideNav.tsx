import { Field, Form, Formik } from "formik";
import Image from "next/image";
import * as yup from "yup";
import save from "../public/save.png";
import { useEffect, useRef } from "react";
import { CustomSelect } from "./CustomSelectFeedback";

interface editForm {
  itemNumber: string;
  title: string;
  category: string;
  date: Date | number;
  guarantee: boolean;
  serialNumber: string;
  description: string;
}

const EditSideNav: React.FC<{ setSideNavView: (value: boolean) => void }> = ({
  setSideNavView,
}) => {
  const editValues: editForm = {
    itemNumber: "",
    title: "",
    category: "Select",
    date: Date.now(),
    guarantee: false,
    serialNumber: "",
    description: "",
  };

  const validationEdit = yup.object().shape({
    itemNumber: yup
      .string()
      .min(5, "Invalid item number")
      .max(6, "Invalid item number")
      .required("Must fill this spot..."),
    title: yup
      .string()
      .min(2, "Invalid title")
      .max(20, "Invalid title")
      .required("Must fill this spot..."),
    category: yup.string().required("Must fill this spot..."),
    date: yup.date(),
    guarantee: yup.boolean(),
    serialNumber: yup
      .string()
      .min(24, "Invalid serial number")
      .max(24, "Invalid serial number")
      .required("Must fill this spot..."),
    description: yup.string().max(100, "You exceded amount of characters..."),
  });

  return (
    <div className="w-full flex justify-end">
      <div className="w-[40%] h-[100vh] bg-white rounded-l-2xl overflow-y-auto">
        <div className="m-10">
          <div className="flex justify-between">
            <p className="font-bold text-2xl">Add item</p>
            <button
              onClick={() => setSideNavView(false)}
              className="text-blue-500"
            >
              Close
            </button>
          </div>
          <Formik
            initialValues={editValues}
            validationSchema={validationEdit}
            onSubmit={() => {
              setSideNavView(false);
            }}
          >
            {({ values, errors, touched }) => {
              return (
                <Form>
                  <div className="flex flex-col m-5 ml-0">
                    <label>Item number</label>
                    <Field
                      name="itemNumber"
                      placeholder="#1950"
                      className="py-2 w-32 pl-3 border-[1px] border-gray-400 rounded-lg"
                    />
                    {errors.itemNumber && touched.itemNumber && (
                      <label className="text-red-500">{errors.title}</label>
                    )}
                  </div>
                  <div className="flex flex-col m-5 ml-0">
                    <label>Title</label>
                    <Field
                      name="title"
                      placeholder="Dell docker hub"
                      className="py-2 w-[350px] pl-3 border-[1px] border-gray-400 rounded-lg"
                    />
                    {errors.title && touched.title && (
                      <label className="text-red-500">{errors.title}</label>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold text-2xl">Category and details</p>
                    <button className="text-blue-500 underline">Add new</button>
                  </div>
                  <div className="flex flex-col m-5 ml-0 h-80">
                    <label>Category:</label>
                    <div className="w-[350px]">
                      <CustomSelect
                        className={
                          "shadow-lg border-[1px] border-gray-400 rounded-lg top-2"
                        }
                        name={"category"}
                        errors={errors.category}
                        options={[
                          { value: "Category 1", label: "Category 1" },
                          { value: "Category 2", label: "Category 2" },
                          { value: "Category 3", label: "Category 3" },
                          { value: "Category 4", label: "Category 4" },
                          { value: "Category 5", label: "Category 5" },
                        ]}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col m-5 ml-0">
                    <div className="flex">
                      <label>Date of purchase</label>
                      <label>(optional)</label>
                    </div>
                    <Field
                      name="date"
                      className="py-2 w-60 pl-3 border-[1px] border-gray-400 rounded-lg"
                    />
                    {errors.date && touched.date && (
                      <label className="text-red-500">{errors.date}</label>
                    )}
                  </div>
                  <div className="flex m-5 ml-0 items-center">
                    <Field
                      type="checkbox"
                      name="guarantee"
                      className="w-6 h-6 rounded-xl mr-2"
                    />
                    <label>Has guarantee</label>
                  </div>
                  <div className="flex flex-col m-5 ml-0">
                    <div className="flex">
                      <label>Serial number:</label>
                      <label>(optional)</label>
                    </div>
                    <Field
                      name="serialNumber"
                      className="py-2 w-[85%] pl-3 border-[1px] border-gray-400 rounded-lg"
                    />
                    {errors.serialNumber && touched.serialNumber && (
                      <label className="text-red-500">
                        {errors.serialNumber}
                      </label>
                    )}
                  </div>
                  <div className="flex flex-col m-5 ml-0">
                    <div className="flex">
                      <label>Description</label>
                      <label>(optional)</label>
                    </div>
                    <Field
                      name="description"
                      as="textarea"
                      className="py-2 w-[85%] pl-3 border-[1px] border-gray-400 rounded-lg"
                    />
                    {errors.description && touched.description && (
                      <label className="text-red-500">
                        {errors.description}
                      </label>
                    )}
                  </div>
                  <div className="flex m-5 ml-0 items-center">
                    <Field
                      type="checkbox"
                      className="w-6 h-6 rounded-xl mr-2"
                    />
                    <label>I want to keep adding more items</label>
                  </div>
                  <div className="relative">
                    <Image
                      src={save}
                      alt="save"
                      className="w-5 h-6 absolute top-3 left-2"
                    />
                    <button
                      className="font-bold text-white bg-blue-800 py-3 pl-10 px-4 rounded-md"
                      type="submit"
                    >
                      Save details
                    </button>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default EditSideNav;
