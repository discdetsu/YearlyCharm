import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
	backgroundColor: 'white',
	alignItems: 'center',
  },
  cover: {
	width: '100%',
    height: null,
	aspectRatio: 3 / 2 
  },
  title: {
	fontFamily: 'Kailasa',
	fontWeight: 'bold',
	fontSize: 20
  },
  bodyText: {
   	fontFamily: 'Kailasa',
    fontSize: 16
  }
});

const DisplayCover = () => {
  return (
	<View style={styles.container}>
	    <Image style={styles.cover}
    	    source={require('./static/cover.jpg')}
   		/>
		<Text style={styles.title}> {'\n'} Happy Anniversary!! {'\n'}</Text>
		<Text style={styles.bodyText}> Tasks: - Add family member data </Text>
		<Text style={styles.bodyText}> - Add vaccination notifying system </Text>
		<Text style={styles.bodyText}> - More requirements from แม่ต๋า </Text>
      <View style={{
			  width: '100%', height: '100%', backgroundColor: 'white'
      }} />
	</View>
  );
}

export default DisplayCover;
