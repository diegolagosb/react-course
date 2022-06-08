import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
  const [contactStatus, setContactStatus] = useState(contact.connected);

  const changeStateContact = () => {
    setContactStatus(!contactStatus);
  };

  return (
    <div>
      <h2>Name: {contact.name}</h2>
      <h3>Lastname: {contact.lastname}</h3>
      <h4>Email: {contact.email}</h4>
      <h5>
        This contact is:{" "}
        {contactStatus ? "ONLINE CONTACT " : "UNAVAILABLE CONTACT"}
      </h5>
      <button onClick={changeStateContact}>Change contact status</button>
    </div>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};

export default ContactComponent;
