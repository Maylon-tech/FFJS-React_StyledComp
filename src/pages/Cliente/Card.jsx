import React, { useState } from 'react'
import { Button, ButtonContents, ButtonModal, CardGrid, IconContent, Modal, ModalTitle, ProfileContent, ProfileInfo } from './CustomerStyle'
import { AiOutlineEye, AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import EditModal from '../../components/EditModal/EditModal'

const Card = ({ id, name, lastname, email, avatar, onRemoveCustomer }) => {
    const [modal, setModal] = useState(false)
    const [editModal, setEditModal] = useState(false)
    const navigate = useNavigate()

    const handleToggleModal = () => {
        setModal(!modal)
    }

    const handleCloseRemoveModal = () => {
        setModal(false)
    }

    const handleEditModal = () => {
        setEditModal(!editModal)
    }

    const handleConfirm = (id) => {
        onRemoveCustomer(id)
        setModal(false)
    }

  return (
    <>
        <CardGrid>
            <ProfileContent>
                <img src={avatar} alt="" />
                <ProfileInfo>
                    <h1>{name} {lastname}</h1>
                    <p>{email}</p>
                </ProfileInfo>
            </ProfileContent>
            <IconContent>
                <Button onClick={handleToggleModal}>
                    <RiDeleteBin6Line size={40} color='gray'/>
                </Button>
                <Button onClick={() => navigate("singleCustomer")}>
                    <AiOutlineEye size={40} color='crimson'/>
                </Button>
                <Button onClick={handleEditModal}>
                    <AiOutlineEdit size={40} color='gray'/>
                </Button>            
            </IconContent>
        </CardGrid>

        <Modal opacity={modal}>
            <ModalTitle>
                Do you really want to Delete this User Profile?
            </ModalTitle>
            <ButtonContents>
                <ButtonModal onClick={() => handleConfirm(id)}>Confirm</ButtonModal>
                <ButtonModal onClick={handleCloseRemoveModal}>Cancel</ButtonModal>
            </ButtonContents>
        </Modal> 

        {editModal && <EditModal control={setEditModal} />}
    </>
  )
}

export default Card