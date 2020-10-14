import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial142151Navigator from '../features/Tutorial142151/navigator';
import NotificationList142123Navigator from '../features/NotificationList142123/navigator';
import Settings142122Navigator from '../features/Settings142122/navigator';
import Settings142114Navigator from '../features/Settings142114/navigator';
import UserProfile142112Navigator from '../features/UserProfile142112/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial142151: { screen: Tutorial142151Navigator },
NotificationList142123: { screen: NotificationList142123Navigator },
Settings142122: { screen: Settings142122Navigator },
Settings142114: { screen: Settings142114Navigator },
UserProfile142112: { screen: UserProfile142112Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
