import React,{useState} from 'react';
import {Image,FlatList, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('');
  return (
      <View style={styles.container}>
        <Text style={styles.Label}>Living Things: Animals and Category They Belong</Text>
        <FlatList
          data = {[
            {animalName: 'Chimpanzee', category: 'Mammal', description: 'Chimpanzees are great apes found across central and West Africa. Along with bonobos, they are our closest living relatives, sharing 98.7 percent of our genetic blueprint. Humans and chimps are also thought to share a common ancestor who lived some seven to 13 million years ago.', imageURL: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcT3-fOEmE-Osuv4kf5tb4voUm6tMtTSNpVKyYkR33dpCDM8iTwTIfGj6cXNN8MdJw3Apn9yd2U5x6fv1Yw'},
            {animalName: 'Alligator', category: 'Reptile', description: 'Alligators have a long, rounded snout that has upward facing nostrils at the end; this allows breathing to occur while the rest of the body is underwater. The young have bright yellow stripes on the tail; adults have dark stripes on the tail. It is easy to distinguish an alligator from a crocodile by the teeth.', imageURL: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcSNsjcWQdwEwG5Nlwc7KzX5T9R1FEYP9SglwJQntX5-fTPRT9FoFaRGBsjVfvY08978KgO7j-3ax3XgT-I'},
            {animalName: 'Hawk', category: 'Bird', description: 'Hawks are strong, powerful birds. Their feet are equipped with sharp, curved talons for capturing prey, and their strong beaks are hooked for biting and tearing flesh. Swift fliers, some hawks can attain speeds of over 150 mph when diving.', imageURL: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRfbAOzkzawDHzg8S6jgZofBjfe55BN-XXhq7yEeEKjDoUUBdeOZs0NzMnuSzxqSlNoCsjQIedS7IkFCrk'},
            {animalName: 'Sea Turtle', category: 'Reptile', description: 'Sea turtles are reptiles remarkably suited to life in the sea. Their hydrodynamic shape, large size, and powerful front flippers allow them to dive to great depths and swim long distances. These front flippers are long, narrow, and winglike, while their hind flippers are shorter.', imageURL: 'https://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSh_BYQYGH7b0y-nMFhJsMKsqbbCM9TfuM5IwGGxActFLz8v0p7SYlZ8cHvPUq8mPpqx9mInE4FqIov1Ak'},
            {animalName: 'Corals', category: 'Anthozoa', description: 'Coral is a class of colonial animal that is related to hydroids, jellyfish, and sea anemones. Stony corals, a type of coral characterized by their hard skeleton, are the bedrock of the reef. Stony coral colonies are composed of hundreds of thousands of individual living polyps.', imageURL: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220509-coral-miami-se-1055a-19af74.jpg'}
          ]}
          renderItem={({item}) => 
            <View>
              <Image 
                style={styles.itemImage}
                source={{uri: item.imageURL}}
              />
              <Text style={styles.textAnimals}>{item.animalName}</Text>
              <Text style={styles.textCategory}>{item.category}</Text>
              <Text style={styles.textDescription}>{item.description}</Text>
            </View>
            }
          />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20
  },
  itemImage: {
    width: 300,
    height: 300,
  },
  textAnimals: {
    fontWeight: 700,
    color: 'white',
    fontSize: 28,
  },
  textCategory: {
    fontStyle: 'italic',
    fontWeight: 400,
    color: 'white',
    fontSize: 20
  },
textDescription: {
  fontSize: 15,
  textAlign: 'justify',
  color: 'white',
  paddingBottom: 8
},
Label: {
  fontSize: 35,
  fontWeight: 700,
  color: 'white'
},
input: {
  height: 40,
  margin: 10,
  borderWidth: 1,
  padding: 10,
  backgroundColor: 'white'
}

});
