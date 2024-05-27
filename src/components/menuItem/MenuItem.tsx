import Link from "next/link";

type Props = {
  name: string;
};

const MenuItem = ({ name }: Props) => {
  return (
    <li>
      <Link
        className="hover:bg-fuchsia-600 hover:text-white p-2 rounded-md"
        href={`/${name === "início" ? "" : "services"}`}
      >
        <span className=" capitalize">{name}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
