import React from "react";
import Link from "next/link";
function allCollection({ data }) {
  return (
    <div className="mt-5">
      {data.map((item, index) => (
        <Link href={`/collection/${item}`} key={index}>
          <a>
            <h1>{item.toUpperCase()}</h1>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default allCollection;

export async function getStaticProps() {
  const res = await fetch(`http://localhost:8000/collections`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
}
