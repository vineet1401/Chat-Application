import useLogout from "../../Hooks/useLogout";

const Navbar = () => {

  const {logout} = useLogout();

  return (
    <div className="navbar h-[10vh] bg-blue-700">
      <div className="flex-1">
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
        <a className="btn btn-ghost text-2xl">Chat Wave</a>
      </div>
      <div className="flex-none">
        <button className="btn btn-square btn-ghost" onClick={logout}>
        <img width="48" height="48" src="https://img.icons8.com/badges/48/exit.png" alt="exit"/>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
