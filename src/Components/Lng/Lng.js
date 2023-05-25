import React from "react";
import { View, Text } from "react-native";
import SwitchSelector from 'react-native-switch-selector';
import { useStyles } from "./Lng.style";
import { useTranslation } from 'react-i18next';



export const Lng = () => {
    const style = useStyles();
    const options = [
        { label: 'Russian', value: 'ru' },
        { label: 'English', value: 'en' },
        { label: 'French', value: 'fr' },
    ]
    const { t, i18n } = useTranslation()
    const selectLanguage = () => {
        if (i18n.language=='ru'){
            return(0);
        } else if (i18n.language=='en'){
            return(1);
        }else if (i18n.language=='fr'){
            return(2);
        } else {
            return 0;
        }
    }

    return (
        <View>
            <View style={style.sw}>
                <SwitchSelector
                    options={options}
                    hasPadding
                    initial={selectLanguage()}
                    onPress={(lng)=>i18n.changeLanguage(lng)}
                />
            </View>
            <View style={style.main}>
                <Text style={style.text}>{t('TestText')}</Text>
            </View>
        </View>
    )
}