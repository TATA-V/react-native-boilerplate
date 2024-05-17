import {SafeAreaView, StatusBar, Text, useColorScheme} from 'react-native';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-neutral-100 dark:bg-slate-900 w-full h-full';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#2B2B30' : '#F4F4F4'}
      />
      <Text className="bg-green-300 p-4 text-green-900 m-10 border border-solid border-green-900 rounded">
        zzzz
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
