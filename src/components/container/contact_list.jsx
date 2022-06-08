import React from "react";
import { Contact } from "../../models/contact.class";
import ContactComponent from "../pure/contact";

const ContactListComponent = () => {
  const defaultContact = new Contact(
    "Diego",
    "Lagos",
    "example@email.com",
    true
  );

  return (
    <div>
      <div>
        <h1>Your contacts:</h1>
      </div>
      {/* TODO: Aplicar un for/map para renderizar una lista */}
      <ContactComponent contact={defaultContact}></ContactComponent>
    </div>
  );
};

export default ContactListComponent;
