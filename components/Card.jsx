import clsx from "clsx";

export default function Card(props) {
  const { onClick, active } = props;
  return (
    <div
      onClick={onClick}
      className={`${
        active ? "bg-accent" : "bg-white"
      } p-6 text-white rounded-lg cursor-pointer transition duration-300 drop-shadow-lg`}
    >
      <div className="flex items-center gap-4 mb-4">
        <div
          className={`w-12 h-12 flex items-center justify-center p-1 rounded-lg ${
            props.logoColor || "bg-white"
          }`}
        >
          <img alt={props.subTitle} src={`/${props.logo}`} className="w-2/3" />
        </div>
        <div>
          <h4
            className={`duration-300 font-semibold text-md ${
              active ? "text-white" : "text-black"
            }`}
          >
            {props.title}
          </h4>
          <p
            className={`duration-300 ${
              active ? "text-white/70" : "text-black/70"
            }`}
          >
            {props.subTitle}
          </p>
        </div>
      </div>
      <p
        className={`${
          active ? "text-white/80" : "text-black/80"
        } mb-4 duration-300`}
      >
        {props.description}
      </p>
      <hr
        className={clsx(
          "block h-[1px] mb-4",
          "border-none",
          "transition",
          active ? "bg-white/20" : "bg-black/10"
        )}
      />
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex gap-2">
          {props.skills.map((skill) => (
            <span
              key={skill}
              className={`block px-4 py-1 rounded-full font-medium text-sm mr-1 duration-300 ${
                active ? "bg-white/20 text-white" : "bg-black/10 text-black"
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
        <span
          className={`text-sm font-semibold duration-300 ${
            active ? "text-white" : "text-black"
          }`}
        >
          {props.salary}
        </span>
      </div>
    </div>
  );
}
