import React from 'react';
import { SiGmail } from "react-icons/si";

const CopiarGmail = ({ email }) => {
  const copiar = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert('Endereço de e-mail copiado para a área de transferência!');
    }).catch((err) => {
      alert('Falha ao copiar e-mail: ', err);
    });
  };

  return (
    <button onClick={copiar} style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
      <SiGmail size={30} />
    </button>
  );
};

export default CopiarGmail;
