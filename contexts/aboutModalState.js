import { createContext, useState, useContext } from "react";

const AboutModalContext = createContext();

export const AboutModalProvider = ({ children }) => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);

  const openModal = () => setIsAboutModalOpen(true);
  const closeModal = () => {
    console.log("Closed....");
    setIsAboutModalOpen(false);
  };

  return (
    <AboutModalContext.Provider
      value={{ isAboutModalOpen, openModal, closeModal }}
    >
      {children}
    </AboutModalContext.Provider>
  );
};

export const useAboutModal = () => {
  return useContext(AboutModalContext);
};
