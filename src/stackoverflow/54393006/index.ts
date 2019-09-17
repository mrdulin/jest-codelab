import { NativeModules } from './react-native';

export function main() {
  return NativeModules.MyCustomNativeModule.dismiss();
}
