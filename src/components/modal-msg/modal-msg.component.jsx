import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Text,
} from "@chakra-ui/react"

function ModalMsg({ isOpen, onClose, body }) {
  return (
    <Modal Modal onClose={onClose} size="md" isOpen={isOpen} isCentered >
      <ModalOverlay />
      <ModalContent>
        <ModalBody mt="2rem" mb="3rem" py="1rem">
          <Text
            fontSize="xl"
            textAlign="center"
          >
            {body}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalMsg;