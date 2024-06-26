import { GoArrowRight } from "react-icons/go";

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
  variant: "rounded" | "primary";
  loading?: boolean;
  small?: boolean;
};
const Button: React.FC<Props> = ({
  text,
  className,
  variant,
  loading,
  small,
}: Props) => {
    const handleClick = ()=>{
        if(text=="Whitepaper"){
            const pdfPath =
            import.meta.env.VITE_APP_PUBLIC_URL + "/Whitepaper-SAINTAI.pdf";
          window.open(pdfPath, "_blank");
        }
        else{
            window.location.href="https://app.saintai.io/"
        }
    }
  const getButtonClassName = (variant: string): string => {
    switch (variant) {
      case "primary":
        return "";
      case "rounded":
        return "bg-primary text-black font-bold rounded-full px-2 pr-5 py-2";
      default:
        return "";
    }
  };
  let varientClassName = getButtonClassName(variant);

  return (
    <>
      {small ? (
        <button
          disabled={loading}
          onClick={ () => {
            window.location.href = "https://app.saintai.io/";
          }}
          className={`${varientClassName} flex  space-x-1 items-center disabled:bg-slate-400 ${className} `}
        >
          {" "}
          {variant == "rounded" && (
            <span className="p-1 rounded-full bg-white">
              {" "}
              <GoArrowRight height={7} width={7} />
            </span>
          )}{" "}
          <span>{loading ? "Loading..." : text}</span>
        </button>
      ) : (
        <button
          disabled={loading}
          onClick={ 
handleClick
          }
          className={`${varientClassName} flex  space-x-3 items-center disabled:bg-slate-400 ${className} `}
        >
          {" "}
          {variant == "rounded" && (
            <span className="p-3 rounded-full bg-white">
              {" "}
              <GoArrowRight height={12} width={12} />
            </span>
          )}{" "}
          <span>{loading ? "Loading..." : text}</span>
        </button>
      )}
    </>
  );
};

export default Button;
