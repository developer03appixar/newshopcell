import React from 'react';
import { View, SafeAreaView, StatusBar} from 'react-native';
import { color } from '../../assets/AppStyles';
import styles from './styles';

import { AreaChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape'

export default function Dashboard(props) {


    //==============================================================
    // Declaration const and States
    //==============================================================

    // Const receive data DrawerNavigator
    // const infosUser = props.route.params;

    const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

    //==============================================================
    // OtherMethods
    //==============================================================

    //Function to navigate
    // function nav(page, action) { 
    //     props.navigation.navigate(page, { action, infosUser });
    // };


    //==============================================================
    // Render
    //==============================================================

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#0090de" />

            <View style={styles.container}>
                <View style={styles.body}>

                    <View style={{ height: '30%', margin: 10, marginBottom: 0, elevation: 1, backgroundColor: 'white', borderRadius: 15}}>
                        <AreaChart
                            style={{ height: 200 }}
                            data={data}
                            contentInset={{ top: 30, bottom: 30 }}
                            curve={shape.curveNatural}
                            svg={{ fill: color.primary }}
                        >
                        </AreaChart>
                    </View>


                    <View style={styles.dashboard}>
                        <View style={styles.bodyDashboard}>
                            <BtnCard
                                title='Produtos'
                                icon='cube-outline'
                                onPress={() => nav('Product')}
                            />
                            <BtnCard
                                title='Clientes'
                                icon='people-outline'
                                onPress={() => nav('ListClients', "RegisterClient")}
                            />
                        </View>

                        <View style={styles.bodyDashboard}>
                            <BtnCard
                                title='Fornecedores'
                                icon='people-circle-outline'
                                onPress={() => nav('ListProviders')}
                            />
                            <BtnCard
                                title='Serviços'
                                icon='receipt-outline'
                                onPress={() => nav('Services')}
                            />
                        </View>
                    </View>
                    {/* <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            paddingBottom: 15,
                            position: 'relative',
                        }}
                    >
                        <FAB
                            onPress={() => nav('ListClients', "RegisterSale")}
                            style={AppStyles.fab}
                            icon="currency-usd"
                        />
                    </View> */}
                </View>
            </View>
        </SafeAreaView>
    );
};