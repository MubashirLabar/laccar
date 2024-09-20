import Modal from "components/Modal";

const ImagePreviewModal = ({ open, setOpen, image }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className=" flex items-center justify-center py-4 px-4 h-[550px] w-full">
        <img
          src={`${process.env.REACT_APP_BASE_URL}${image}`}
          className="h-full w-full object-contain"
        />
      </div>
    </Modal>
  );
};

export default ImagePreviewModal;
