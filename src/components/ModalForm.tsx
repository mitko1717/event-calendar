import { Box, Modal } from '@mui/material'
import React, { FC } from 'react'
import { ModalProps } from '@/interfaces';
import FormikForm from './Formik';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const ModalForm:FC <ModalProps> = ({isModalOpen, setIsModalOpen}) => {
    const handleClose = () => {
        setIsModalOpen(false)
    }
  return (
    <React.Fragment>
      <Modal
        hideBackdrop
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 600, }}>
          <h2 id="child-modal-title">Add new idea item</h2>
            <FormikForm />
        </Box>
      </Modal>
    </React.Fragment>
  )
}

export default ModalForm