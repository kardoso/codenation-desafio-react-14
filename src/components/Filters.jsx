import React from 'react'

import FilterButton from './FilterButton'

class Filters extends React.Component {
  state = {
    searchString: '',
    activeButtonIndex: null,
  }

  filterBySearch = (e) => {
    e.persist()
    const inputValue = e.target.value
    this.setState(() => ({
      searchString: inputValue,
    }))

    const { allContacts, setContacts } = this.props

    const filteredContacts = allContacts.filter((contact) =>
      contact.name.toLowerCase().includes(inputValue.toLowerCase())
    )

    setContacts(filteredContacts)
  }

  orderByString = (property) => {
    const { allContacts, filteredContacts, setContacts } = this.props
    const contacts = allContacts.sort(function (a, b) {
      if (a[property] < b[property]) {
        return -1
      }
      if (a[property] > b[property]) {
        return 1
      }
      return 0
    })

    setContacts(
      contacts.filter((contact) => filteredContacts.includes(contact))
    )
  }

  orderByAdmissionDate = () => {
    const { allContacts, filteredContacts, setContacts } = this.props
    const contacts = allContacts.sort(function (a, b) {
      return new Date(b.admissionDate) - new Date(a.admissionDate)
    })

    setContacts(
      contacts.filter((contact) => filteredContacts.includes(contact))
    )
  }

  changeButtonIndex = (index) => this.setState({ activeButtonIndex: index })

  render() {
    const buttons = [
      { property: 'name', name: 'Nome' },
      { property: 'country', name: 'País' },
      { property: 'company', name: 'Empresa' },
      { property: 'department', name: 'Departamento' },
      { property: null, name: 'Data de admissão' },
    ]
    return (
      <div className="container">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              value={this.state.searchString}
              onChange={(e) => this.filterBySearch(e)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>
          {buttons.map((button, index) => (
            <FilterButton
              key={index}
              index={index}
              isActive={this.state.activeButtonIndex === index}
              onClick={() => {
                button.property !== null
                  ? this.orderByString(button.property)
                  : this.orderByAdmissionDate()
                this.changeButtonIndex(index)
              }}
              text={button.name}
            />
          ))}
        </section>
      </div>
    )
  }
}

export default Filters
