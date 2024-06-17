import React, { createContext, useContext, useState, ReactNode } from "react";
import ReactDOM from "react-dom";

type ModalContextType = {
    showModal: (content: ReactNode) => void;
    hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const showModal = (content: ReactNode) => {
        setModalContent(content);
    };

    const hideModal = () => {
        setModalContent(null);
    };

    return (
        <ModalContext.Provider value={{ showModal, hideModal }}>
            { children }
            { modalContent &&
                ReactDOM.createPortal(
                    <div className="modal-overlay">
                        <div className="modal-content">
                            { modalContent }
                            <button onClick={hideModal}>Close</button>
                        </div>
                    </div>,
                    document.body,
                )
            }
        </ModalContext.Provider>
    );
};

export function useModal()
{
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
}
