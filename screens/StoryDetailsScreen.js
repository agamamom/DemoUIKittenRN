import { Divider, Layout, Text, TopNavigation, TopNavigationAction, Card } from '@ui-kitten/components';

import { ArrowIosBackIcon } from '../assets/icons'
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export const StoryDetailsScreen = ({ navigation }) => {
    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={ArrowIosBackIcon} onPress={navigateBack} />
    );

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='Story' alignment='center' accessoryLeft={BackAction} />
            <Divider />
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Card>
                    <Text>
                        The Maldives, officially the Republic of Maldives, is a small country in South Asia,
                        located in the Arabian Sea of the Indian Ocean.
                        It lies southwest of Sri Lanka and India, about 1,000 kilometres (620 mi) from the Asian continent
                    </Text>
                </Card>
            </Layout>
        </SafeAreaView>
    );
};