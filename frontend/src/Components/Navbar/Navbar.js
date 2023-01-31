import NavItem from "./NavItem";

const Navbar = (props) => {
  return props ? (
    <ul>
      {props.map(
        (
          NavItem,
          index // don't rely on index keys, lazy for now
        ) => (
          <li key={index}>
            <NavItem />
          </li>
        )
      )}
    </ul>
  ) : (
    <p>Empty list.</p>
  );
};

export default Navbar;
