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
            {animalName: 'Corals', category: 'Anthozoa', description: 'Coral is a class of colonial animal that is related to hydroids, jellyfish, and sea anemones. Stony corals, a type of coral characterized by their hard skeleton, are the bedrock of the reef. Stony coral colonies are composed of hundreds of thousands of individual living polyps.', imageURL: 'https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220509-coral-miami-se-1055a-19af74.jpg'},
            {animalName: 'Salamander', category: 'Amphibian', description: 'Salamanders are a type of amphibian; they have moist skin and are usually found in damp habitats near or in water. Salamanders are closer related to frogs despite how different frogs and salamanders look. Lizards are a type of reptile; they have dry skin with scales and are purely terrestrial.', imageURL: 'data:image/jpeg;base64,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'},
            {animalName: 'Kangaroo', category: 'Marsupials', description: 'Kangaroos are four marsupials from the family Macropodidae. In common use the term is used to describe the largest species from this family, the red kangaroo, as well as the antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo.', imageURL: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QCERXhpZgAASUkqAAgAAAACAA4BAgBEAAAAJgAAAJiCAgASAAAAagAAAAAAAAAiVGhyZWUga2FuZ2Fyb29zIG5lYXIgdGhlIGJlYWNoIGluIFRvb3JidWwgaW4gUXVlZW5zbGFuZCwgQXVzdHJhbGlhIldpbGxpYW0gUm9zcy1Kb25lc//tAKZQaG90b3Nob3AgMy4wADhCSU0EBAAAAAAAihwCUAAIcm9zczEyNDgcAngARCJUaHJlZSBrYW5nYXJvb3MgbmVhciB0aGUgYmVhY2ggaW4gVG9vcmJ1bCBpbiBRdWVlbnNsYW5kLCBBdXN0cmFsaWEiHAJ0ABJXaWxsaWFtIFJvc3MtSm9uZXMcAm4AGEdldHR5IEltYWdlcy9pU3RvY2twaG90b//hBW5odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iPgoJPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KCQk8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOklwdGM0eG1wQ29yZT0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcENvcmUvMS4wL3htbG5zLyIgICB4bWxuczpHZXR0eUltYWdlc0dJRlQ9Imh0dHA6Ly94bXAuZ2V0dHlpbWFnZXMuY29tL2dpZnQvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwbHVzPSJodHRwOi8vbnMudXNlcGx1cy5vcmcvbGRmL3htcC8xLjAvIiAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgZGM6UmlnaHRzPSJXaWxsaWFtIFJvc3MtSm9uZXMiIHBob3Rvc2hvcDpDcmVkaXQ9IkdldHR5IEltYWdlcy9pU3RvY2twaG90byIgR2V0dHlJbWFnZXNHSUZUOkFzc2V0SUQ9IjE3MzkwOTExNCIgeG1wUmlnaHRzOldlYlN0YXRlbWVudD0iaHR0cHM6Ly93d3cuZ2V0dHlpbWFnZXMuY29tL2V1bGE/dXRtX21lZGl1bT1vcmdhbmljJmFtcDt1dG1fc291cmNlPWdvb2dsZSZhbXA7dXRtX2NhbXBhaWduPWlwdGN1cmwiID4KPGRjOmNyZWF0b3I+PHJkZjpTZXE+PHJkZjpsaT5yb3NzMTI0ODwvcmRmOmxpPjwvcmRmOlNlcT48L2RjOmNyZWF0b3I+PGRjOmRlc2NyaXB0aW9uPjxyZGY6QWx0PjxyZGY6bGkgeG1sOmxhbmc9IngtZGVmYXVsdCI+JnF1b3Q7VGhyZWUga2FuZ2Fyb29zIG5lYXIgdGhlIGJlYWNoIGluIFRvb3JidWwgaW4gUXVlZW5zbGFuZCwgQXVzdHJhbGlhJnF1b3Q7PC9yZGY6bGk+PC9yZGY6QWx0PjwvZGM6ZGVzY3JpcHRpb24+CjxwbHVzOkxpY2Vuc29yPjxyZGY6U2VxPjxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPjxwbHVzOkxpY2Vuc29yVVJMPmh0dHBzOi8vd3d3LmdldHR5aW1hZ2VzLmNvbS9kZXRhaWwvMTczOTA5MTE0P3V0bV9tZWRpdW09b3JnYW5pYyZhbXA7dXRtX3NvdXJjZT1nb29nbGUmYW1wO3V0bV9jYW1wYWlnbj1pcHRjdXJsPC9wbHVzOkxpY2Vuc29yVVJMPjwvcmRmOmxpPjwvcmRmOlNlcT48L3BsdXM6TGljZW5zb3I+CgkJPC9yZGY6RGVzY3JpcHRpb24+Cgk8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJ3Ij8+Cv/bAIQACQYHCAcGCQgHCAoKCQsNFg8NDAwNGxQVEBYgHSIiIB0fHyQoNCwkJjEnHx8tPS0xNTc6OjojKz9EPzhDNDk6NwEKCgoNDA0aDw8aNyUfJTc3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'},
            {animalName: 'Whale', category: 'Mammal', description: 'Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. As an informal and colloquial grouping, they correspond to large members of the infraorder Cetacea, i.e. all cetaceans apart from dolphins and porpoises.', imageURL: 'https://hips.hearstapps.com/hmg-prod/images/where-to-go-whale-watching-virginia-1522419979.jpg?resize=1200:*'}
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
});
