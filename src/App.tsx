import { Routes, Route, Link } from "react-router-dom";
import UnicornScene from "./components/UnicornScene";
import Navbar from "./components/Navbar.tsx";

function Home() {
  return (
    <>
      <UnicornScene
        projectId="HD9f8NpAEdpaPz15FjVa"
        width="100%"
        height="100%"
        scale={1}
        dpi={1.5}
        lazyLoad={false}
        altText="Cupolalabs Landing Background"
      />
      {/* CTA Button below the slogan */}
      <Link
        to="/manifesto"
        className="absolute left-1/2 top-[60%] md:top-[56%] -translate-x-1/2 px-8 py-3 rounded-full shadow-xl font-bold mt-4 md:mt-0 transition duration-200 hover:drop-shadow-[0_0_16px_#FFF4B9] hover:shadow-[0_0_32px_#FFF4B9]"
        style={{
          background: "rgba(255, 244, 185, 0.55)",
          color: "#1B1B1B",
          fontFamily: "Poppins, sans-serif",
          fontWeight: 800,
          fontSize: "1.15rem",
          border: "2px solid rgba(255,244,185,0.35)",
          boxShadow: "0 8px 32px 0 rgba(255,244,185,0.18)",
          backdropFilter: "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
        }}
      >
        Read Our Manifesto
      </Link>
    </>
  );
}
function Manifesto() {
  return (
    <div className="pt-20 md:pt-32 max-w-2xl mx-auto pb-16 px-4 text-[#FFF4B9]">
      <h1 className="text-3xl font-bold mb-6">Manifesto</h1>
      <ol className="list-decimal list-inside space-y-6 text-lg">
        <li>
          <span className="font-bold">We Value Unconventional Thinking:</span>{" "}
          Cupola Labs is dedicated to thinking differently from the crowd. We
          seek to solve real human problems by challenging assumptions and
          exploring solutions beyond the ordinary.
        </li>
        <li>
          <span className="font-bold">We Are Language-Agnostic:</span> Our
          projects are built to be programming language agnostic. We believe in
          using the right tool for the job and developing technology that is
          accessible and adaptable to all.
        </li>
        <li>
          <span className="font-bold">We Practice Radical Transparency:</span>{" "}
          All communication with contributors is conducted openly. We are
          committed to a foundation of transparency, where our community is
          informed and engaged in every step of our process.
        </li>
        <li>
          <span className="font-bold">We Embrace the Power of Community:</span>{" "}
          We believe that open, honest dialogue with our community leads to
          better outcomes. Every voice matters, and we encourage open
          participation and feedback.
        </li>
        <li>
          <span className="font-bold">We Harness Automation for Progress:</span>{" "}
          With the rapid advancement of AI, many basic software tasks can now be
          automated. We empower individuals to quickly contribute to the
          projects they use, whether by fixing issues or adding new features.
        </li>
        <li>
          <span className="font-bold">We Build for the Future:</span> Our
          mission is to develop projects that embody these principles, fostering
          innovation, openness, and meaningful impact for all.
        </li>
      </ol>
    </div>
  );
}
function OpenSource() {
  return (
    <div className="pt-20 md:pt-32 flex justify-center">
      <div className="w-full md:w-[100vw] md:max-w-[672px] px-4">
        <h1 className="text-3xl font-bold mb-6 text-[#FFF4B9]">Open Source</h1>
        <p className="text-[#FFF4B9]/90 text-base mb-6">
          Cupola Labs is committed to building open source tools for AI,
          developer productivity, and the future of software.
        </p>
        <ul className="divide-y divide-[#FFF4B9]/30">
          <li className="py-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#FFF4B9]">Wrapper</span>
            </div>
            <p className="text-[#FFF4B9]/80 text-sm mt-1 font-medium">
              LLM inference and MCP tooling in the terminal over TUI.
              <span className="ml-2">
                <a
                  href="https://github.com/cupolalabs/wrapper"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-xs font-semibold hover:opacity-80"
                >
                  GitHub
                </a>
                <span className="mx-1">·</span>
                <a
                  href="https://wrapper.sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-xs font-semibold hover:opacity-80"
                >
                  Website
                </a>
              </span>
            </p>
          </li>
          <li className="py-6">
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-[#FFF4B9]">AI SDK</span>
            </div>
            <p className="text-[#FFF4B9]/80 text-sm mt-1 font-medium">
              A gateway for multiple AI providers, written in Rust.
              <span className="ml-2">
                <a
                  href="https://github.com/cupolalabs/ai-sdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-xs font-semibold hover:opacity-80"
                >
                  GitHub
                </a>
                <span className="mx-1">·</span>
                <a
                  href="https://ai-sdk.rs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-xs font-semibold hover:opacity-80"
                >
                  Website
                </a>
              </span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
function Terms() {
  return (
    <div className="max-w-2xl mx-auto pt-20 md:pt-32 pb-16 px-4 text-[#FFF4B9]">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-4">Last updated: June 2025</p>
      <p className="mb-4">
        Welcome to Cupola Labs, LLC. By accessing or using our website,
        products, or services, you agree to be bound by these Terms of Service.
        If you do not agree to these terms, please do not use our services.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">1. Use of Service</h2>
      <p className="mb-4">
        You must be at least 13 years old to use our services. You agree not to
        misuse our services or help anyone else do so. You may not use our
        services for any unlawful or prohibited purpose.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        2. Intellectual Property
      </h2>
      <p className="mb-4">
        All content, trademarks, and data on this site, including but not
        limited to software, databases, text, graphics, icons, and hyperlinks
        are the property of Cupola Labs, LLC or its licensors and are protected
        by United States and international copyright laws.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">3. Disclaimers</h2>
      <p className="mb-4">
        Our services are provided "as is" and "as available" without warranties
        of any kind, either express or implied. Cupola Labs, LLC does not
        warrant that the services will be uninterrupted, error-free, or secure.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        4. Limitation of Liability
      </h2>
      <p className="mb-4">
        To the maximum extent permitted by law, Cupola Labs, LLC shall not be
        liable for any indirect, incidental, special, consequential, or punitive
        damages, or any loss of profits or revenues, whether incurred directly
        or indirectly.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to modify these Terms at any time. Changes will be
        effective immediately upon posting. Your continued use of our services
        constitutes acceptance of the revised Terms.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">6. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of the State of Delaware, United
        States, without regard to its conflict of law principles.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
      <p>
        If you have any questions about these Terms, please DM us on{" "}
        <a
          href="https://x.com/cupolalabs"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          X (@cupolalabs)
        </a>
        .
      </p>
    </div>
  );
}
function Privacy() {
  return (
    <div className="max-w-2xl mx-auto pt-20 md:pt-32 pb-16 px-4 text-[#FFF4B9]">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4">Last updated: June 2025</p>
      <p className="mb-4">
        Cupola Labs, LLC ("we", "us", or "our") is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your information when you use our website, products, and
        services.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        1. Information We Collect
      </h2>
      <p className="mb-4">
        We may collect personal information you provide to us, such as your
        name, email address, and any other information you choose to provide. We
        may also collect information automatically, such as your IP address,
        browser type, and usage data.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">2. Use of Information</h2>
      <p className="mb-4">
        We use your information to provide, maintain, and improve our services,
        communicate with you, and comply with legal obligations.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        3. Sharing of Information
      </h2>
      <p className="mb-4">
        We do not sell your personal information. We may share information with
        service providers who assist us in operating our services, or as
        required by law.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">4. Cookies</h2>
      <p className="mb-4">
        We may use cookies and similar tracking technologies to enhance your
        experience. You can control cookies through your browser settings.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">5. Data Security</h2>
      <p className="mb-4">
        We implement reasonable security measures to protect your information.
        However, no method of transmission over the Internet or electronic
        storage is 100% secure.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">6. Children's Privacy</h2>
      <p className="mb-4">
        Our services are not directed to children under 13. We do not knowingly
        collect personal information from children under 13.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">
        7. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Changes will be
        effective immediately upon posting. Your continued use of our services
        constitutes acceptance of the revised policy.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">8. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please DM us on{" "}
        <a
          href="https://x.com/cupolalabs"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          X (@cupolalabs)
        </a>
        .
      </p>
    </div>
  );
}
function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-[#FFF4B9]">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-8 text-lg">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-2 rounded-full font-bold text-[#1B1B1B] bg-[#FFF4B9] hover:bg-[#fff9d6] transition"
      >
        Go to Home
      </Link>
    </div>
  );
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manifesto" element={<Manifesto />} />
        <Route path="/open-source" element={<OpenSource />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* Footer */}
      <footer className="w-full flex items-center justify-between px-8 py-3 fixed bottom-0 left-0 z-50 backdrop-blur-lg bg-white/10 border-t border-white/20">
        <div className="flex gap-4 text-xs text-[#FFF4B9] opacity-80">
          <Link to="/terms" className="hover:underline">
            Terms
          </Link>
          <span>&middot;</span>
          <Link to="/privacy" className="hover:underline">
            Privacy
          </Link>
        </div>
        <div className="flex gap-4 text-[#FFF4B9] items-center drop-shadow-lg">
          <a
            href="https://x.com/cupolalabs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            title="X"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/company/cupolalabs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            title="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://github.com/cupolalabs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            title="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://discord.com/invite/Ecb49reHXE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80"
            title="Discord"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.317 4.3693a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
