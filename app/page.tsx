import Navbar from "./_components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid place-items-center h-dvh">
        <div className="text-center text-primary-500">
          <h6>Aeon Bank Assessment</h6>
          <p>by Nicole Chee</p>
        </div>
      </main>
    </>
  );
}
