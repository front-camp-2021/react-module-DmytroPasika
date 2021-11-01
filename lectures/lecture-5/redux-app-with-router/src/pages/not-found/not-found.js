import React from "react";
import { Header, Image } from "semantic-ui-react";

export function NotFoundPage() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Header>Sorry, this route does not exist</Header>
      <Image
        src="not-found.png"
        as="a"
        size="medium"
        href="http://google.com"
        target="_blank"
      />
    </section>
  );
}
