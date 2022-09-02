import { toast } from "react-toastify";
import { useId } from "react";
import { useNetwork } from "wagmi";
import { EType } from "../Enums";

/**
 * @description - This function is used to display a toast message
 * @param {string} message
 * @param {string} txnHash
 * @param {EType} type - success, error, warning, info
 * @returns {void}
 **/
const useToast = () => {
  const id = useId();
  const { chain } = useNetwork();

  const toastify = (message = "", txnHash = "", type = EType.info) => {
    toast[type](
      <div className="text-center">
        {" "}
        {message}
        {type === EType.success && txnHash && (
          <p>
            <a
              href={`${chain.blockExplorers.default.url}/tx/${txnHash}`}
              rel="noopener noreferrer"
              target="_blank"
              className="text-secondary"
              style={{
                textDecoration: "underline",
                fontSize: "14px",
                marginBottom: "-3rem!important",
                marginTop: "1.5rem",
              }}
            >
              check here for transaction details
            </a>
          </p>
        )}
      </div>,
      {
        position: toast.POSITION.TOP_CENTER,
        autoClose: type === EType.success ? 10000 : 3000,
        [type === EType.success && "icon"]: "",
        toastId: id,
      }
    );
  };

  return toastify;
};

export default useToast;
