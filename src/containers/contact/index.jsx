import React from "react";
import "./style.scss";

const Contact = () => {
  return (
    <div className="father" id="contact">
      <div class="container-contact">
        <h1>CONTACT</h1>
        <div class="column-contact">
          <div class="card-contact">
            <img src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Email Image" />
            <h2>Email</h2>
            <p>tranhuumy2902@gmail.com</p>
          </div>
        </div>

        <div class="column-contact">
          <div class="card-contact">
            <img src="https://freeiconshop.com/wp-content/uploads/edd/phone-flat.png" alt="Email Image" />
            <h2>Phone</h2>
            <p>+84 70 786 7864 </p>
          </div>
        </div>
        <div class="column-contact">
          <div class="card-contact">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png" alt="Email Image" />
            <h2>Facebook</h2>
            <p>facebook.com/mykhung292</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
