import React from 'react'

import './App.scss'

import Topbar from './components/Topbar'
import Filters from './components/Filters'
import Contacts from './components/Contacts'

class App extends React.Component {
  state = {
    allContacts: [],
    filteredContacts: [],
  }

  setAllContacts = (contacts) => {
    this.setState(() => ({ allContacts: contacts, filteredContacts: contacts }))
  }

  setContacts = (contacts) => {
    this.setState(() => ({ filteredContacts: contacts }))
  }

  render() {
    return (
      <div className="app" data-testid="app">
        <Topbar />
        <Filters
          allContacts={this.state.allContacts}
          filteredContacts={this.state.filteredContacts}
          setContacts={this.setContacts}
        />
        <Contacts
          filteredContacts={this.state.filteredContacts}
          setAllContacts={this.setAllContacts}
        />
      </div>
    )
  }
}

export default App
