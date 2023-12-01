import { ContextTester } from "./_components/ContextTester";
import { RecolilTester } from "./_components/RecoilTester";
import { ReduxTester } from "./_components/ReduxTester";
import { ZustandTester } from "./_components/ZustandTester";

export default function Home() {
  return (
    <main className="flex">
      <ContextTester />
      <ReduxTester />
      <RecolilTester />
      <ZustandTester />
    </main>
  );
}
