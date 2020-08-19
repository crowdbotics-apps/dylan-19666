import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile92085Navigator from '../features/UserProfile92085/navigator';
import Tutorial92084Navigator from '../features/Tutorial92084/navigator';
import NotificationList92056Navigator from '../features/NotificationList92056/navigator';
import Settings92055Navigator from '../features/Settings92055/navigator';
import Settings92047Navigator from '../features/Settings92047/navigator';
import UserProfile92045Navigator from '../features/UserProfile92045/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile92085: { screen: UserProfile92085Navigator },
Tutorial92084: { screen: Tutorial92084Navigator },
NotificationList92056: { screen: NotificationList92056Navigator },
Settings92055: { screen: Settings92055Navigator },
Settings92047: { screen: Settings92047Navigator },
UserProfile92045: { screen: UserProfile92045Navigator },

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
