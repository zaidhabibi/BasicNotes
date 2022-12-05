// Notes.js

import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const Notes = () => {
  const [text, setText] = useState(''); // State variable for the note text
  const [title, setTitle] = useState(''); // State variable for the note title
  const [date, setDate] = useState(''); // State variable for the note date

  return (
    <View>
      <TextInput
        placeholder="Enter note title"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        placeholder="Enter note text"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        placeholder="Enter note date"
        value={date}
        onChangeText={text => setDate(text)}
      />
      <Text>Title: {title}</Text>
      <Text>Text: {text}</Text>
      <Text>Date: {date}</Text>
    </View>
  );
};

export default Notes;
