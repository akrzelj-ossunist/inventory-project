const DeleteTask: React.FC<{ setModal: (value: boolean) => void }> = ({
  setModal,
}) => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="bg-white py-10 px-16 rounded-md">
        <p className="font-bold text-3xl mb-4">Delete this?</p>
        <div className="flex">
          <button
            className="text-white bg-red-600 hover:bg-red-700 py-2 px-6 rounded-lg mr-4"
            onClick={() => setModal(false)}
          >
            Delete
          </button>
          <button
            className="text-gray-500 bg-gray-200 py-2 px-6 rounded-lg"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTask;
