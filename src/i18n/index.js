import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';

import nl from './nl';

const resources = {
  nl,
};

const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager?.settings.AppleLocale ||
      NativeModules.SettingsManager?.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

i18n.use(initReactI18next).init({
  resources,
  lng: deviceLanguage,

  keySeparator: false,

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
