import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [object, setObject] = useState(null);
  const [message, setMessage] = useState(null);

  const values = {
    name,
    email,
    phone,
    object,
    message,
  };

  console.log(values);
  return (
    <div>
      <h1 className="h1-contact">Formulaire de Contact</h1>

      <form className="contact-form">
        <div className="form-content">
          <label htmlfor="name" className="label-contact">
            Nom et Prenom :
          </label>
          <input
            className="input-contact"
            type="text"
            id="name"
            nanme="name"
            placeholder="Nom et Prenom"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlfor="email" className="label-contact">
            Adresse mail :
          </label>
          <input
            className="input-contact"
            type="email"
            id="email"
            nanme="email"
            placeholder="exemple@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlfor="phone" className="label-contact">
            N° Téléphone :
          </label>
          <input
            className="input-contact"
            type="text"
            id="phone"
            nanme="phone"
            placeholder="+12345678"
            onChange={(e) => setPhone(e.target.value)}
          />

          <label for="Sujet" className="label-contact">
            Sujet:
          </label>
          <select
            className="select-contact"
            name="Subject"
            onChange={(e) => setObject(e.target.value)}
          >
            <option selected>Selectionner l'objet de la demande</option>
            <option value="devis">Devis</option>
            <option value="questions">Questions</option>
            <option value="Autre">Autre</option>
          </select>

          <label htmlfor="message" className="label-contact">
            {' '}
            Message :
          </label>
          <textarea
            className="message-contact"
            placeholder="Merci de renseigner vos questions ou commentaires"
            id="message"
            cols="20"
            rows="10"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <label className="label-contact">
            <input type="checkbox" /> En cochant cette case, j'accepte de
            recevoir des informations sur les différentes offres disponibles.
          </label>

          <button className="button-contact" type="Submit" value="Envoyer">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
