import React from 'react';

const Contact = () => {
  return (
    <section id="quote">
      <div className="container">
        <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_prefix" type="text" className="validate"/>
                <label for="icon_prefix">First Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">account_circle</i>
                <input id="icon_telephone" type="tel" className="validate"/>
                <label for="icon_telephone">Last Name</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">phone</i>
                <input id="icon_telephone" type="tel" className="validate"/>
                <label for="icon_telephone">Telephone</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">email</i>
                <input id="icon_telephone" type="tel" className="validate"/>
                <label for="icon_telephone">Email</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">work</i>
                <input id="icon_telephone" type="tel" className="validate"/>
                <label for="icon_telephone">Type of Service</label>
              </div>
              <div className="input-field col s6">
                <i className="material-icons prefix">date_range</i>
                <input id="icon_telephone" type="tel" className="validate"/>
                <label for="icon_telephone">Start Date</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light" type="submit" name="action">Get a Quote.<i className="material-icons right">send</i></button>
          </form>
        </div>
      </div> 
    </section>
  );
};

export default Contact;