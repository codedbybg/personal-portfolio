import { useState } from "react";
import Button from "./components/common/Button";
import Card from "./components/common/Card";
import Container from "./components/common/Container";
import SectionHeading from "./components/common/SectionHeading";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
  };

  return (
    <div className={theme === "light" ? "light" : ""}>
      <main className="min-h-screen bg-[var(--background)] py-20 text-[var(--foreground)] transition-colors duration-300">
        <Container>

          <div className="flex justify-end">
            <Button
              variant="secondary"
              onClick={toggleTheme}
            >
              Switch Theme
            </Button>
          </div>

          <section className="mt-20">
            <SectionHeading
              eyebrow="Day 3"
              title="Design System"
              description="Building a consistent visual foundation for the entire portfolio."
              align="center"
            />

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              <Card>
                <h3 className="text-xl font-semibold">
                  Reusable Card
                </h3>

                <p className="mt-3 text-[var(--muted)]">
                  This card component can be reused across
                  projects, skills, education and certificates.
                </p>
              </Card>

              <Card>
                <h3 className="text-xl font-semibold">
                  Reusable Components
                </h3>

                <p className="mt-3 text-[var(--muted)]">
                  Consistent components make the application
                  easier to maintain and scale.
                </p>
              </Card>

            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button>
                Primary Button
              </Button>

              <Button variant="secondary">
                Secondary Button
              </Button>
            </div>

          </section>

        </Container>
      </main>
    </div>
  );
}

export default App;