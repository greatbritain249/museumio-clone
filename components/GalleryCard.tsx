import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import StarRating from 'react-native-star-rating-widget';
import { formatNumber, truncate } from '../scripts/scripts';


type Props = {
    imgUrl: string;    
    MuseumName: string;    
    Address: string;    
    rating: number;
}

const GalleryCard = ({imgUrl, MuseumName, Address, rating}: Props) => {
    const navigation = useNavigation();
    const tw = useTailwind();

  return (
    <TouchableOpacity  
        style={tw("shadow")}>
        <View>
            <View style={tw("pr-4")}>
            <Image
                source={{
                    uri: imgUrl,
                }}
                style={{width: 250, 
                        height: 175.0, 
                        borderTopLeftRadius: 8, 
                        borderTopRightRadius: 8, 
                        borderBottomRightRadius: 8, 
                        borderBottomLeftRadius: 8,
                        }}
            />
            </View>

            <View style={tw("py-4")}>
                <Text style={tw("font-bold text-white ")}>{MuseumName}</Text>
                <Text style={tw("text-gray-500 text-xs")}>{truncate(Address, 40)}</Text>
                <Text style={tw("text-white")}>{formatNumber(rating)}</Text>
            </View>
        </View>
    </TouchableOpacity>
  );
};

export default GalleryCard