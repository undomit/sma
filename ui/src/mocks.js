export const mockPlants = {
    "plants": [
        {
            "plantId": "13",
            "name": "Testplant 1",
            "timezone": "Europe/Berlin"
        },
        {
            "plantId": "24",
            "name": "TestPlant2",
            "timezone": "Europe/Berlin"
        },
        {
            "plantId": "35",
            "name": "TestPlant3",
            "timezone": "Europe/Berlin"
        },
        {
            "plantId": "46",
            "name": "TestPlant4",
            "timezone": "Europe/Berlin"
        },
        {
            "plantId": "57",
            "name": "TestPlant5",
            "timezone": "Europe/Berlin"
        },
        {
            "plantId": "68",
            "name": "TestPlant6",
            "timezone": "Europe/Berlin"
        },
        {
            "plantId": "79",
            "name": "TestPlant7",
            "timezone": "Europe/Berlin"
        },
        {
            "plantId": "90",
            "name": "TestPlant8",
            "timezone": "Europe/Berlin"
        },
        {
            "plantId": "101",
            "name": "TestPlant9",
            "timezone": "Europe/Berlin"
        }
    ]
};

export const mockDevices = {
    "plant": {
        "plantId": "13",
        "name": "Testplant 1",
        "timezone": "Europe/Berlin"
    },
    "devices": [
        {
            "deviceId": "14",
            "name": "Satellit Sensor",
            "timezone": "Europe/Berlin",
            "type": "Sensor technology",
            "product": "Satellite Sensor",
            "productId": 200053,
            "vendor": "SMA Solar Technology AG",
            "isActive": true
        },
        {
            "deviceId": "15",
            "name": "MyTestLdm1",
            "timezone": "Europe/Berlin",
            "type": "Monitoring and control",
            "product": "EDMM-10",
            "productId": 9397,
            "serial": "234534635778",
            "vendor": "SMA Solar Technology AG",
            "isActive": true
        },
        {
            "deviceId": "16",
            "name": "My Inverter 1",
            "timezone": "Europe/Berlin",
            "type": "Solar Inverters",
            "product": "STP 6000TL-20",
            "productId": 9099,
            "serial": "3421111",
            "vendor": "SMA Solar Technology AG",
            "generatorPower": 6000.0,
            "isActive": true
        },
        {
            "deviceId": "17",
            "name": "My Inverter 2",
            "timezone": "Europe/Berlin",
            "type": "Solar Inverters",
            "product": "STP 5000TL-20",
            "productId": 9098,
            "serial": "9687867",
            "vendor": "SMA Solar Technology AG",
            "generatorPower": 5000.0,
            "isActive": true
        },
        {
            "deviceId": "18",
            "name": "My Falcon 3",
            "timezone": "Europe/Berlin",
            "type": "Solar Inverters",
            "product": "SB3.6-1AV-40",
            "productId": 9320,
            "serial": "463688",
            "vendor": "SMA Solar Technology AG",
            "generatorPower": 3600.0,
            "isActive": true
        },
        {
            "deviceId": "19",
            "name": "My Battery 1",
            "timezone": "Europe/Berlin",
            "type": "Battery Inverter",
            "product": "SBS6.0-10",
            "productId": 9359,
            "serial": "4562245",
            "vendor": "SMA Solar Technology AG",
            "isActive": true
        },
        {
            "deviceId": "20",
            "name": "My Energy Meter 1",
            "timezone": "Europe/Berlin",
            "type": "Monitoring and control",
            "product": "Energy Meter",
            "productId": 9307,
            "serial": "567811567",
            "vendor": "SMA Solar Technology AG",
            "isActive": true
        },
        {
            "deviceId": "21",
            "name": "My Gas Meter 1",
            "timezone": "Europe/Berlin",
            "type": "Monitoring and control",
            "product": "Energy Meter",
            "productId": 9307,
            "serial": "89781197",
            "vendor": "SMA Solar Technology AG",
            "isActive": true
        },
        {
            "deviceId": "22",
            "name": "My Consumer 1",
            "timezone": "Europe/Berlin",
            "type": "Monitoring and control",
            "product": "Remote Socket",
            "productId": 9111,
            "serial": "5411674564",
            "vendor": "SMA Solar Technology AG",
            "isActive": true
        },
        {
            "deviceId": "23",
            "name": "My ChargingStation 1",
            "timezone": "Europe/Berlin",
            "type": "Solar Inverters",
            "product": "STP50-41",
            "productId": 9431,
            "serial": "1334234534",
            "vendor": "SMA Solar Technology AG",
            "isActive": true
        }
    ]
}

export const mockDetails = {
    "plant": {
        "plantId": "13",
        "name": "Testplant 1",
        "timezone": "Europe/Berlin"
    },
    "details": {
        "deviceId": "16",
        "name": "My Inverter 1",
        "timezone": "Europe/Berlin",
        "type": "Solar Inverters",
        "product": "STP 6000TL-20",
        "productId": 9099,
        "serial": "3421111",
        "vendor": "SMA Solar Technology AG",
        "generatorPower": 6000.0,
        "isActive": true,
        "ipAddress": "127.0.0.1",
        "firmwareVersion": "1.0.0.0.R",
        "communicationProtocol": "Speedwire",
        "startUpUtc": "2020-12-07T00:00:00",
        "isResetted": false,
        "termOfGuarantee": "2021-12-08T00:00:00"
    }
}