import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn/dist';
import { formatNumber, truncate } from '../scripts/scripts';
import StarRating from 'react-native-star-rating-widget';
import { Icon } from '@rneui/themed';

type Props = {
    MuseumName: string;    
    Address: string;    
    rating:  number;
}

const RatingCard = ({MuseumName, Address, rating}: Props) => {
    const navigation = useNavigation();
    const tw = useTailwind();
    const [ratings, setRating] = useState(0);

  return (
    <View>
        <TouchableOpacity>
            <View style={tw("bg-[#242c38] px-4 mx-4 rounded-2xl")}>  
                <View style={tw("flex-row py-4 justify-between")}>
                    <View>
                        <Text style={tw("font-bold text-white ")}>{MuseumName}</Text>
                        <Text style={tw("text-gray-500 text-xs")}>{truncate(Address, 40)}</Text>
                        <Text style={tw("text-white")}>{formatNumber(rating)}</Text>
                    </View>
                    <View>
                        <Icon
                            name="arrow-forward-ios"
                            type="materialicons"
                            color={"gray"}
                        />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default RatingCard