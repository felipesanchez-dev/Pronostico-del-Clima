import React, { useCallback, useState } from 'react';
import { Image, SafeAreaView, TextInput, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MagnifyingGlassIcon } from 'react-native-heroicons/outline';
import { CalendarDaysIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { debounce } from 'lodash';
import { fetchLocations, fetchWeatherForecast } from '@/api/weather';
import { theme } from '@/constants/Colors';

export default function Home() {
    const [showSearch, toggleSearch] = useState(false);
    const [locations, setLocations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<any | null>(null);
    const handleSearch = async (value: string) => {
        if (value.length > 2) {
            setLoading(true);
            try {
                const data = await fetchLocations({ cityName: value });
                setLocations(data || []);
            } catch (err) {
                console.error('Error en búsqueda:', err);
                setError('Error al buscar ubicaciones');
            } finally {
                setLoading(false);
            }
        }
    };
    const handleLocation = async (loc: { name: string }) => {
        setLocations([]);
        setLoading(true);
        try {
            const data = await fetchWeatherForecast({
                cityName: loc.name,
                days: '7'
            });
            setWeatherData(data);
        } catch (err) {
            console.error('Error obteniendo pronóstico:', err);
            setError('Error al obtener el pronóstico');
        } finally {
            setLoading(false);
        }
    };
    const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
    const current = weatherData?.current;
    return (
        <View className="flex-1 relative">
            <StatusBar style="light" />
            <Image
                blurRadius={70}
                source={require("../assets/images/bg.png")}
                className="absolute h-full w-full"
            />
            <SafeAreaView className="flex flex-1">
                <View style={{ marginTop: 45 }} className="mx-4 relative z-50">
                    <View
                        className="flex-row justify-between items-center"
                        style={{
                            backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
                            height: 50,
                            borderRadius: 25,
                            overflow: "hidden",
                        }}
                    >
                        {showSearch && (
                            <TextInput
                                onChangeText={handleTextDebounce}
                                placeholder="Buscar Ciudad"
                                placeholderTextColor="lightgray"
                                className="pl-6 pr-3 flex-1 text-base text-white"
                                style={{
                                    height: "100%",
                                    textAlignVertical: "center",
                                    borderRadius: 25,
                                }}
                            />
                        )}
                        <TouchableOpacity
                            onPress={() => toggleSearch(!showSearch)}
                            style={{ backgroundColor: theme.bgWhite(0.3) }}
                            className="rounded-full p-3 m-1"
                        >
                            <MagnifyingGlassIcon size={25} color="white" />
                        </TouchableOpacity>
                    </View>
                    {locations.length > 0 && showSearch && (
                        <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                            <ScrollView>
                                {locations.map((loc: { name: string; country: string }, index) => {
                                    const showBorder = index + 1 !== locations.length;
                                    return (
                                        <TouchableOpacity
                                            onPress={() => handleLocation(loc)}
                                            key={index}
                                            className={`flex-row items-center p-3 px-4 ${
                                                showBorder ? "border-b-2 border-b-gray-400" : ""
                                            }`}
                                        >
                                            <MapPinIcon size={20} color="gray" />
                                            <Text className="text-black text-lg ml-2">
                                                {loc.name}, {loc.country}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </ScrollView>
                        </View>
                    )}
                </View>
                <View className="mx-4 flex justify-around flex-1 mb-2">
                    <Text className="text-white text-center text-2xl font-bold">
                        {weatherData?.location?.name},{" "}
                        <Text className="text-lg font-semibold text-gray-300">
                            {weatherData?.location?.region} {weatherData?.location?.country}
                        </Text>
                    </Text>
                    <View className="flex-row justify-center">
                        {current?.condition?.icon && (
                            <Image
                                source={{ uri: `https://${current?.condition?.icon}` }}
                                className="w-52 h-52"
                            />
                        )}
                    </View>
                    <View className="space-y-2">
                        <Text className="text-center font-bold text-white text-6xl ml-5">
                            {current?.temp_c}&#176;
                        </Text>
                        <Text className="text-center text-white text-xl tracking-widest">
                            {current?.condition?.text || "Esperando una busqueda..."}
                        </Text>
                    </View>
                    <View className="flex-row justify-between mx-4">
                        <View className="flex-row items-center">
                            <Image source={require("../assets/icons/wind.png")} className="h-6 w-6" />
                            <Text className="ml-2 text-white font-semibold text-base">
                                {current?.wind_kph || 0} km/h
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <Image source={require("../assets/icons/drop.png")} className="h-6 w-6" />
                            <Text className="ml-2 text-white font-semibold text-base">
                                {current?.humidity || 0}%
                            </Text>
                        </View>
                        <View className="flex-row items-center">
                            <Image source={require("../assets/icons/sun.png")} className="h-6 w-6" />
                            <Text className="ml-2 text-white font-semibold text-base">
                                {weatherData?.forecast?.forecastday[0]?.astro?.sunset || "N/A"}
                            </Text>
                        </View>
                    </View>
                </View>
                {/* Pronóstico diario */}
                <View className="mb-7 space-y-3">
                    <View className="flex-row items-center mx-5 space-x-2">
                        <CalendarDaysIcon size={22} color="white" />
                        <Text className="text-white text-base ml-2">Pronóstico diario</Text>
                    </View>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{ paddingHorizontal: 15 }}
                        showsHorizontalScrollIndicator={false}
                    >
                        {weatherData?.forecast?.forecastday?.map(
                            (day: { date: string; day: { avgtemp_c: number; condition: { icon: string; text: string } } }, index: number) => (
                                <View
                                    key={index}
                                    className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                                    style={{
                                        backgroundColor: theme.bgWhite(0.15),
                                        marginTop: 10,
                                    }}
                                >
                                    <Image
                                        source={{ uri: `https://${day.day.condition.icon}` }}
                                        className="h-11 w-11"
                                    />
                                    <Text className="text-white">{day.date}</Text>
                                    <Text className="text-white text-xl font-semibold">
                                        {day.day.avgtemp_c}&#176;
                                    </Text>
                                </View>
                            )
                        )}
                    </ScrollView>
                </View>
            </SafeAreaView>
        </View>
    );
};
