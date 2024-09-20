import Modal from "components/Modal";

const ImagePreviewModal = ({ open, setOpen, image }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="bg-[#111111] flex items-center justify-center py-4 px-4 h-[550px] w-full">
        <img
          src={`https://testproject560.online/git/uploads/${image}`}
          alt="photo"
          className="h-full w-full object-contain"
        />
      </div>
    </Modal>
  );
};

export default ImagePreviewModal;
