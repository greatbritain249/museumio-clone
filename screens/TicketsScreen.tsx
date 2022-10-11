import { View, Text, TextInput, TouchableNativeFeedbackComponent, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Divider, Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import FeaturedRow from '../components/FeaturedRow';
import RatingCard from '../components/RatingCard';
import useMuseums from '../hooks/useMuseums';

const TicketsScreen = () => {
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
        {/* Search */}
        <View style={tw("flex-row items-center py-4")}>
            <View style={tw("flex-row flex-1 rounded-lg bg-[#242c38] mx-4 justify-between")}>
                <View style={tw("flex-row flex-1 p-2")}> 
                    <Icon
                        name="search"
                        type="material-icon"
                        color={ "white" }
                    />
                    <TextInput style={tw("text-white pl-2")}
                        placeholder="City, Country"
                        keyboardType="default"
                        placeholderTextColor={"white"}
                    />
                </View> 
                <View style={tw("pr-2")}>
                    <Icon
                        name="sliders"
                        type="font-awesome"
                        color={ "white" }
                        size={20}
                    />
                </View>    
            </View>
            <TouchableOpacity >
                <View  style={tw("bg-[#b4824b] rounded-lg flex-row p-2")}>
                    <Icon
                        name="star-o"
                        type="font-awesome"
                        color={ "white" }
                    />
                </View>     
            </TouchableOpacity>          
        </View>

        <ScrollView>
            {/* Ticket Info */}
            <View style={tw("bg-[#1e232d] pb-2")}>  
                <View style={tw("bg-[#242c38] py-4 mx-4 rounded-2xl")}>  
                    <View style={tw("bg-[#242c38]")}>
                        <View style={tw("flex-row px-4 justify-between")}>
                            <Text style={tw("bg-[#242c38] pt-4 text-gray-500")}>Location</Text>
                            <Text style={{fontSize: 30, color: "white"}}>Rome, Italy</Text>
                        </View>   
                            <Divider style={tw("pt-1 mx-4")} /> 
                    </View>
                    <View style={tw("bg-[#242c38] pt-3")}>  
                        <View style={tw("flex-row px-4 justify-between")}>
                            <Text style={tw("bg-[#242c38] pt-4 text-gray-500")}>Price tag</Text>
                            <Text style={{fontSize: 30, color: "white"}}>€325/month</Text>
                        </View>   
                            <Divider style={tw("pt-1 mx-4")} color="white" /> 
                    </View> 
                    <View style={tw("bg-[#242c38] pt-3")}>  
                        <View style={tw("flex-row px-4 justify-between")}>
                            <Text style={tw("bg-[#242c38] pt-4 text-gray-500")}>Museums</Text>
                            <Text style={{fontSize: 30, color: "white"}}>165</Text>
                        </View>   
                            <Divider style={tw("pt-1 mx-4")} color="white" /> 
                    </View> 
                </View>  
            </View>  

            {/* Editor Header */}
            <View style={tw("flex-row mx-2 justify-between")}>
                <Text style={{fontSize: 30, color: "gray"}}>Editors choice</Text>
            </View> 

            <FeaturedRow />

            {/* Rating Header */}
            <View style={tw("flex-row px-1 justify-between")}>
                <Text style={{fontSize: 30, color: "gray"}}>Rating</Text>
            </View> 

            <View style={tw("bg-[#1e232d] px-1")}>  
                {museums?.map(museum => (
                    <RatingCard
                        key={museum.galleryId}
                        Address={museum.Address}
                        rating={museum.rating}
                        MuseumName={museum.MuseumName}
                    />
                ))}
            </View>  
        </ScrollView>
    </SafeAreaView>
  )
}

export default TicketsScreen