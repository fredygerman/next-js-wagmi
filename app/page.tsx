import AccountView from "./components/account-view";

export default async function IndexPage() {
  return (
    <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
        <AccountView />
      </div>
    </section>
  );
}
