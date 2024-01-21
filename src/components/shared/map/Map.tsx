import MapView, {Marker} from "react-native-maps";
import React from "react";
import {View} from "react-native";

const Map = () => {

    return (
        <View style={{
            marginTop: 5,
            borderWidth: 1,
            borderRadius: 10,
            borderColor: '#623EA0',
            overflow: 'hidden'
        }}>
            <MapView
                style={{height: 150, }}
                minZoomLevel={10}
                maxZoomLevel={15}
                initialRegion={{
                    latitude: 56.852868,
                    longitude: 60.615279,
                    latitudeDelta: 0.1222,
                    longitudeDelta: 0.0421,
                }}>
                <Marker
                    coordinate={{
                        latitude: 56.852868,
                        longitude: 60.615279,
                    }}
                    title={"ул. Луначарского, 38"}
                    description={"Театр"}
                />
            </MapView>
        </View>
    )
}

export default Map