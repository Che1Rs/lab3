import * as React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";

function Home({ navigation, data, setData }) {
  console.log("data = ", data)


  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 15,
        }}
      >
        <Image
          source={require("./assets/books.png")}
          resizeMode="contain"
          style={{
            width: 40,
            height: 40,
          }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          Book Management
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AddBook");
        }}
        style={{
          backgroundColor: "green",
          paddingHorizontal: 30,
          paddingVertical: 8,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#FFF",
          }}
        >
          Add Book
        </Text>
      </TouchableOpacity>
      <FlatList
        style={{
          width: "100%",
        }}
        data={data}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                backgroundColor: "#FFF",
                padding: 5,
                marginVertical: 8,
                marginHorizontal: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: "#888",
                  }}
                >
                  {item.author}
                </Text>
              </View>
              <View style={{
                flexDirection: 'row'
              }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: "blue",
                    width: 50,
                    alignItems: 'center',
                    paddingVertical: 2,
                    borderRadius: 4,
                    marginRight: 5
                  }}
                  onPress={() => {
                    navigation.navigate("EditBook", {index, ...item});
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                    }}
                  >
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "red",
                    width: 50,
                    alignItems: 'center',
                    paddingVertical: 2,
                    borderRadius: 4,
                  }}
                  onPress={() => {
                    let newData = [...data];
                    newData.splice(index, 1);
                    setData(newData);
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                    }}
                  >
                    Delete
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default Home;
