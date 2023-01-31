import { Box, Modal } from "@mui/material";
import React, { FC } from "react";
import { ModalEditProps, ModalProps } from "@/interfaces";
import Button from "@mui/material/Button/";
import FormEdit from "./FormEdit";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalFormEdit: FC<ModalEditProps> = ({
  isModalEditOpen,
  setIsModalEditOpen,
}) => {
  const handleClose = () => {
    setIsModalEditOpen(false);
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={isModalEditOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 600 }}>
          <span className="absolute top-2 right-2">
            <Button variant="contained" onClick={handleClose}>
              <span className="text-2xl font-bold text-gray-400">CLOSE</span>
            </Button>
          </span>
          <h2 className="font-bold text-2xl">EDIT IDEA ITEM</h2>
          <FormEdit setIsModalEditOpen={setIsModalEditOpen} />
        </Box>
      </Modal>
    </>
  );
};

export default ModalFormEdit;
