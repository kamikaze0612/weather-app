import { MdSunny } from "react-icons/md";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-3xl text-neutral-600 font-medium">Weather</span>
      <MdSunny className="text-yellow-400 text-3xl" />
    </div>
  );
};

export default Logo;
