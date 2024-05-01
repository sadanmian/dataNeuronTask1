import React from "react";
import { Splitter, SplitterPanel } from "primereact/splitter";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function App() {
  return (
    <PrimeReactProvider>
      <Splitter style={{ height: "100vh" }} layout="vertical">
        <SplitterPanel size={50}>
          <Splitter>
            <SplitterPanel
              className="flex align-items-center justify-content-center"
              size={20}
            >
              Component 1
            </SplitterPanel>
            <SplitterPanel
              className="flex align-items-center justify-content-center"
              size={80}
            >
              Component 2
            </SplitterPanel>
          </Splitter>
        </SplitterPanel>
        <SplitterPanel
          className="flex align-items-center justify-content-center"
          size={50}
        >
          Component 3
        </SplitterPanel>
      </Splitter>
    </PrimeReactProvider>
  );
}
