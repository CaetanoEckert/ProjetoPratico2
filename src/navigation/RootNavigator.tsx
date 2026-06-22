import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAuth } from '../hooks/useAuth';
import { Loader } from '../components/UI';
import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ForgotPasswordScreen } from '../screens/ForgotPasswordScreen';
import { MenuScreen } from '../screens/MenuScreen';
import { TaskListsScreen } from '../screens/TaskListsScreen';
import { ListFormScreen } from '../screens/ListFormScreen';
import { TasksScreen } from '../screens/TasksScreen';
import { TaskFormScreen } from '../screens/TaskFormScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { ReportScreen } from '../screens/ReportScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { RootStackParamList } from '../types';
const Stack=createNativeStackNavigator<RootStackParamList>();
export function RootNavigator(){ const {session,loading}=useAuth(); if(loading) return <Loader/>; return <Stack.Navigator screenOptions={{headerShown:false}}>{!session ? <><Stack.Screen name="Login" component={LoginScreen}/><Stack.Screen name="Register" component={RegisterScreen}/><Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/></> : <><Stack.Screen name="Main" component={MenuScreen}/><Stack.Screen name="TaskLists" component={TaskListsScreen}/><Stack.Screen name="ListForm" component={ListFormScreen}/><Stack.Screen name="Tasks" component={TasksScreen}/><Stack.Screen name="TaskForm" component={TaskFormScreen}/><Stack.Screen name="History" component={HistoryScreen}/><Stack.Screen name="Report" component={ReportScreen}/><Stack.Screen name="Settings" component={SettingsScreen}/></>}</Stack.Navigator> }
