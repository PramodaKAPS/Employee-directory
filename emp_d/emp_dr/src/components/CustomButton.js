import React from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomButton = ({ icon,label, onClick, className,iconClass }) => {
    return (
      <Button   className={`custom-button ${className}`} onClick={onClick}>
        {icon && <FontAwesomeIcon icon={icon} className={`button-icon ${iconClass}`} />}
        {label}
      </Button>
    );
  };

  export default CustomButton;