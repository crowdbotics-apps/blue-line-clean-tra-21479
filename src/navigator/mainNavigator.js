import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile142223Navigator from '../features/UserProfile142223/navigator';
import Tutorial142222Navigator from '../features/Tutorial142222/navigator';
import NotificationList142194Navigator from '../features/NotificationList142194/navigator';
import Settings142193Navigator from '../features/Settings142193/navigator';
import Settings142185Navigator from '../features/Settings142185/navigator';
import UserProfile142183Navigator from '../features/UserProfile142183/navigator';
import UserProfile142152Navigator from '../features/UserProfile142152/navigator';
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
UserProfile142223: { screen: UserProfile142223Navigator },
Tutorial142222: { screen: Tutorial142222Navigator },
NotificationList142194: { screen: NotificationList142194Navigator },
Settings142193: { screen: Settings142193Navigator },
Settings142185: { screen: Settings142185Navigator },
UserProfile142183: { screen: UserProfile142183Navigator },
UserProfile142152: { screen: UserProfile142152Navigator },
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
