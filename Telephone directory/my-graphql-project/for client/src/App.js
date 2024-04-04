import React, { useState, useEffect, useRef } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import { TextField, List, ListItem, ListItemText, Typography } from '@mui/material';
import { debounce } from 'lodash';
import './App.css';

const GET_CONTACTS = gql`
  query GetContacts($name: String) {
    contacts(name: $name) {
      name
      phone
    }
  }
`;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null); 
  const [executeSearch, { called, loading, data, error }] = useLazyQuery(GET_CONTACTS);

  useEffect(() => {
    const debouncedSearch = debounce(() => {
      if (searchTerm) {
        executeSearch({ variables: { name: searchTerm } });
      }
    }, 500);

    debouncedSearch();

    // A cleanup function that cancels the debounce if the component unmounts
    return () => debouncedSearch.cancel();
  }, [searchTerm, executeSearch]);

  // Effect to maintain focus on search bar
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [data]); // Re-apply focus whenever the data changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Typography variant="h4" style={{ color: 'black', marginBottom: '20px', marginTop: '40px', marginLeft: '20px' }}>Gelbe Seiten</Typography>
      <TextField
        label="Wen suchen Sie denn...?"
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ backgroundColor: 'white', marginBottom: '20px', marginLeft: '20px', width: '90%' }}
        inputRef={inputRef} 
      />
      <List>
        {called && data && data.contacts.map((contact, index) => (
          <ListItem key={index}>
            <ListItemText primary={contact.name} secondary={contact.phone} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;
