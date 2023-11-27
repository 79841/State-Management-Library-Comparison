import { ContextTester } from "./_components/ContextTester";
import { RecolilTester } from "./_components/RecoilTester";
import { ReduxTester } from "./_components/ReduxTester";

export default function Home() {
  return (
    <main>
      <ContextTester />
      <ReduxTester />
      <RecolilTester />
    </main>
  );
}
