import React, { useState } from 'react'
import { Button, ButtonContents, ButtonModal, CardGrid, IconContent, Modal, ModalTitle, ProfileContent, ProfileInfo } from './CustomerStyle'
import { AiOutlineEye, AiOutlineEdit } from 'react-icons/ai'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Card = ({ id, name, lastname, email, avatar }) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    const handleToggleModal = () => {
        setModal(!modal)
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
                <Button>
                    <RiDeleteBin6Line size={40} color='gray'/>
                </Button>
                <Button onClick={() => navigate("singleCustomer")}>
                    <AiOutlineEye size={40} color='crimson'/>
                </Button>
                <Button>
                    <AiOutlineEdit size={40} color='gray'/>
                </Button>            
            </IconContent>
        </CardGrid>

        <Modal onClick={() => handleToggleModal()}>
            <ModalTitle>
                Do you really want to Delete this User Profile?
            </ModalTitle>
            <ButtonContents>
                <ButtonModal>Confirm</ButtonModal>
                <ButtonModal>Cancel</ButtonModal>
            </ButtonContents>
        </Modal>
    </>
  )
}

export default Card