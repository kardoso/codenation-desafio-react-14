import React from 'react'

import Contact from './Contact'

class Contacts extends React.Component {
	state = {
		contacts: [],
	}

	componentDidMount() {
		fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts').then(
			(response) => { return response.json() }
		).then((data) => {
      this.setState(() => ({ contacts: data }))
      this.props.setAllContacts && this.props.setAllContacts(data)
		})
	}

  render() {
    const contacts = this.props.filteredContacts ? this.props.filteredContacts : this.state.contacts;
    return (
			<div className="container" data-testid="contacts">
        <section className="contacts">
          <article className="contact">
            <span className="contact__avatar" />
            <span className="contact__data">Nome</span>
            <span className="contact__data">Telefone</span>
            <span className="contact__data">País</span>
            <span className="contact__data">Admissão</span>
            <span className="contact__data">Empresa</span>
            <span className="contact__data">Departamento</span>
          </article>
          {contacts.map((contact) => (
						<Contact key={contact.id} data={contact} />
          ))}
        </section>
      </div>
    )
  }
}

export default Contacts
