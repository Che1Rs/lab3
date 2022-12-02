import * as React from "react";
import { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

function EditBook({ data, setData, navigation, route }) {
  const { title, author, index } = route.params;
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  useEffect(() => {
    setBookName(title);
    setBookAuthor(author);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
      }}
    >
      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        Book Name
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          paddingHorizontal: 10,
          marginBottom: 30,
        }}
        onChangeText={(text) => setBookName(text)}
        value={bookName}
      />

      <Text
        style={{
          fontSize: 18,
          marginBottom: 10,
        }}
      >
        Book Author
      </Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          paddingHorizontal: 10,
          marginBottom: 30,
        }}
        onChangeText={(text) => setBookAuthor(text)}
        value={bookAuthor}
      />

      <TouchableOpacity
        onPress={() => {
          if (bookName && bookAuthor) {
            let newData = [...data];
            newData.splice(index, 1, {
              title: bookName,
              author: bookAuthor,
            });
            setData(newData);
            navigation.goBack("Home");
          }
        }}
        style={{
          backgroundColor: "green",
          width: "80%",
          paddingVertical: 8,
          borderRadius: 15,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#FFF",
          }}
        >
          Enter
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default EditBook;
