import { View, Text, TextInput, TouchableNativeFeedbackComponent, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Divider, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import FeaturedRow from '../components/FeaturedRow';
import RatingCard from '../components/RatingCard';
import useMuseums from '../hooks/useMuseums';
import ImageSlider from 'react-native-image-slider';

type Props = {
    imgUrl: string;    
    MuseumName: string;    
    Address: string;    
    rating: number;
    galleryImages: string[]
}

const TicketsScreen = ({imgUrl, MuseumName, Address, rating, galleryImages}: Props) => {
    const tw = useTailwind();
    const navigation = useNavigation();
    const { loading, error, museums} = useMuseums();
    const [featuredCategories, setFeaturedCategories] = useState([])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

  return ( 
    <SafeAreaView style={tw("bg-[#1e232d]")}>
        {/* Back Arrow/Bookmark Button */}
        <View style={tw("flex-row justify-between")}>
            <View style={tw("flex-row")}>
                <Icon
                    name="arrow-back-ios"
                    type="materialicons"
                    color={"#b4824b"}
                />
                <Text style={tw("text-base text-white")}>Edit</Text>
            </View>
            <View style={tw("flex-row")}>
                <Icon
                    name="bookmark-outline"
                    type="ionicons"
                    color={"#b4824b"}
                    size={22}
                />
            </View>
        </View>
        {/* Back Arrow/Bookmark Button */}

        <View style={tw("justify-center")}>
            <Text style={tw("text-xs text-gray-500 text-center")}>Piazza SS, Apostoli, 66 Roma</Text>
            <Text style={tw("text-3xl text-white text-center")}>Palazzo Colonna</Text>
            <Text style={tw("text-xs text-yellow-700 text-center")}>Edit</Text>
        </View>

        <Divider style={tw("pt-1 mx-4")} color="white" /> 

        {/* Virtual Tour/Play Button */}
        <View style={tw("flex-row justify-between")}>
            <View style={tw("flex-row")}>
                <Text style={tw("text-base text-white")}>Virtual Tour</Text>
            </View>
            <View style={tw("bg-[#b4824b] h-7 w-7 rounded-full")}>
                <Icon
                    name="play"
                    type="foundation"
                    color={"white"}
                />
            </View>
        </View>
        <ScrollView>

        </ScrollView>
    </SafeAreaView>
  )
}

export default TicketsScreen