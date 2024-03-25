import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Form from "../screens/Form";
import Users from "../screens/Users";
import { user } from "../data/Profile";

import schoolsRepository from "../models/user/SchoolRepository";

const users = schoolsRepository.getAll();

const Tab = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#000000"}}}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="home"
              size={24}
              color={focused ? "#D6D6D6" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Inicial",
          tabBarActiveTintColor: "#D6D6D6",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Users"
        component={Users}
        initialParams={{ users }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="book"
              size={24}
              color={focused ? "#D6D6D6" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Escolas",
          tabBarActiveTintColor: "#D6D6D6",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{ data: user }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="book-open"
              size={24}
              color={focused ? "#D6D6D6" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Detalhes",
          tabBarActiveTintColor: "#D6D6D6",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />

      <Tab.Screen
        name="Form"
        component={Form}
        initialParams={{ user: null, edit: false }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name="user-plus"
              size={24}
              color={focused ? "#D6D6D6" : "#D6D6D6"}
            />
          ),
          tabBarLabel: "Cadastro",
          tabBarActiveTintColor: "#D6D6D6",
          tabBarInactiveTintColor: "#D6D6D6",
        }}
      />
    </Tab.Navigator>
  );
};

export default TabRoutes;
