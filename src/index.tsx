import {
    SafeAreaView
} from 'react-native';

import { Provider } from 'react-redux';

import store from './store';

import Shop from './screen/shop';

const AppStartUp = () => {
    return (
        <Provider store={store}>
            <SafeAreaView>
                <Shop />
            </SafeAreaView>
        </Provider>
    )
};

export default AppStartUp;