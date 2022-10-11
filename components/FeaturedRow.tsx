import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import GalleryCard from './GalleryCard'
import { Icon } from '@rneui/themed';
import { useTailwind } from 'tailwind-rn/dist';
import useMuseums from '../hooks/useMuseums';
import { useNavigation } from '@react-navigation/native';

const FeaturedRow = () => {
  const tw = useTailwind();
  const navigation = useNavigation();
  const { loading, error, museums} = useMuseums();

  return (
    <View>
        <ScrollView 
            horizontal
            contentContainerStyle={{
                paddingHorizontal: 15,
            }}
            showsHorizontalScrollIndicator={false}
            style={tw("pt-4")}
        >

        {/* GalleryCard */}
        {museums?.map(museum => (
                <GalleryCard
                  key={museum.galleryId}
                  imgUrl={museum.imgUrl}
                  Address={museum.Address}
                  rating={museum.rating}
                  MuseumName={museum.MuseumName}
                />
        ))}

      </ScrollView>
    </View>
  );
};


export default FeaturedRow