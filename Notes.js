import React, { useState } from 'react';
import { View, Text, TextInput, Animated, PanResponder } from 'react-native';

const Notes = () => {
  const [text, setText] = useState(''); // State variable for the note text
  const [title, setTitle] = useState(''); // State variable for the note title
  const date = new Date().toLocaleDateString(); // Use the Date object to get the current date
  const [position, setPosition] = useState({ x: 0, y: 0 }); // State variable for the position of the Notes component

  // Create an Animated.Value for the x and y position of the Notes component
  const animatedValue = new Animated.ValueXY({ x: 0, y: 0 });

  // Use the PanResponder API to create a gesture responder
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Return true if the user has moved the Notes component
      return gestureState.dx !== 0 || gestureState.dy !== 0;
    },
    onPanResponderMove: (evt, gestureState) => {
      // Update the x and y position of the animatedValue based on the gestureState
      animatedValue.setValue({
        x: gestureState.dx,
        y: gestureState.dy,
      });
    },
  });

  return (
    <Animated.View
      // Use the animatedValue to style the Animated.View component
      style={[
        styles.stickyNote,
        {
          transform: [
            { translateX: animatedValue.x },
            { translateY: animatedValue.y },
          ],
        },
      ]}
      // Use the panHandlers object from the panResponder to enable drag gestures
      {...panResponder.panHandlers}
    >
      <TextInput
        placeholder="Enter note title"
        placeholderTextColor="#99917a"
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.title} // Use the TextInput component with a title style
      />
      <TextInput
        placeholder="Enter note text"
        placeholderTextColor="#99917a"
        value={text}
        onChangeText={text => setText(text)}
        style={styles.text} // Use the TextInput component with a text style
        
      />
      <Text style={styles.date}>Date: {date}</Text> 
    </Animated.View>
  );
};

const styles = {
  stickyNote: {
    backgroundColor: '#FFF2CC',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      marginBottom: 10,
    },
    date: {
      fontSize: 14,
      color: '#666',
    },
  };
  
export default Notes;
