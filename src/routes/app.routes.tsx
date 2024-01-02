import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {Welcome} from '../pages/Welcome'
import {Schedule} from '../pages/Schedule'
import {ScheduleListView} from '../pages/Schedule/ScheduleListenner'
import {ScheduleDetail} from '../pages/Schedule/ScheduleDetail'
import {Finish} from '../pages/Finish'

export type StackPramsList = {
  Welcome: any;
  Schedule: {
    name: string;
    phone: string;
    calendarDate: [];
    hours: string;
    service: [];
    pagament: []
  },
  ScheduleListView: undefined;
  ScheduleDetail: {
    name: string;
    phone: string;
    calendarDate: [];
    hours: string;
    service: [];
    pagament: []
  };
  Finish: {
    name: string;
    phone: string;
    calendarDate: [];
    hours: string;
    service: [];
    pagament: []
  }
};

const AppStack = createNativeStackNavigator<StackPramsList>();

export function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={Welcome}
      />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="ScheduleListView"
        component={ScheduleListView}
      />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Schedule"
        component={Schedule}
      />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="ScheduleDetail"
        component={ScheduleDetail}
      />
      <AppStack.Screen
        options={{ headerShown: false }}
        name="Finish"
        component={Finish}
      />
    </AppStack.Navigator>
  );
}
