import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./Navbar";
import { SideBar } from "./Sidebar";
import { AvatarDocumentation } from "./AvatarDocumentation";
import { AlertDocumentation } from "./AlertDocumentation";
import { BadgeDocumentation } from "./BadgeDocumentation";
import { ButtonDocumentation } from "./ButtonDocumentation";
import { CardDocumentation } from "./CardDocumentation";
import { HeadingDocumentation } from "./HeadingDocumentation";
import { TextDocumentation } from "./TextDocumentation";
import { ImageDocumentation } from "./ImageDocumentation";

const Documentation = () => {
  return (
    <div className="documentation-page">
      <Navbar />
      <div className="doc-layout">
        <SideBar />
        <div className="route-container">
          <Routes>
            <Route path="/avatar" element={<AvatarDocumentation />} />
            <Route path="/alert" element={<AlertDocumentation />} />
            <Route path="/badge" element={<BadgeDocumentation />} />
            <Route path="/button" element={<ButtonDocumentation />} />
            <Route path="/card" element={<CardDocumentation />} />
            <Route path="/heading" element={<HeadingDocumentation />} />
            <Route path="/text" element={<TextDocumentation />} />
            <Route path="/image" element={<ImageDocumentation />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export { Documentation };
