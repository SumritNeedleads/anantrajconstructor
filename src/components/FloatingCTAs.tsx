/* src/components/FloatingCTAs.tsx */
import { FC } from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

interface FloatingCTAsProps {
  /** E.164 formatted phone number, e.g. +919876543210 */
  phoneNumber: string;
  /** Optional WhatsApp default message */
  whatsappMsg?: string;
}

const FloatingCTAs: FC<FloatingCTAsProps> = ({
  phoneNumber,
  whatsappMsg = "Hi, I’d like to know more!",
}) => {
  const whatsappLink = `https://wa.me/${phoneNumber.replace(
    /[^0-9]/g,
    ""
  )}?text=${encodeURIComponent(whatsappMsg)}`;

  const telLink = `tel:${phoneNumber}`;

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center transition-all duration-150"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>

      {/* Call */}
      <a
        href={telLink}
        aria-label="Call us"
        className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg flex items-center justify-center transition-all duration-150"
      >
        <FaPhone className="text-white text-2xl" />
      </a>
    </div>
  );
};

export default FloatingCTAs;
