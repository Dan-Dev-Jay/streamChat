import { Slot } from "expo-router"; // can use Slot or Stack navigator
import { AuthProvider } from "../src/context/auth";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}
