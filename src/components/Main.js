const Main = () => {
  return (
    <nav className=" flex items-center justify-between w-full h-28">
      <img src="./Logo.png" className=" w-48 max-h-28	" alt=""></img>
      <ul className=" flex font-bold gap-5 p-2 m-2">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>
    </nav>
  );
};
export default Main;
